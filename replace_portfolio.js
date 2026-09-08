const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const portfolioSection = `
    <!-- Portfolio (Grid Masonry Style) -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-5xl font-extrabold text-center mb-16 text-slate-800" data-aos="fade-up">Наши работы</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
                <!-- Photo 1 (Large) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl md:col-span-2 md:row-span-2 overflow-hidden relative group" data-aos="fade-up" data-aos-delay="100">
                    <img src="assets/images/media_1788904827647.jpg" alt="Наши работы 1" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-4xl"></i>
                    </div>
                </div>
                <!-- Photo 2 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl overflow-hidden relative group" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/images/media_1788904831672.jpg" alt="Наши работы 2" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 3 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl overflow-hidden relative group" data-aos="fade-up" data-aos-delay="300">
                    <img src="assets/images/media_1788904831700.jpg" alt="Наши работы 3" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 4 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl overflow-hidden relative group md:col-span-3 lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
                    <img src="assets/images/media_1788904831710.jpg" alt="Наши работы 4" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <p class="text-slate-500 font-medium">Это лишь часть наших недавних объектов. <br> Мы гарантируем такой же чистый и профессиональный результат и у вас!</p>
            </div>
        </div>
    </section>`;

// Replace old portfolio section.
// Finding it by regex or split.
const startTag = '<!-- Portfolio (Grid Masonry Style) -->';
const endTag = '<!-- Footer -->';
const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + portfolioSection + '\n\n    ' + html.substring(endIndex);
    fs.writeFileSync('index.html', html);
    console.log('Portfolio updated!');
} else {
    console.log('Tags not found');
}
