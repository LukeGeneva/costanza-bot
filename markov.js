const markov = (tokens, model = {}, previous) => {
  if (tokens.length === 0) return model;
  const [token] = tokens;
  model[token] = model[token] || { starts: 0, followers: {} };
  if (!!previous) {
    model[previous].followers[token] = model[previous].followers[token] || 0;
    model[previous].followers[token] += 1;
  }
  if (!previous) model[token].starts += 1;
  return markov(tokens.slice(1), model, token);
};

module.exports = markov;
