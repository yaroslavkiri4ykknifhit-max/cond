const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const newPortfolio = `
    <!-- Portfolio (Grid Masonry Style) -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-5xl font-extrabold text-center mb-16 text-slate-800" data-aos="fade-up">Наши работы</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                <!-- Photo 1 (Large) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl md:col-span-2 md:row-span-2 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                    <img src="assets/images/media_1788904827647.jpg" alt="Наши работы 1" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-4xl"></i>
                    </div>
                </div>
                <!-- Photo 2 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/images/media_1788904831672.jpg" alt="Наши работы 2" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 3 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                    <img src="assets/images/media_1788904831700.jpg" alt="Наши работы 3" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 4 (Tall) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl md:row-span-2 cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                    <img src="assets/images/media_1788904831710.jpg" alt="Наши работы 4" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 5 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                    <img src="assets/images/media_1788905506967.jpg" alt="Наши работы 5" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 6 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/images/media_1788905507002.jpg" alt="Наши работы 6" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 7 (Wide) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl md:col-span-2 cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                    <img src="assets/images/media_1788905508980.jpg" alt="Наши работы 7" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 8 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                    <img src="assets/images/media_1788905509075.jpg" alt="Наши работы 8" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 9 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                    <img src="assets/images/media_1788906109030.jpg" alt="Наши работы 9" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 10 (Large) -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl md:col-span-2 md:row-span-2 cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/images/media_1788906109504.jpg" alt="Наши работы 10" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-4xl"></i>
                    </div>
                </div>
                <!-- Photo 11 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                    <img src="assets/images/media_1788906111927.jpg" alt="Наши работы 11" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <!-- Photo 12 -->
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative group shadow-sm hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                    <img src="assets/images/media_1788906111930.jpg" alt="Наши работы 12" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
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

const startTag = '<!-- Portfolio (Grid Masonry Style) -->';
const endTag = '<!-- Footer -->';
const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + newPortfolio + '\n\n    ' + html.substring(endIndex);
    fs.writeFileSync('index.html', html);
    console.log('Portfolio updated to 12 images!');
} else {
    console.log('Tags not found');
}
