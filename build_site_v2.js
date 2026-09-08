const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Продажа и установка кондиционеров в Минске</title>
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- AOS Animation CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        primary: '#0ea5e9', // Sky 500
                        secondary: '#0284c7', // Sky 600
                        accent: '#38bdf8', // Sky 400
                        dark: '#0f172a',
                        light: '#f8fafc',
                    },
                    animation: {
                        'blob': 'blob 7s infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        blob: {
                            '0%': { transform: 'translate(0px, 0px) scale(1)' },
                            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                            '100%': { transform: 'translate(0px, 0px) scale(1)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            overflow-x: hidden;
        }
        .hero-bg {
            background-image: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1581094368551-698d2493d5de?q=80&w=2070&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Parallax effect */
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .gradient-text {
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }
    </style>
</head>
<body class="font-sans text-slate-800 antialiased bg-white">

    <!-- Header -->
    <header class="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300" id="header">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="#" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 flex items-center gap-2">
                        <i class="fa-solid fa-fan animate-[spin_4s_linear_infinite] text-primary"></i> КлиматМинск
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <nav class="hidden md:flex space-x-8">
                    <a href="#services" class="text-slate-600 hover:text-primary font-medium transition relative group">
                        Услуги
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#delivery" class="text-slate-600 hover:text-primary font-medium transition relative group">
                        Доставка и оплата
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#contacts" class="text-slate-600 hover:text-primary font-medium transition relative group">
                        Контакты
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                </nav>

                <!-- Contacts & CTA -->
                <div class="hidden lg:flex items-center space-x-6">
                    <div class="text-right">
                        <div class="font-bold text-slate-800 hover:text-primary transition cursor-pointer">+375 (29) 935-97-35</div>
                        <div class="font-bold text-slate-800 hover:text-primary transition cursor-pointer">+375 (29) 809-37-55</div>
                        <div class="text-xs text-slate-500">Пн-Пт с 9:00 до 20:00</div>
                    </div>
                    <a href="#callback" class="relative inline-flex group">
                        <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <button class="relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            Заказать звонок
                        </button>
                    </a>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button class="text-slate-600 hover:text-primary transition">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-bg text-white overflow-hidden min-h-[90vh] flex items-center">
        <!-- Animated Background Blobs -->
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="max-w-3xl" data-aos="fade-right" data-aos-duration="1000">
                <div class="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-6 animate-pulse">
                    <i class="fa-solid fa-shield-halved text-accent mr-2"></i> Официальная гарантия
                </div>
                <h1 class="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                    Продажа и установка кондиционера в Минске <br>
                    <span class="gradient-text">под ключ!</span>
                </h1>
                <p class="text-xl text-slate-300 mb-10 font-light border-l-4 border-accent pl-4">
                    Мы не просто продаем технику — мы создаем идеальный климат в вашем доме всего за один день. Без пыли, без скрытых переплат.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#quiz" class="bg-gradient-to-r from-primary to-indigo-500 hover:from-primary hover:to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.7)]">
                        Подобрать кондиционер
                    </a>
                    <a href="#advantages" class="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition flex items-center justify-center gap-2 group">
                        Узнать больше <i class="fa-solid fa-arrow-down group-hover:translate-y-1 transition"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Decorative AC Unit -->
        <div class="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 w-1/3 animate-float opacity-80" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
            <img src="https://cdn.pixabay.com/photo/2021/08/10/16/02/air-conditioner-6536340_1280.png" alt="Кондиционер" style="filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5)); mix-blend-mode: screen;">
        </div>
    </section>

    <!-- Quiz / Form Section -->
    <section id="quiz" class="py-16 bg-slate-50 relative">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-card rounded-3xl shadow-2xl p-8 lg:p-12 -mt-32 relative z-20 border border-white/60" data-aos="fade-up" data-aos-duration="1000">
                
                <div class="absolute -top-10 -right-10 text-9xl text-primary/10 z-0">
                    <i class="fa-solid fa-wind"></i>
                </div>

                <div class="relative z-10">
                    <h2 class="text-3xl font-extrabold text-center mb-2 text-slate-800">Подобрать кондиционер</h2>
                    <p class="text-center text-slate-500 mb-8">Ответьте на пару вопросов, и мы предложим лучшие варианты</p>
                    
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Площадь -->
                            <div class="group">
                                <label class="block text-sm font-semibold text-slate-700 mb-2 transition group-focus-within:text-primary">Площадь помещения (м²)</label>
                                <input type="number" class="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition bg-white/50 backdrop-blur-sm" placeholder="Например: 25">
                            </div>
                            <!-- Высота потолка -->
                            <div class="group">
                                <label class="block text-sm font-semibold text-slate-700 mb-2 transition group-focus-within:text-primary">Высота потолка (м)</label>
                                <input type="number" step="0.1" class="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition bg-white/50 backdrop-blur-sm" placeholder="Например: 2.7">
                            </div>
                            <!-- Тип помещения -->
                            <div class="md:col-span-2 group">
                                <label class="block text-sm font-semibold text-slate-700 mb-2 transition group-focus-within:text-primary">Тип помещения</label>
                                <select class="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition bg-white/50 backdrop-blur-sm appearance-none">
                                    <option>Квартира</option>
                                    <option>Дом / Коттедж</option>
                                    <option>Офис / Коммерческое помещение</option>
                                    <option>Другое</option>
                                </select>
                            </div>
                            <!-- Имя -->
                            <div class="group">
                                <label class="block text-sm font-semibold text-slate-700 mb-2 transition group-focus-within:text-primary">Ваше имя</label>
                                <div class="relative">
                                    <i class="fa-regular fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                    <input type="text" class="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition bg-white/50 backdrop-blur-sm" placeholder="Иван">
                                </div>
                            </div>
                            <!-- Телефон -->
                            <div class="group">
                                <label class="block text-sm font-semibold text-slate-700 mb-2 transition group-focus-within:text-primary">Номер телефона</label>
                                <div class="relative">
                                    <i class="fa-solid fa-phone absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                    <input type="tel" class="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition bg-white/50 backdrop-blur-sm" placeholder="+375 (__) ___-__-__">
                                </div>
                            </div>
                        </div>
                        <button type="button" class="w-full bg-slate-900 hover:bg-primary text-white font-bold py-5 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.5)] transform hover:-translate-y-1 mt-6 text-lg tracking-wide">
                            Получить расчет стоимости <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Advantages -->
    <section id="advantages" class="py-24 bg-white relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute -right-20 top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div class="absolute -left-20 bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
                <h2 class="text-3xl lg:text-5xl font-extrabold mb-6 text-slate-800">
                    Почему стоит купить <br><span class="gradient-text">именно у нас?</span>
                </h2>
                <p class="text-lg text-slate-600">
                    Покупка кондиционера — это инвестиция в ваш комфорт на долгие годы. Мы позаботились о том, чтобы этот процесс был для вас максимально простым, надежным и выгодным. Вот 6 главных причин:
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Advantage Cards with Hover Effect -->
                <div class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-800">Полный цикл под ключ</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">Вам не нужно искать сторонних мастеров и рисковать гарантией. Мы берем на себя всё: от подбора модели до чистого монтажа и сервисного обслуживания.</p>
                </div>

                <div class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-file-contract"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-800">Официальная гарантия</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">Только сертифицированное оборудование от мировых брендов. Вы получаете официальную гарантию как на кондиционер, так и на монтажные работы.</p>
                </div>

                <div class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-bolt"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-800">Установка за 1 день</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">Организуем доставку и монтаж в один день — быстро, четко и в удобное для вас время. Никаких затяжных ремонтов.</p>
                </div>

                <div class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-broom"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-800">Чистый монтаж без пыли</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">Используем оборудование с пылеудалением. Бережно относимся к вашему ремонту: после нас только приятная прохлада и порядок.</p>
                </div>

                <div class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-tag"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-800">Честная цена</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">Вы узнаете точную стоимость кондиционера и его установки до начала работ — никаких «внезапных» доплат на месте.</p>
                </div>

                <div class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="600">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-ruler-combined"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-800">Бесплатный выезд инженера</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">Сложная планировка или идет ремонт? Наш специалист приедет, сделает замеры и найдет лучшее техническое решение.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Catalog Types (Alternating Layout with Images) -->
    <section class="py-24 bg-slate-50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-5xl font-extrabold text-center mb-20 text-slate-800" data-aos="fade-down">Кондиционеры, которые мы предлагаем</h2>
            
            <div class="space-y-24">
                <!-- Type 1 -->
                <div class="flex flex-col md:flex-row gap-12 items-center" data-aos="fade-right">
                    <div class="w-full md:w-1/2 relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary to-indigo-500 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop" alt="Инверторный кондиционер" class="relative rounded-2xl shadow-xl object-cover h-80 w-full transform group-hover:scale-[1.02] transition">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary font-bold px-4 py-1.5 rounded-full shadow-lg text-sm">ХИТ ПРОДАЖ</div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-3xl font-bold mb-4 text-slate-800">Инверторный кондиционер</h3>
                        <p class="text-slate-500 mb-6 leading-relaxed">Современная климатическая система, которая работает плавно и без остановок. В отличие от обычного кондиционера, инвертор быстро охлаждает комнату, а затем просто снижает обороты до минимума и тихо поддерживает температуру.</p>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center text-slate-700 font-medium"><i class="fa-solid fa-check text-green-500 mr-3"></i> Потребляет до 40% меньше электроэнергии</li>
                            <li class="flex items-center text-slate-700 font-medium"><i class="fa-solid fa-check text-green-500 mr-3"></i> Работает практически бесшумно</li>
                            <li class="flex items-center text-slate-700 font-medium"><i class="fa-solid fa-check text-green-500 mr-3"></i> Не создает ледяных сквозняков</li>
                        </ul>
                    </div>
                </div>

                <!-- Type 2 -->
                <div class="flex flex-col md:flex-row-reverse gap-12 items-center" data-aos="fade-left">
                    <div class="w-full md:w-1/2 relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                        <div class="relative bg-slate-200 rounded-2xl h-80 w-full flex flex-col items-center justify-center text-slate-400 shadow-xl overflow-hidden group-hover:scale-[1.02] transition">
                            <i class="fa-solid fa-power-off text-6xl mb-4"></i>
                            <span class="font-medium">Фото On/Off системы</span>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-3xl font-bold mb-4 text-slate-800">On/Off системы</h3>
                        <p class="text-slate-500 mb-6 leading-relaxed">(Старт-стопные или неинверторные кондиционеры) — это традиционные климатические приборы, компрессор которых работает по принципу постоянного включения и выключения на максимальной мощности.</p>
                        <p class="text-slate-500 leading-relaxed border-l-4 border-slate-300 pl-4 italic">Из-за цикла «старт-стоп» приборы стоят дешевле инверторных, но расходуют больше электроэнергии при частых запусках, создают перепады температур и работают громче.</p>
                    </div>
                </div>

                <!-- Type 3 -->
                <div class="flex flex-col md:flex-row gap-12 items-center" data-aos="fade-right">
                    <div class="w-full md:w-1/2 relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-accent to-primary rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                        <div class="relative bg-slate-200 rounded-2xl h-80 w-full flex flex-col items-center justify-center text-slate-400 shadow-xl overflow-hidden group-hover:scale-[1.02] transition">
                            <i class="fa-solid fa-house-chimney text-6xl mb-4"></i>
                            <span class="font-medium">Фото мультисплит-системы</span>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-3xl font-bold mb-4 text-slate-800">Мультисплит-система</h3>
                        <p class="text-slate-500 mb-6 leading-relaxed">К одному наружному блоку на улице подключается несколько внутренних блоков в разных комнатах. Ее главный плюс — это эстетика (на фасаде висит всего один аккуратный ящик вместо батареи из кондиционеров).</p>
                        <div class="bg-primary/5 p-4 rounded-xl border border-primary/20">
                            <p class="text-sm text-slate-700"><i class="fa-solid fa-circle-exclamation text-primary mr-2"></i> <strong>Ограничение:</strong> все кондиционеры в доме могут работать только в одном общем режиме. Вы можете настроить разную температуру, но вся система должна либо одновременно охлаждать, либо обогревать.</p>
                        </div>
                    </div>
                </div>

                <!-- Type 4 -->
                <div class="flex flex-col md:flex-row-reverse gap-12 items-center" data-aos="fade-left">
                    <div class="w-full md:w-1/2 relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                        <div class="relative bg-slate-200 rounded-2xl h-80 w-full flex flex-col items-center justify-center text-slate-400 shadow-xl overflow-hidden group-hover:scale-[1.02] transition">
                            <i class="fa-solid fa-temperature-arrow-up text-6xl mb-4"></i>
                            <span class="font-medium">Фото теплового насоса</span>
                        </div>
                        <div class="absolute top-4 left-4 bg-orange-500 text-white font-bold px-4 py-1.5 rounded-full shadow-lg text-sm"><i class="fa-solid fa-fire mr-1"></i> ОБОГРЕВ ДО -30°C</div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-3xl font-bold mb-4 text-slate-800">Тепловой насос (воздух-воздух)</h3>
                        <p class="text-slate-500 mb-6 leading-relaxed">Специализированный «зимний» кондиционер для эффективного и постоянного отопления дома в экстремальные морозы (до -25 °C / -30 °C). Оснащен подогревом компрессора и дренажного поддона.</p>
                        <p class="text-slate-500 mb-6 leading-relaxed">Не производит тепло сам, а «выкачивает» его из уличного воздуха. На 1 кВт потребленного электричества выдает до 4–5 кВт тепла (в 4 раза выгоднее обогревателей!).</p>
                        <p class="font-bold text-slate-800">Летом это продвинутый инверторный кондиционер. По сути, прибор «2-в-1».</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services (Price Cards) -->
    <section id="services" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl lg:text-5xl font-extrabold text-slate-800 mb-4">Наши Услуги</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <!-- Service 1 -->
                <div class="bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-primary shadow-lg transition-all transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <span class="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-xs mb-3">БАЗОВЫЙ</span>
                            <h3 class="text-2xl font-bold text-slate-800">Стандартный монтаж</h3>
                        </div>
                        <div class="text-right">
                            <span class="text-sm text-slate-400 font-medium">от</span>
                            <div class="text-3xl font-extrabold text-slate-900">500 <span class="text-xl">BYN</span></div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-slate-100">
                        <p class="text-sm text-slate-600 font-medium"><i class="fa-solid fa-box-open text-primary mr-2"></i> В стоимость входит: трубы медные до 3х метров, изоляция, кабель, кронштейны, крепеж.</p>
                    </div>
                    <ul class="space-y-4 text-slate-600 text-sm">
                        <li class="flex items-start"><i class="fa-solid fa-circle-check text-primary mt-1 mr-3"></i> <span><strong>Идеальное соседство:</strong> Внутренний блок у окна, внешний под окном.</span></li>
                        <li class="flex items-start"><i class="fa-solid fa-circle-check text-primary mt-1 mr-3"></i> <span><strong>Скрытая коммуникация:</strong> Трасса прячется в эстетичный короб.</span></li>
                        <li class="flex items-start"><i class="fa-solid fa-circle-check text-primary mt-1 mr-3"></i> <span><strong>Одно отверстие:</strong> Аккуратный шаг сквозь стену.</span></li>
                        <li class="flex items-start"><i class="fa-solid fa-circle-check text-primary mt-1 mr-3"></i> <span><strong>Чистый запуск:</strong> Вакуумирование системы.</span></li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl shadow-slate-900/20 text-white transition-all transform hover:-translate-y-1 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
                    <div class="flex justify-between items-start mb-6 relative z-10">
                        <div>
                            <span class="inline-block px-3 py-1 bg-white/20 text-white font-bold rounded-full text-xs mb-3">ДЛЯ РЕМОНТА</span>
                            <h3 class="text-2xl font-bold text-white">Установка в 2 этапа</h3>
                        </div>
                        <div class="text-right">
                            <span class="text-sm text-slate-400 font-medium">1 этап от</span>
                            <div class="text-3xl font-extrabold text-white">500 <span class="text-xl">BYN</span></div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-slate-700 relative z-10">
                        <p class="text-sm text-slate-300">Искусство маскировки: полностью прячем все «артерии» прибора внутри стен во время ремонта.</p>
                    </div>
                    <ul class="space-y-4 text-slate-300 text-sm relative z-10">
                        <li class="flex items-start">
                            <div class="bg-primary/20 p-1 rounded mr-3 mt-0.5"><i class="fa-solid fa-1 text-primary text-xs"></i></div>
                            <span><strong>Черновые работы:</strong> Штробление стен, укладка труб, вывод на улицу, установка внешнего блока, консервация концов.</span>
                        </li>
                        <li class="flex items-start">
                            <div class="bg-primary/20 p-1 rounded mr-3 mt-0.5"><i class="fa-solid fa-2 text-primary text-xs"></i></div>
                            <span><strong>После отделки:</strong> Монтаж внутреннего блока на чистую стену, вакуумирование и пуск. Идеальный интерьер без проводов.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Mini Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <h4 class="font-bold text-slate-800 mb-1">Обслуживание</h4>
                    <div class="text-primary font-bold mb-3">от 100 руб.</div>
                    <p class="text-xs text-slate-500">Детокс внутреннего блока, чистка внешнего, контроль охлаждения и промывка дренажа.</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm"><i class="fa-solid fa-hammer"></i></div>
                    <h4 class="font-bold text-slate-800 mb-1">Демонтаж</h4>
                    <div class="text-primary font-bold mb-3">от 100 руб.</div>
                    <p class="text-xs text-slate-500">Аккуратное снятие оборудования с сохранением фреона.</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm"><i class="fa-solid fa-box-open"></i></div>
                    <h4 class="font-bold text-slate-800 mb-1">Установка чужого оборудования</h4>
                    <div class="text-primary font-bold mb-3">от 600 руб.</div>
                    <p class="text-xs text-slate-500">Монтаж кондиционера, купленного не у нас, с соблюдением всех стандартов.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How we work (Timeline) -->
    <section class="py-24 bg-dark text-white relative overflow-hidden">
        <!-- Abstract Bg -->
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-dark to-dark"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 class="text-3xl lg:text-5xl font-extrabold text-center mb-16" data-aos="fade-up">6 простых шагов <span class="text-primary">к комфорту</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Steps -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition" data-aos="zoom-in" data-aos-delay="100">
                    <div class="text-5xl font-black text-white/10 mb-4 absolute top-4 right-6">01</div>
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-pen-to-square text-primary"></i> Заявка</h3>
                    <p class="text-slate-400 text-sm"><strong class="text-white">Удобная связь:</strong> Оставьте заявку на сайте или позвоните.<br><strong class="text-white">Быстрый отклик:</strong> Свяжемся для консультации.</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition" data-aos="zoom-in" data-aos-delay="200">
                    <div class="text-5xl font-black text-white/10 mb-4 absolute top-4 right-6">02</div>
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-magnifying-glass text-primary"></i> Подбор</h3>
                    <p class="text-slate-400 text-sm"><strong class="text-white">Точный расчет:</strong> Под кубатуру, сторону света и технику.<br><strong class="text-white">Рекомендации:</strong> Только надежные бренды.</p>
                </div>

                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition" data-aos="zoom-in" data-aos-delay="300">
                    <div class="text-5xl font-black text-white/10 mb-4 absolute top-4 right-6">03</div>
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-list-check text-primary"></i> Детали</h3>
                    <p class="text-slate-400 text-sm"><strong class="text-white">Изучение нюансов:</strong> Этаж, материал стен, ремонт.<br><strong class="text-white">Фото/видео разбор:</strong> Оценка по вашим материалам.</p>
                </div>

                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition" data-aos="zoom-in" data-aos-delay="400">
                    <div class="text-5xl font-black text-white/10 mb-4 absolute top-4 right-6">04</div>
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-file-invoice text-primary"></i> Смета</h3>
                    <p class="text-slate-400 text-sm"><strong class="text-white">Фиксированная смета:</strong> Считаем до начала монтажа.<br><strong class="text-white">Без сюрпризов:</strong> Сумма не изменится в процессе.</p>
                </div>

                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition" data-aos="zoom-in" data-aos-delay="500">
                    <div class="text-5xl font-black text-white/10 mb-4 absolute top-4 right-6">05</div>
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-wrench text-primary"></i> Монтаж</h3>
                    <p class="text-slate-400 text-sm"><strong class="text-white">Чистота:</strong> Используем пылесос.<br><strong class="text-white">Мастера дела:</strong> Установка и проверка системы в деле.</p>
                </div>

                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-primary/20 border-primary/30 transition shadow-[0_0_30px_rgba(14,165,233,0.15)]" data-aos="zoom-in" data-aos-delay="600">
                    <div class="text-5xl font-black text-primary/20 mb-4 absolute top-4 right-6">06</div>
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-handshake text-primary"></i> Оплата</h3>
                    <p class="text-slate-400 text-sm"><strong class="text-white">Приемка работы:</strong> Вы лично всё проверяете.<br><strong class="text-white">Расчет без рисков:</strong> Платите, когда стало прохладно.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Delivery & Warranty -->
    <section id="delivery" class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Delivery -->
                <div data-aos="fade-right">
                    <h2 class="text-3xl font-extrabold mb-8 text-slate-800">Доставка и оплата</h2>
                    <div class="bg-white p-8 rounded-3xl shadow-md border border-slate-100 mb-6 group hover:shadow-lg transition">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl mb-4 group-hover:scale-110 transition">
                            <i class="fa-solid fa-truck-fast"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Доставка: бережно и в срок</h3>
                        <p class="text-slate-600 mb-2"><strong class="text-slate-800">География:</strong> Доставляем по Минску и Минской области прямо к вам на объект.</p>
                        <p class="text-slate-600"><strong class="text-slate-800">Аккуратный подъем:</strong> Занесем в квартиру без лишних доплат.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl shadow-md border border-slate-100 group hover:shadow-lg transition">
                        <div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 text-xl mb-4 group-hover:scale-110 transition">
                            <i class="fa-solid fa-wallet"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Оплата: прозрачно и без рисков</h3>
                        <ul class="space-y-2 text-slate-600">
                            <li><i class="fa-solid fa-check text-green-500 mr-2"></i> <strong class="text-slate-800">Оплата по факту:</strong> Никаких предоплат «вслепую».</li>
                            <li><i class="fa-solid fa-check text-green-500 mr-2"></i> <strong class="text-slate-800">Удобный расчет:</strong> Наличными или картой.</li>
                            <li><i class="fa-solid fa-check text-green-500 mr-2"></i> <strong class="text-slate-800">Фиксированная цена:</strong> Без внезапных наценок на месте.</li>
                        </ul>
                    </div>
                </div>
                <!-- Warranty -->
                <div data-aos="fade-left">
                    <h2 class="text-3xl font-extrabold mb-8 text-slate-800">Гарантия</h2>
                    <div class="bg-gradient-to-b from-blue-50 to-white border border-blue-100 p-8 rounded-3xl h-full shadow-sm relative overflow-hidden">
                        <i class="fa-solid fa-shield-halved absolute -bottom-10 -right-10 text-9xl text-blue-100 opacity-50 transform rotate-12"></i>
                        <div class="space-y-8 relative z-10">
                            <div>
                                <h3 class="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2"><i class="fa-solid fa-box text-primary"></i> Гарантия на оборудование</h3>
                                <p class="text-slate-600 leading-relaxed">Предоставляется в соответствии с паспортом изделия и условиями завода-изготовителя. Зависит от бренда и фиксируется в гарантийном талоне.</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2"><i class="fa-solid fa-screwdriver-wrench text-primary"></i> Гарантия на монтаж</h3>
                                <p class="text-slate-600 leading-relaxed">Срок гарантии на монтажные работы равен сроку гарантии на само оборудование при соблюдении условий эксплуатации.</p>
                            </div>
                            <div class="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-inner">
                                <h3 class="text-base font-extrabold text-red-600 mb-2 flex items-center gap-2"><i class="fa-solid fa-triangle-exclamation"></i> КРИТИЧЕСКОЕ УСЛОВИЕ:</h3>
                                <p class="text-red-800/80 text-sm font-medium leading-relaxed">Гарантия на монтажные работы сохраняется в полном объеме только при условии проведения ежегодного регулярного технического обслуживания (ТО) нашими специалистами. Первое ТО должно быть проведено не позднее, чем через 12 месяцев с даты монтажа.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio (Grid Masonry Style) -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-5xl font-extrabold text-center mb-16 text-slate-800" data-aos="fade-up">Наши работы</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl md:col-span-2 md:row-span-2 overflow-hidden relative group" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">Фото 2</div>
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">Фото 3</div>
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl md:row-span-2" data-aos="fade-up" data-aos-delay="400">Фото 4</div>
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl" data-aos="fade-up" data-aos-delay="500">Фото 5</div>
                <div class="bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold hover:scale-[1.03] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">Фото 6</div>
            </div>
            <div class="text-center mt-12">
                <p class="text-slate-400 italic">Здесь будут размещены фотографии ваших реальных объектов.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contacts" class="bg-dark text-slate-300 py-16 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
                <div>
                    <a href="#" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 flex items-center gap-2 mb-4">
                        <i class="fa-solid fa-snowflake text-primary"></i> КлиматМинск
                    </a>
                    <p class="text-sm text-slate-400 leading-relaxed">Мы не просто продаем технику — мы создаем идеальный климат в вашем доме всего за один день!</p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6 text-lg tracking-wide uppercase">Связаться с нами</h4>
                    <div class="space-y-4">
                        <a href="tel:+375299359735" class="flex items-center text-xl hover:text-white transition group">
                            <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-primary transition"><i class="fa-solid fa-phone text-primary group-hover:text-white"></i></div>
                            +375(29)935-97-35
                        </a>
                        <a href="tel:+375298093755" class="flex items-center text-xl hover:text-white transition group">
                            <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-primary transition"><i class="fa-solid fa-phone text-primary group-hover:text-white"></i></div>
                            +375(29)809-37-55
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6 text-lg tracking-wide uppercase">Мессенджеры</h4>
                    <div class="flex space-x-4 mb-4">
                        <a href="#" class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition text-white text-xl transform hover:-translate-y-1">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="#" class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition text-white text-xl transform hover:-translate-y-1">
                            <i class="fa-brands fa-viber"></i>
                        </a>
                    </div>
                    <p class="text-sm text-slate-400 flex items-center gap-2"><i class="fa-solid fa-paper-plane"></i> Пишите на номер +375(29)935-97-35</p>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
                <p>Сайт зарегистрирован в торговом реестре под №0000000 от 00.00.0000г</p>
                <div class="flex space-x-6">
                    <a href="#" class="hover:text-primary transition">Политика конфиденциальности</a>
                    <a href="#" class="hover:text-primary transition">Публичная оферта</a>
                    <a href="#" class="hover:text-primary transition">Реквизиты</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        // Initialize AOS Animation Library
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 10) {
                header.classList.add('shadow-md');
                header.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                header.classList.remove('shadow-md');
                header.classList.replace('bg-white/95', 'bg-white/80');
            }
        });
    </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('index.html updated with awesome effects!');
