const markov = require('./markov');

test('builds a basic model', () => {
  const tokens = ['Hello', 'world'];
  const model = markov(tokens, {});
  expect(model).toEqual({
    Hello: {
      starts: 1,
      ends: 0,
      followers: { world: 1 }
    },
    world: {
      starts: 0,
      ends: 1,
      followers: {}
    }
  });
});

test('handles repeat words', () => {
  const tokens = ['A', 'A'];
  const model = markov(tokens, {});
  expect(model).toEqual({
    A: {
      starts: 1,
      ends: 1,
      followers: { A: 1 }
    }
  });
});
