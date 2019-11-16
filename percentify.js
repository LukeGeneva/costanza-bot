const percentify = tokens => {
  return tokens.reduce((pcts, token) => {
    const pct = pcts[token] || 0;
    return { ...pcts, [token]: pct + 1 / tokens.length };
  }, {});
};

module.exports = percentify;
