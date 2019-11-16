const markov = require('./markov');
const tokenize = require('./tokenize');

const model = markov(tokenize('I am a dog and I run fast'));

console.log(model);
