const request = require("request");
const cheerio = require("cheerio");

const urls = [
  "https://www.seinfeldscripts.com/TheSeinfeldChronicles.htm",
  "https://www.seinfeldscripts.com/TheStakeout.htm",
];

async function fetchGeorgeLines() {
  let lines = [];
  for (url of urls) {
    const newLines = await parseScript(url);
    lines = lines.concat(newLines);
  }
  return lines;
}

function parseScript(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, _response, body) => {
      if (error) return reject(error);
      const $ = cheerio.load(body);
      const georgeLines = [];
      $("p").each((i, p) => {
        const text = $(p).text().toLowerCase();
        if (text.startsWith("george:")) {
          georgeLines.push(text.replace("george: ", "").replace("\n", " "));
        }
      });
      return resolve(georgeLines);
    });
  });
}

module.exports = fetchGeorgeLines;
