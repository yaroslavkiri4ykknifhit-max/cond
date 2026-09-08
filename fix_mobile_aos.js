const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Cache buster for the AC image
html = html.replace(/assets\/images\/floating_ac\.png(?:\?v=\d+)?/g, 'assets/images/floating_ac.png?v=3');

// 2. Fix AOS initialization for mobile
const oldScript = `AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });`;

const newScript = `
        // Remove delays on mobile so elements don't appear too late
        if (window.innerWidth < 768) {
            document.querySelectorAll('[data-aos-delay]').forEach(el => {
                el.removeAttribute('data-aos-delay');
            });
        }
        
        AOS.init({
            once: true,
            offset: 50, // Trigger early
            duration: 500, // Faster animation
            easing: 'ease-out-cubic',
        });`;

if (html.includes(oldScript)) {
    html = html.replace(oldScript, newScript);
    fs.writeFileSync('index.html', html);
    console.log('Successfully updated AOS and cache buster.');
} else {
    // Maybe it was already modified? Let's just use regex to replace AOS.init block
    const regex = /AOS\.init\(\{[\s\S]*?\}\);/;
    if (regex.test(html)) {
        html = html.replace(regex, newScript.trim());
        fs.writeFileSync('index.html', html);
        console.log('Successfully updated AOS with regex.');
    } else {
        console.log('Could not find AOS.init');
    }
}
