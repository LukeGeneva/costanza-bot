const request = require("request");
const cheerio = require("cheerio");

const LINK_PAGE_URL = "https://www.seinfeldscripts.com/seinfeld-scripts.html";

request(LINK_PAGE_URL, (error, _response, body) => {
  const $ = cheerio.load(body);
  $("a").each((i, a) => {
    const text = $(a).text();
    const BASE_URL = 'https://www.seinfeldscripts.com/'
    const isScriptLink = text && text.toLowerCase().startsWith('the')
    if (isScriptLink) {
      const href = $(a).attr()['href'].trim()
      console.log(BASE_URL.concat(href))
    }
  });
});
