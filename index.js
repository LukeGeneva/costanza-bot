const markov = require('./markov');
const tokenize = require('./tokenize');
const fetchGeorgeLines = require('./tools/fetchGeorgeLines');

fetchGeorgeLines().then(lines => {
  const model = lines.reduce(
    (model, line) => markov(tokenize(line), model),
    {}
  );
  console.log(model);
});
