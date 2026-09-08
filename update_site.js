const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// 1. Update Menu
// We need to change the texts and remove unnecessary ones
let desktopLinks = $('a.tn-atom');
desktopLinks.each((i, el) => {
    let text = $(el).text().trim();
    if (text === 'Каталог') {
        $(el).text('Подобрать кондиционер');
        $(el).attr('href', '#catalog');
    } else if (text === 'Преимущества') {
        $(el).text('Ваши выгоды');
        $(el).attr('href', '#advantages');
    } else if (text === 'Услуги') {
        $(el).text('Услуги');
        $(el).attr('href', '#services');
    } else if (text === 'Заказать звонок') {
        $(el).text('Заказать звонок');
        $(el).attr('href', '#contacts');
    } else if (text === 'Отзывы' || text === 'Доставка и оплата' || text === 'Контакты' || text === 'Подобрать систему') {
        // Tilda absolute positioning means if we just remove the element, it leaves a gap or just works.
        // It's safer to just set text to empty and hide it, or let's remove it completely.
        $(el).parent().remove(); 
    }
});

// 2. Update Hero
// Tilda texts are in div.tn-atom
$('div.tn-atom').each((i, el) => {
    let text = $(el).text().trim();
    if (text.includes('Кондиционеры с гарантией 7 лет.')) {
        $(el).html('Продажа и монтаж кондиционеров в Минске');
    } else if (text.includes('Охлаждает летом, греет зимой')) {
        $(el).html('Бесплатный проект и доставка.<br>Профессиональный монтаж и пуско-наладочные работы.');
    } else if (text === 'Выбрать кондиционер') {
        $(el).text('Подобрать кондиционер');
        $(el).parent('a').attr('href', '#catalog');
    } else if (text.includes('Почему выбирают Альпконд')) {
        $(el).text('Почему выгодно работать с нами');
    } else if (text === 'Кондиционеры от ведущих брендов') {
        $(el).text('Подобрать кондиционер');
    } else if (text.includes('Альпконд | Системы кондиционирования в Беларуси') && $(el).is('title')) {
        // Not a tn-atom, but we will fix title later
    }
});

// Update title
$('title').text('Продажа и монтаж кондиционеров в Минске');

// 3. Remove "Отзывы" and "Доставка и оплата" blocks
// Find the block containing "Отзывы" (Reviews) and remove it.
$('div.r').each((i, el) => {
    let text = $(el).text();
    if (text.includes('Отзывы') && text.includes('Сергей') && text.includes('Екатерина')) {
        $(el).remove();
    }
    if (text.includes('Доставка и оплата') && text.includes('Наличный расчет') && text.includes('Монтаж в два этапа')) {
        $(el).remove();
    }
    // Remove "Нам доверяют" (Trusted by) if it's there
    if (text.includes('Нам доверяют') && text.includes('Белагропромбанк')) {
        $(el).remove();
    }
});

// Add IDs for anchor links
// We can just add IDs to the first div of the relevant section
$('div.tn-atom').each((i, el) => {
    let text = $(el).text().trim();
    if (text === 'Почему выгодно работать с нами') {
        $(el).closest('.r').attr('id', 'advantages');
    }
    if (text === 'Подобрать кондиционер') {
        // the second one is the catalog
        $(el).closest('.r').attr('id', 'catalog');
    }
    if (text === 'Услуги') {
        $(el).closest('.r').attr('id', 'services');
    }
});
// Footer contact section
let footer = $('div.r').last();
footer.attr('id', 'contacts');


fs.writeFileSync('index.html', $.html());
console.log('Site updated.');
