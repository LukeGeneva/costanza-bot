const markov = (tokens, model = {}, prevToken) => {
  if (tokens.length === 0) {
    if (!prevToken) return model;
    model[prevToken].ends += 1;
    return model;
  }
  const [token] = tokens;
  model[token] = model[token] || { starts: 0, ends: 0, followers: {} };
  if (!!prevToken) {
    model[prevToken].followers[token] = model[prevToken].followers[token] || 0;
    model[prevToken].followers[token] += 1;
  }
  if (!prevToken) model[token].starts += 1;
  return markov(tokens.slice(1), model, token);
};

module.exports = markov;
