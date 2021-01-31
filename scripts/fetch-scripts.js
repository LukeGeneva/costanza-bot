const fs = require('fs');
const path = require('path');
const { default: fetch } = require('node-fetch');
const readline = require('readline');

const rl = readline.createInterface(
  fs.createReadStream(path.resolve('../data/script-links.txt'))
);

const links = [];

rl.on('line', (line) => {
  links.push(line);
});

rl.on('close', fetchScripts);

async function fetchScripts() {
  for (let link of links) {
    const response = await fetch(link);
    const text = await response.text();
    const filename = linkToFilename(link);
    fs.writeFileSync(path.resolve(`../data/scripts/${filename}`), text);
  }
}

function linkToFilename(link) {
  const segments = link.split('/');
  return segments[segments.length - 1];
}
