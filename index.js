const _ = require('lodash');
const markov = require('./markov');
const tokenize = require('./tokenize');
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const model = require('./data/model.json');

const rl = readline.createInterface(
  fs.createReadStream(path.resolve('./data/lines.txt'))
);
const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', printStatement);

function printStatement() {
  // const model = lines.reduce((model, line) => {
  //   const tokens = tokenize(line);
  //   if (!tokens) return model;
  //   return markov(tokenize(line), model);
  // }, {});

  const starters = Object.keys(model).filter((key) => model[key].starts > 0);
  let current = _.sample(starters);
  let result = '';
  let endsSeen = 0;
  while (endsSeen < 10) {
    if (model[current].ends > 0) endsSeen += 1;
    result += ` ${current}`;
    current = _.sample(Object.keys(model[current].followers));
  }
  console.log(result);
}
