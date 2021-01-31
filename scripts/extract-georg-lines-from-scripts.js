const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = path.resolve('../data/scripts');

const isGeorgeLine = (line) => line.toLowerCase().startsWith('george:');

const dir = fs.readdirSync(SCRIPT_DIR);
for (let file of dir) {
  const html = fs.readFileSync(path.join(SCRIPT_DIR, file));
  const $ = cheerio.load(html);
  $('p').each((i, p) => {
    const text = $(p).text() || '';
    if (isGeorgeLine(text)) {
      const cleanedText = text
        .replace(/\n/g, '')
        .replace(/\s+/g, ' ')
        .replace(/george:/i, '')
        .replace(/\"/g, '')
        .replace(/\(.*\)/g, '')
        .trim();
      if (cleanedText.length) console.log(cleanedText);
    }
  });
}
