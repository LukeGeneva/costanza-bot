const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.seinfeldscripts.com/TheSeinfeldChronicles.htm';

const fetchGeorgeLines = () => {
  return new Promise((resolve, reject) => {
    request(url, (error, _response, body) => {
      if (error) return reject(error);
      const $ = cheerio.load(body);
      const georgeLines = [];
      $('p').each((i, p) => {
        const text = $(p).text();
        if (text.startsWith('GEORGE:')) {
          georgeLines.push(text.replace('GEORGE: ', '').replace('\n', ' '));
        }
      });
      return resolve(georgeLines);
    });
  });
};

module.exports = fetchGeorgeLines;
