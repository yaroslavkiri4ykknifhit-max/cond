const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix the floating AC image
html = html.replace(
    /<img src="https:\/\/cdn\.pixabay\.com[^"]+" alt="Кондиционер"/,
    '<img src="assets/images/floating_ac.png" alt="Кондиционер"'
);

// 2. Add the 2 new images to the portfolio grid
const newPhotos = `
                <!-- Photo 13 (Rough-in Work) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="500">
                    <img src="assets/images/media_1788906859426.jpg" alt="Наши работы 13" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 14 (Rough-in Work) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer md:col-span-2" data-aos="fade-up" data-aos-delay="600">
                    <img src="assets/images/media_1788906875407.jpg" alt="Наши работы 14" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
`;

// Insert the new photos right before the closing </div> of the grid
const gridEndStr = '</div>\n            <div class="text-center mt-12">';
const gridEndIndex = html.indexOf(gridEndStr);

if (gridEndIndex !== -1) {
    html = html.slice(0, gridEndIndex) + newPhotos + '            ' + html.slice(gridEndIndex);
    fs.writeFileSync('index.html', html);
    console.log('Site updated with floating AC and new portfolio images!');
} else {
    console.log('Error: Could not find portfolio grid end');
}
