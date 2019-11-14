const markov = require('./markov');

test('creates an inital data structure', () => {
  const model = markov().feed('A');
  expect(model.data).toEqual({ A: { startPct: 1 } });
});

test('updates entry count', () => {
  const model = markov('A');
  const model2 = markov('B', model);
  expect(model2.entries).toBe(2);
});
