const percentify = require('./percentify');

test('reports 100% for a single word distribution', () => {
  expect(percentify(['A'])).toEqual({ A: 1 });
});

test('reports 50% for two individual tokens', () => {
  expect(percentify(['Hello', 'world'])).toEqual({ Hello: 0.5, world: 0.5 });
});
