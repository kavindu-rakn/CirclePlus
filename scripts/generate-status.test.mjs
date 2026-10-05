import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { render, validate, stats, statuses } from './generate-status.mjs';
import { progressFixture } from './fixtures/progress.mjs';
const liveData = JSON.parse(readFileSync(new URL('../project/progress.yaml',import.meta.url),'utf8'));
const data = progressFixture;
const copy = () => structuredClone(data);
test('live roadmap validates and renders deterministically without fixed counts', () => {
 assert.doesNotThrow(() => validate(liveData));
 assert.equal(render(liveData), render(structuredClone(liveData)));
});
test('fixed fixture renders deterministically without application credit', () => {
 assert.equal(render(data),render(copy()));
 const v1 = data.phases.filter(p => p.release === 'v1').flatMap(p => p.tasks);
 assert.equal(stats(v1.filter(t => t.kind === 'implementation')).done,0);
 assert.equal(stats(v1).done,1);
 assert.ok(render(data).includes('Application implementation: `[--------------------] 0%'));
});
test('legitimate planning and application completion update separate counts', () => {
 const d=copy();
 const selected=()=>d.phases.filter(p=>p.release==='v1').flatMap(p=>p.tasks);
 const application=()=>selected().filter(t=>t.kind==='implementation');
 const planning=d.phases[0].tasks[1];
 planning.status='done'; planning.completion_evidence=['accepted planning PR'];
 d.current_task=null;
 assert.doesNotThrow(()=>validate(d));
 assert.equal(stats(selected()).done,2);
 assert.equal(stats(selected()).percent,33);
 assert.equal(stats(application()).done,0);
 assert.match(render(d),/Overall tracked v1 tasks:.*33% \(2\/6\)/);
 const app=d.phases[1].tasks[0];
 app.status='done'; app.completion_evidence=['accepted application PR'];
 assert.doesNotThrow(()=>validate(d));
 assert.equal(stats(selected()).done,3);
 assert.equal(stats(selected()).percent,50);
 assert.equal(stats(application()).done,1);
 assert.equal(stats(application()).percent,100);
 assert.match(render(d),/Overall tracked v1 tasks:.*50% \(3\/6\)/);
 assert.match(render(d),/Application implementation:.*100% \(1\/1\)/);
});
test('only done counts; active and remaining form disjoint counts', () => {
 const s=stats(statuses.map(status => ({status})));
 assert.deepEqual(s,{total:8,done:1,active:4,remaining:3,percent:13});
 assert.equal(stats([]).percent,0);
});
test('later release tasks do not inflate v1 percentage', () => {
 const d=copy(); const t=d.phases.at(-1).tasks[0]; t.status='done'; t.blockers=[]; t.completion_evidence=['approved experimental PR'];
 assert.equal(render(data).split('Overall tracked')[1].split('\n')[0],render(d).split('Overall tracked')[1].split('\n')[0]);
});
for (const [name,edit,pattern] of [
 ['status',d=>d.phases[0].tasks[0].status='complete',/Invalid status/],
 ['confidence',d=>d.phases[0].tasks[0].historical_confidence='certain',/Invalid confidence/],
 ['routing',d=>d.phases[0].tasks[0].effort='Max',/Invalid routing/],
 ['duplicate ID',d=>d.phases[0].tasks[1].id=d.phases[0].tasks[0].id,/Duplicate/],
 ['done without evidence',d=>d.phases[0].tasks[0].completion_evidence=[],/Done needs evidence/],
 ['blocked without reason',d=>{d.phases[0].tasks[2].status='blocked';d.phases[0].tasks[2].blockers=[]},/Blocked needs/],
 ['unknown dependency',d=>d.phases[0].tasks[1].dependencies=['missing'],/Unknown\/self/],
 ['cycle',d=>{d.phases[0].tasks[3].dependencies=['p0-05'];d.phases[0].tasks[4].dependencies=['p0-04']},/cycle/],
 ['active unmet gate',d=>d.phases[1].tasks[0].status='in_progress',/Unfinished dependency/],
 ['unknown current task',d=>d.current_task='missing',/Unknown current_task/],
 ['wrong current phase',d=>d.current_phase='p1',/not in current phase/],
 ['unsafe PR link',d=>d.phases[0].tasks[0].pr='javascript:bad',/Invalid issue\/PR/]
]) test(`reject invalid ${name}`,()=>{const d=copy();edit(d);assert.throws(()=>validate(d),pattern)});
test('CLI rejects stale output, regenerates, checks CRLF and propagates invalid data errors', () => {
 const temp=mkdtempSync(join(tmpdir(),'circleplus-status-'));
 try {
  mkdirSync(join(temp,'scripts'));mkdirSync(join(temp,'project'));
  writeFileSync(join(temp,'scripts/generate-status.mjs'),readFileSync(new URL('./generate-status.mjs',import.meta.url)));
  writeFileSync(join(temp,'project/progress.yaml'),JSON.stringify(data));
  const run=(...args)=>spawnSync(process.execPath,[join(temp,'scripts/generate-status.mjs'),...args],{encoding:'utf8'});
  assert.equal(run('--check').status,1);
  assert.equal(run().status,0);assert.equal(run('--check').status,0);
  const dashboard=join(temp,'STATUS.md');writeFileSync(dashboard,readFileSync(dashboard,'utf8').replaceAll('\n','\r\n'));
  assert.equal(run('--check').status,0);
  writeFileSync(dashboard,'stale');assert.equal(run('--check').status,1);
  writeFileSync(join(temp,'project/progress.yaml'),'bad data');assert.equal(run().status,1);
 } finally { rmSync(temp,{recursive:true,force:true}); }
});
