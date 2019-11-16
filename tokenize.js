const tokenize = text => {
  return text.split(/\b/).filter(word => word !== ' ');
};

module.exports = tokenize;
