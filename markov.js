const DEFAULT = {
  entries: 0,
  model: {}
};

const markov = (input, model = DEFAULT) => {
  return {
    entries: model.entries + 1,
    data: {
      A: { startPct: 1 }
    }
  };
};

module.exports = markov;
