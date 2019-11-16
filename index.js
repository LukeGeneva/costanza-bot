const _ = require('lodash');
const markov = require('./markov');
const tokenize = require('./tokenize');
const fetchGeorgeLines = require('./tools/fetchGeorgeLines');

fetchGeorgeLines().then(lines => {
  const model = lines.reduce(
    (model, line) => markov(tokenize(line), model),
    {}
  );

  const starters = Object.keys(model).filter(key => model[key].starts > 0);
  let current = _.sample(starters);
  while (model[current].ends === 0) {
    console.log(current);
    current = _.sample(Object.keys(model[current].followers));
  }
});
