const tokenize = require('./tokenize');

test('splits on spaces', () => {
  expect(tokenize('Hello world')).toEqual(['Hello', 'world']);
});

test('splits on punctuation', () => {
  expect(tokenize('Hello.')).toEqual(['Hello', '.']);
});
