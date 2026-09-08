const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace Hero Background
html = html.replace(
    /background-image: linear-gradient\(rgba\(15, 23, 42, 0\.8\), rgba\(15, 23, 42, 0\.9\)\), url\('[^']+'\);/,
    "background-image: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('assets/images/hero_ac_bg.jpg');"
);

// Replace Inverter AC Image
html = html.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-[^"]+" alt="Инверторный кондиционер"/,
    '<img src="assets/images/inverter_ac.jpg" alt="Инверторный кондиционер"'
);

// Replace On/Off AC Box with Image
const onOffRegex = /<div class="relative bg-slate-200 rounded-2xl h-80 w-full flex flex-col items-center justify-center text-slate-400 shadow-xl overflow-hidden group-hover:scale-\[1\.02\] transition">[\s\S]*?<span class="font-medium">Фото On\/Off системы<\/span>\s*<\/div>/;
html = html.replace(onOffRegex, '<img src="assets/images/on_off_ac.jpg" alt="On/Off система" class="relative rounded-2xl shadow-xl object-cover h-80 w-full transform group-hover:scale-[1.02] transition">');

// Replace Multi-split Box with Image
const multiSplitRegex = /<div class="relative bg-slate-200 rounded-2xl h-80 w-full flex flex-col items-center justify-center text-slate-400 shadow-xl overflow-hidden group-hover:scale-\[1\.02\] transition">[\s\S]*?<span class="font-medium">Фото мультисплит-системы<\/span>\s*<\/div>/;
html = html.replace(multiSplitRegex, '<img src="assets/images/multi_split_ac.jpg" alt="Мультисплит-система" class="relative rounded-2xl shadow-xl object-cover h-80 w-full transform group-hover:scale-[1.02] transition">');

// Replace Heat Pump Box with Image
const heatPumpRegex = /<div class="relative bg-slate-200 rounded-2xl h-80 w-full flex flex-col items-center justify-center text-slate-400 shadow-xl overflow-hidden group-hover:scale-\[1\.02\] transition">[\s\S]*?<span class="font-medium">Фото теплового насоса<\/span>\s*<\/div>/;
html = html.replace(heatPumpRegex, '<img src="assets/images/heat_pump_ac.jpg" alt="Тепловой насос" class="relative rounded-2xl shadow-xl object-cover h-80 w-full transform group-hover:scale-[1.02] transition">');

// Add new portfolio images as well (we have 8 now in assets/images/)
// I'll leave the portfolio section as is but let's just make sure it's saved.

fs.writeFileSync('index.html', html);
console.log('Images updated successfully!');
