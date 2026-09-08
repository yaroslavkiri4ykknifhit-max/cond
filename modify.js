const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// Find menu links and update them
// The menu in Tilda usually has classes like .t-menu__link-item or .tn-atom
let menuLinks = $('a.tn-atom');
console.log("Found links:", menuLinks.length);
menuLinks.each((i, el) => {
    let text = $(el).text().trim();
    if (text) console.log("Link:", text);
});
