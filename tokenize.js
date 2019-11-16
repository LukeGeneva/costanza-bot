const tokenize = text => text.match(/[\w']+|[.,?!;]/g);

module.exports = tokenize;
