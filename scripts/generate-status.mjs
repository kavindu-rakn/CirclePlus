import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const statuses = ['backlog', 'ready', 'in_progress', 'review', 'learning_gate', 'ready_to_merge', 'done', 'blocked'];
const confidence = ['high', 'medium', 'low', 'unknown'];
const models = ['GPT-6.1 Sol', 'GPT-6 Luna', 'GPT-6 Astra'];
const efforts = ['Medium', 'High', 'Extra'];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
function requireThat(condition, message) { if (!condition) throw new Error(message); }
function string(value) { return typeof value === 'string' && value.trim().length > 0 && !/[\r\n]/.test(value); }
function strings(value) { return Array.isArray(value) && value.every(string); }
function link(value) { return value === null || (string(value) && /^https:\/\/github\.com\/[^/]+\/[^/]+\/(issues|pull)\/\d+$/.test(value)); }
export function validate(data) {
  requireThat(data.schema_version === 1, 'Unsupported schema_version');
  requireThat(string(data.project) && string(data.version), 'Project/version required');
  requireThat(strings(data.blockers), 'Project blockers must be an array of strings');
  requireThat(Array.isArray(data.phases) && data.phases.length > 0, 'Phases required');
  const ids = new Set(); const phaseIds = new Set(); const tasks = [];
  for (const phase of data.phases) {
    requireThat(string(phase.id) && /^[a-z0-9-]+$/.test(phase.id) && !phaseIds.has(phase.id), 'Duplicate/invalid phase ID');
    phaseIds.add(phase.id);
    requireThat(string(phase.title) && string(phase.release) && Array.isArray(phase.tasks) && phase.tasks.length > 0, `Invalid phase ${phase.id}`);
    for (const task of phase.tasks) {
      requireThat(string(task.id) && /^[a-z0-9-]+$/.test(task.id) && !ids.has(task.id), 'Duplicate/invalid task ID'); ids.add(task.id);
      requireThat(string(task.title) && ['planning','research','implementation'].includes(task.kind), `Invalid title/kind: ${task.id}`);
      requireThat(statuses.includes(task.status), `Invalid status: ${task.id}`);
      requireThat(confidence.includes(task.historical_confidence), `Invalid confidence: ${task.id}`);
      requireThat(models.includes(task.model) && efforts.includes(task.effort), `Invalid routing: ${task.id}`);
      requireThat(link(task.issue) && link(task.pr), `Invalid issue/PR URL: ${task.id}`);
      for (const field of ['dependencies','blockers','sources','completion_evidence']) requireThat(strings(task[field]), `Invalid ${field}: ${task.id}`);
      requireThat(task.sources.length > 0, `Source missing: ${task.id}`);
      requireThat(task.status !== 'done' || task.completion_evidence.length > 0, `Done needs evidence: ${task.id}`);
      requireThat(task.status !== 'blocked' || task.blockers.length > 0, `Blocked needs a reason: ${task.id}`);
      requireThat(new Set(task.dependencies).size === task.dependencies.length, `Duplicate dependency: ${task.id}`);
      tasks.push(task);
    }
  }
  requireThat(phaseIds.has(data.current_phase), 'Unknown current phase');
  requireThat(data.phases.some(p => p.release === data.version), 'Version has no tracked tasks');
  const byId = new Map(tasks.map(t => [t.id, t]));
  for (const field of ['current_task','next_task']) requireThat(data[field] === null || byId.has(data[field]), `Unknown ${field}`);
  if (data.current_task !== null) requireThat(data.phases.find(p => p.id === data.current_phase).tasks.some(t => t.id === data.current_task), 'Current task not in current phase');
  for (const field of ['current_task','next_task']) if (data[field] !== null) requireThat(byId.get(data[field]).status !== 'done', `${field} is already done`);
  for (const task of tasks) for (const dep of task.dependencies) {
    requireThat(byId.has(dep) && dep !== task.id, `Unknown/self dependency: ${task.id} -> ${dep}`);
    if (['ready','in_progress','review','learning_gate','ready_to_merge','done'].includes(task.status)) requireThat(byId.get(dep).status === 'done', `Unfinished dependency: ${task.id} -> ${dep}`);
  }
  const visiting = new Set(); const visited = new Set();
  function visit(id) {
    requireThat(!visiting.has(id), `Dependency cycle: ${id}`);
    if (visited.has(id)) return;
    visiting.add(id); for (const dep of byId.get(id).dependencies) visit(dep);
    visiting.delete(id); visited.add(id);
  }
  for (const id of ids) visit(id);
  return data;
}
function escaped(value) { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('|','\\|').replaceAll('[','\\[').replaceAll(']','\\]'); }
export function stats(tasks) {
  const done = tasks.filter(t => t.status === 'done').length;
  const active = tasks.filter(t => ['in_progress','review','learning_gate','ready_to_merge'].includes(t.status)).length;
  return { total: tasks.length, done, active, remaining: tasks.length - done - active, percent: tasks.length ? Math.round(done / tasks.length * 100) : 0 };
}
function bar(s) { const full = s.total ? Math.round(s.done / s.total * 20) : 0; return `[${'#'.repeat(full)}${'-'.repeat(20-full)}] ${s.percent}% (${s.done}/${s.total})`; }
export function render(data) {
  validate(data);
  const all = data.phases.flatMap(p => p.tasks);
  const selected = data.phases.filter(p => p.release === data.version).flatMap(p => p.tasks);
  const current = all.find(t => t.id === data.current_task);
  const next = all.find(t => t.id === data.next_task);
  const phase = data.phases.find(p => p.id === data.current_phase);
  const overall = stats(selected); const app = stats(selected.filter(t => t.kind === 'implementation'));
  const blockers = [...data.blockers, ...all.flatMap(t => t.blockers.map(b => `${t.id}: ${b}`))];
  const lines = ['# Project Status', '', '> Generated from `project/progress.yaml`. Do not edit this file. Run `node scripts/generate-status.mjs`.', '',
    `Project: **${escaped(data.project)}** · Release: **${escaped(data.version)}**`, '',
    `Overall tracked ${escaped(data.version)} tasks: \`${bar(overall)}\``, '',
    `Application implementation: \`${bar(app)}\``, '',
    `Done: **${overall.done}** · In progress/review/learning/ready to merge: **${overall.active}** · Remaining backlog/ready/blocked: **${overall.remaining}**`, '',
    'Equal task weight; only `done` counts. Planning is included in overall progress. Later releases/experiments are excluded. Percentages are rounded task counts, not effort estimates.', '',
    '## Current work', '', `- Phase: **${escaped(phase.id)} — ${escaped(phase.title)}**`,
    `- Task: ${current ? `**${current.id} — ${escaped(current.title)}** (${current.status})` : 'None selected'}`,
    `- Issue: ${current?.issue ?? 'Not assigned'}`, `- PR: ${current?.pr ?? 'Not opened'}`,
    `- Recommended model/effort: ${current ? `${current.model} / ${current.effort}` : 'None'}`,
    `- Historical evidence confidence: ${current?.historical_confidence ?? 'unknown'}`,
    `- Dependencies: ${current?.dependencies.join(', ') || 'None'}`,
    `- Next task: ${next ? `${next.id} — ${escaped(next.title)} (${next.status})` : 'None selected'}`, '',
    'Model/effort above is a recommendation; verify runtime settings. Evidence confidence does not equal phase approval.', '',
    '## Phase progress', '', '| Phase | Release | Completion | Active | Remaining |', '|---|---|---|---:|---:|'];
  for (const p of data.phases) { const s = stats(p.tasks); lines.push(`| ${escaped(p.id)} — ${escaped(p.title)} | ${escaped(p.release)} | ${s.percent}% (${s.done}/${s.total}) | ${s.active} | ${s.remaining} |`); }
  lines.push('', '## Blockers and gates', '');
  lines.push(...(blockers.length ? blockers.map(b => `- ${escaped(b)}`) : ['None recorded.']));
  lines.push('', '## Tasks', '', 'Source and completion evidence paths are recorded in the progress source. Unfinished dependencies are gates, even when status remains backlog.', '');
  const byId = new Map(all.map(t => [t.id,t]));
  for (const p of data.phases) {
    lines.push(`### ${escaped(p.id)} — ${escaped(p.title)}`, '', '| ID / task | Status | Evidence confidence | Model / effort | Dependencies (pending marked *) | Issue / PR |', '|---|---|---|---|---|---|');
    for (const t of p.tasks) lines.push(`| ${t.id} — ${escaped(t.title)} | ${t.status} | ${t.historical_confidence} | ${t.model} / ${t.effort} | ${t.dependencies.map(d => d + (byId.get(d).status === 'done' ? '' : '*')).join(', ') || '—'} | ${[t.issue,t.pr].filter(Boolean).join(' / ') || '—'} |`);
    lines.push('');
  }
  lines.push('See [workflow/model routing](docs/19-ai-engineering-workflow.md), [Learning Gate](docs/20-learning-and-pr-teaching.md), and [phase exit criteria](docs/15-roadmap-and-implementation-plan.md).', '');
  return lines.join('\n');
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    requireThat(process.argv.slice(2).every(a => a === '--check') && process.argv.length <= 3, 'Usage: node scripts/generate-status.mjs [--check]');
    const data = JSON.parse(readFileSync(resolve(root,'project/progress.yaml'),'utf8'));
    const output = render(data); const target = resolve(root,'STATUS.md');
    if (process.argv.includes('--check')) {
      requireThat(existsSync(target) && readFileSync(target,'utf8').replaceAll('\r\n','\n') === output, 'STATUS.md is stale. Run node scripts/generate-status.mjs and commit both files.');
      console.log('Progress valid; STATUS.md is current.');
    } else { writeFileSync(target,output,'utf8'); console.log('Generated STATUS.md.'); }
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
