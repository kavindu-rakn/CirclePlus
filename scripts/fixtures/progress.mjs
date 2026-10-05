// Fixed test data: roadmap completion must not change exact-count expectations.
const task = (id, status = 'backlog', dependencies = [], kind = 'planning') => ({
 id, title: id, kind, status, dependencies, issue: null, pr: null,
 historical_confidence: 'medium', model: 'GPT-6.1 Sol', effort: 'Medium',
 blockers: [], sources: ['fixture source'],
 completion_evidence: status === 'done' ? ['fixture acceptance'] : []
});
export const progressFixture = {
 schema_version: 1, project: 'Test project', version: 'v1',
 current_phase: 'p0', current_task: 'p0-02', next_task: 'p0-03', blockers: [],
 phases: [
  {id: 'p0', title: 'Planning', release: 'v1', tasks: [
   task('p0-01', 'done'), task('p0-02', 'review'), task('p0-03', 'ready'),
   task('p0-04', 'backlog', ['p0-03']), task('p0-05', 'backlog', ['p0-03'])
  ]},
  {id: 'p1', title: 'Application', release: 'v1', tasks: [
   task('p1-01', 'backlog', ['p0-02'], 'implementation')
  ]},
  {id: 'experimental', title: 'Experiments', release: 'experimental', tasks: [
   task('experimental-01', 'backlog', [], 'implementation')
  ]}
 ]
};
