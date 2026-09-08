const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Продажа и установка кондиционеров в Минске</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        primary: '#0284c7', // Sky 600
                        secondary: '#0369a1', // Sky 700
                        accent: '#38bdf8', // Sky 400
                        dark: '#0f172a',
                        light: '#f8fafc',
                    }
                }
            }
        }
    </script>
    <style>
        .hero-bg {
            background-image: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1581094368551-698d2493d5de?q=80&w=2070&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>
<body class="font-sans text-slate-800 antialiased bg-white">

    <!-- Header -->
    <header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="#" class="text-2xl font-bold text-primary flex items-center gap-2">
                        <i class="fa-solid fa-snowflake"></i> КлиматМинск
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <nav class="hidden md:flex space-x-8">
                    <a href="#services" class="text-slate-600 hover:text-primary font-medium transition">Услуги</a>
                    <a href="#delivery" class="text-slate-600 hover:text-primary font-medium transition">Доставка и оплата</a>
                    <a href="#contacts" class="text-slate-600 hover:text-primary font-medium transition">Контакты</a>
                </nav>

                <!-- Contacts & CTA -->
                <div class="hidden lg:flex items-center space-x-6">
                    <div class="text-right">
                        <div class="font-bold text-slate-800">+375 (29) 935-97-35</div>
                        <div class="font-bold text-slate-800">+375 (29) 809-37-55</div>
                        <div class="text-xs text-slate-500">Пн-Пт с 9:00 до 20:00</div>
                    </div>
                    <a href="#callback" class="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg shadow-primary/30">
                        Заказать звонок
                    </a>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button class="text-slate-600 hover:text-primary">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-bg text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-3xl">
                <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                    Продажа и установка кондиционера в Минске и Минской области <span class="text-accent">с гарантией!</span>
                </h1>
                <p class="text-xl text-slate-200 mb-10">
                    Мы создаем идеальный климат в вашем доме всего за один день. Полный цикл под ключ.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#quiz" class="bg-accent hover:bg-sky-300 text-dark px-8 py-4 rounded-full font-bold text-lg text-center transition shadow-lg shadow-accent/20">
                        Подобрать кондиционер
                    </a>
                    <a href="#services" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition">
                        Наши услуги
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz / Form Section -->
    <section id="quiz" class="py-16 bg-light">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 -mt-24 relative z-20 border border-slate-100">
                <h2 class="text-3xl font-bold text-center mb-8 text-slate-800">Подобрать кондиционер</h2>
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Площадь -->
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Площадь помещения (м²)</label>
                            <input type="number" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Например: 25">
                        </div>
                        <!-- Высота потолка -->
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Высота потолка (м)</label>
                            <input type="number" step="0.1" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Например: 2.7">
                        </div>
                        <!-- Тип помещения -->
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">Тип помещения</label>
                            <select class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                                <option>Квартира</option>
                                <option>Дом / Коттедж</option>
                                <option>Офис / Коммерческое помещение</option>
                                <option>Другое</option>
                            </select>
                        </div>
                        <!-- Имя -->
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                            <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Иван">
                        </div>
                        <!-- Телефон -->
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Номер телефона</label>
                            <input type="tel" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="+375 (__) ___-__-__">
                        </div>
                    </div>
                    <button type="button" class="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition shadow-lg shadow-primary/30 mt-4">
                        Получить расчет стоимости
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Advantages -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-slate-800">Почему кондиционер стоит купить именно у нас?</h2>
                <p class="text-lg text-slate-600">
                    Покупка кондиционера — это инвестиция в ваш комфорт на долгие годы. Мы позаботились о том, чтобы этот процесс был для вас максимально простым, надежным и выгодным. Вот 6 главных причин выбрать нашу компанию:
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Advantage 1 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Полный цикл под ключ</h3>
                    <p class="text-slate-600">Вам не нужно искать сторонних мастеров и рисковать гарантией. Мы берем на себя всё: от профессионального подбора модели под вашу площадь до доставки, чистого монтажа и последующего сервисного обслуживания.</p>
                </div>
                <!-- Advantage 2 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                        <i class="fa-solid fa-file-contract"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Официальная гарантия</h3>
                    <p class="text-slate-600">Мы продаем только сертифицированное оборудование от проверенных мировых брендов. Вы получаете официальную гарантию как на сам кондиционер, так и на все монтажные работы.</p>
                </div>
                <!-- Advantage 3 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Установка за 1 день</h3>
                    <p class="text-slate-600">Организуем доставку и монтаж в один день — быстро, четко и в удобное для вас время.</p>
                </div>
                <!-- Advantage 4 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                        <i class="fa-solid fa-broom"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Чистый монтаж без пыли</h3>
                    <p class="text-slate-600">Используем профессиональное оборудование с пылеудалением. Мы бережно относимся к вашему ремонту: после нашей работы остаются только приятная прохлада и идеальный порядок.</p>
                </div>
                <!-- Advantage 5 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                        <i class="fa-solid fa-tag"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Честная цена</h3>
                    <p class="text-slate-600">Вы узнаете точную стоимость кондиционера и его установки до начала работ — никаких «внезапных» доплат на месте.</p>
                </div>
                <!-- Advantage 6 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                        <i class="fa-solid fa-ruler-combined"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Бесплатный выезд инженера</h3>
                    <p class="text-slate-600">Если у вас сложная планировка, идет ремонт или вы сомневаетесь — наш специалист приедет на объект, сделает точные замеры и найдет лучшее техническое решение.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Catalog Types -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-800">Кондиционеры, которые мы предлагаем!</h2>
            
            <div class="space-y-16">
                <!-- Type 1 -->
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="w-full md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop" alt="Инверторный кондиционер" class="rounded-2xl shadow-lg object-cover h-64 w-full">
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-2xl font-bold mb-4 text-primary">Инверторный кондиционер</h3>
                        <p class="text-slate-600 mb-4">Это современная климатическая система, которая работает плавно и без остановок. В отличие от обычного кондиционера, инвертор быстро охлаждает комнату, а затем просто снижает обороты до минимума и тихо поддерживает температуру.</p>
                        <p class="text-slate-600">За счет отсутствия постоянных резких включений он потребляет до 40% меньше электроэнергии, работает практически бесшумно, служит гораздо дольше и не создает опасных ледяных сквозняков.</p>
                    </div>
                </div>

                <!-- Type 2 -->
                <div class="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div class="w-full md:w-1/2">
                        <div class="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400 text-5xl">
                            <i class="fa-solid fa-power-off"></i>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-2xl font-bold mb-4 text-primary">On/Off системы</h3>
                        <p class="text-slate-600 mb-4">(Старт-стопные или неинверторные кондиционеры) — это традиционные климатические приборы, компрессор которых работает по принципу постоянного включения и выключения на максимальной мощности.</p>
                        <p class="text-slate-600">Из-за цикла «старт-стоп» приборы стоят дешевле инверторных, но расходуют больше электроэнергии при частых запусках, создают перепады температур и работают громче.</p>
                    </div>
                </div>

                <!-- Type 3 -->
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="w-full md:w-1/2">
                        <div class="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400 text-5xl">
                            <i class="fa-solid fa-house-chimney"></i>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-2xl font-bold mb-4 text-primary">Мультисплит-система</h3>
                        <p class="text-slate-600 mb-4">К одному наружному блоку на улице подключается несколько внутренних блоков в разных комнатах. Ее главный плюс — это эстетика (на фасаде висит всего один блок). Позволяет комбинировать разные типы внутренних блоков.</p>
                        <p class="text-slate-600">Ограничение: все кондиционеры в доме могут работать только в одном общем режиме (либо все охлаждают, либо все обогревают).</p>
                    </div>
                </div>

                <!-- Type 4 -->
                <div class="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div class="w-full md:w-1/2">
                        <div class="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400 text-5xl">
                            <i class="fa-solid fa-temperature-arrow-up"></i>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <h3 class="text-2xl font-bold mb-4 text-primary">Тепловой насос (воздух-воздух)</h3>
                        <p class="text-slate-600 mb-4">Специализированный «зимний» кондиционер, который разработан для эффективного и постоянного отопления дома в экстремальные морозы (до -25 °C или -30 °C). Оснащен подогревом компрессора и дренажного поддона.</p>
                        <p class="text-slate-600">На 1 кВт потребленного электричества выдает до 4–5 кВт тепла. Летом превращается в продвинутый инверторный кондиционер. Это универсальный прибор «2-в-1»!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-800">Наши Услуги</h2>
            
            <div class="space-y-8">
                <!-- Service 1 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100">
                    <div class="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-200 pb-6 mb-6">
                        <h3 class="text-2xl font-bold text-slate-800 mb-2 md:mb-0">Стандартный монтаж</h3>
                        <div class="text-2xl font-bold text-primary">от 500 руб.</div>
                    </div>
                    <p class="text-slate-600 mb-4 font-medium">В стоимость входит: трубы медные до 3х метров, изоляция, кабель, кронштейны, крепеж.</p>
                    <p class="text-slate-600 mb-4">Стандартный монтаж кондиционера — это классический, доведенный до совершенства алгоритм установки, который занимает всего несколько часов.</p>
                    <ul class="list-disc pl-5 text-slate-600 space-y-2">
                        <li><strong>Идеальное соседство:</strong> Внутренний блок у окна, внешний — под окном или на прочной стене.</li>
                        <li><strong>Скрытая коммуникация:</strong> Трасса до 3 метров прячется в белый декоративный короб.</li>
                        <li><strong>Один шаг сквозь стену:</strong> Лишь одно аккуратное отверстие в стене.</li>
                        <li><strong>Чистый запуск:</strong> Вакуумирование системы для долгой и тихой работы.</li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="bg-light p-8 rounded-2xl border border-slate-100">
                    <div class="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-200 pb-6 mb-6">
                        <h3 class="text-2xl font-bold text-slate-800 mb-2 md:mb-0">Установка в 2 этапа (на стадии ремонта)</h3>
                        <div class="text-xl font-bold text-primary">1 этап от 500 руб.</div>
                    </div>
                    <p class="text-slate-600 mb-4 text-sm">* точная стоимость зависит от длинны магистрали, материала стен, сложности работ</p>
                    <p class="text-slate-600 mb-4">Высокое искусство маскировки, которое позволяет полностью спрятать все технические «артерии» прибора внутри стен во время ремонта.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h4 class="font-bold text-lg mb-2 text-slate-800">Этап 1 (черновые работы)</h4>
                            <p class="text-slate-600 text-sm">Штробление стен, укладка медных труб и дренажа. Проделывается отверстие и закрепляется внешний блок. Концы глушатся для защиты от строительной пыли.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-2 text-slate-800">Этап 2 (чистовая отделка)</h4>
                            <p class="text-slate-600 text-sm">На чистую стену монтируется внутренний блок поверх скрытых коммуникаций. Вакуумирование и пуск. Результат — чистый визуальный восторг.</p>
                        </div>
                    </div>
                </div>

                <!-- Other Services Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-light p-6 rounded-2xl border border-slate-100">
                        <h3 class="text-xl font-bold text-slate-800 mb-4">Обслуживание кондиционера</h3>
                        <div class="text-2xl font-bold text-primary mb-4">от 100 руб.</div>
                        <p class="text-slate-600 text-sm">Глубокий детокс внутреннего блока, очистка уличного блока, контроль охлаждения и профилактика дренажной системы.</p>
                    </div>
                    <div class="bg-light p-6 rounded-2xl border border-slate-100">
                        <h3 class="text-xl font-bold text-slate-800 mb-4">Демонтаж кондиционера</h3>
                        <div class="text-2xl font-bold text-primary mb-4">от 100 руб.</div>
                        <p class="text-slate-600 text-sm">Аккуратное снятие оборудования с сохранением фреона для последующей установки.</p>
                    </div>
                    <div class="bg-light p-6 rounded-2xl border border-slate-100">
                        <h3 class="text-xl font-bold text-slate-800 mb-4">Установка чужого оборудования</h3>
                        <div class="text-2xl font-bold text-primary mb-4">от 600 руб.</div>
                        <p class="text-slate-600 text-sm">Профессиональный монтаж кондиционера, купленного не у нас, с соблюдением всех стандартов качества.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How we work -->
    <section class="py-20 bg-slate-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-16">Как мы работаем: 6 простых шагов</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                <!-- Step 1 -->
                <div class="bg-slate-700/50 p-8 rounded-2xl">
                    <div class="text-4xl font-bold text-accent mb-4">01</div>
                    <h3 class="text-xl font-bold mb-3">Заявка</h3>
                    <p class="text-slate-300 text-sm"><strong class="text-white">Удобная связь:</strong> Оставьте заявку на сайте или позвоните.<br><strong class="text-white">Быстрый отклик:</strong> Свяжемся для первичной консультации.</p>
                </div>
                <!-- Step 2 -->
                <div class="bg-slate-700/50 p-8 rounded-2xl">
                    <div class="text-4xl font-bold text-accent mb-4">02</div>
                    <h3 class="text-xl font-bold mb-3">Подбор оборудования</h3>
                    <p class="text-slate-300 text-sm"><strong class="text-white">Точный расчет:</strong> Под кубатуру, сторону света и технику.<br><strong class="text-white">Честные рекомендации:</strong> Только надежные бренды.</p>
                </div>
                <!-- Step 3 -->
                <div class="bg-slate-700/50 p-8 rounded-2xl">
                    <div class="text-4xl font-bold text-accent mb-4">03</div>
                    <h3 class="text-xl font-bold mb-3">Детали монтажа</h3>
                    <p class="text-slate-300 text-sm"><strong class="text-white">Изучение нюансов:</strong> Этаж, материал стен, ремонт.<br><strong class="text-white">Фото/видео разбор:</strong> Оценка по вашим материалам.</p>
                </div>
                <!-- Step 4 -->
                <div class="bg-slate-700/50 p-8 rounded-2xl">
                    <div class="text-4xl font-bold text-accent mb-4">04</div>
                    <h3 class="text-xl font-bold mb-3">Согласование стоимости</h3>
                    <p class="text-slate-300 text-sm"><strong class="text-white">Фиксированная смета:</strong> Считаем до начала монтажа.<br><strong class="text-white">Никаких сюрпризов:</strong> Сумма не изменится в процессе.</p>
                </div>
                <!-- Step 5 -->
                <div class="bg-slate-700/50 p-8 rounded-2xl">
                    <div class="text-4xl font-bold text-accent mb-4">05</div>
                    <h3 class="text-xl font-bold mb-3">Профессиональный монтаж</h3>
                    <p class="text-slate-300 text-sm"><strong class="text-white">Чистота:</strong> Используем пылесос.<br><strong class="text-white">Мастера дела:</strong> Установка и обязательная проверка системы.</p>
                </div>
                <!-- Step 6 -->
                <div class="bg-slate-700/50 p-8 rounded-2xl">
                    <div class="text-4xl font-bold text-accent mb-4">06</div>
                    <h3 class="text-xl font-bold mb-3">Оплата по факту</h3>
                    <p class="text-slate-300 text-sm"><strong class="text-white">Приемка работы:</strong> Вы лично всё проверяете.<br><strong class="text-white">Расчет без рисков:</strong> Платите, когда стало прохладно.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Delivery & Warranty -->
    <section id="delivery" class="py-20 bg-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Delivery -->
                <div>
                    <h2 class="text-3xl font-bold mb-8 text-slate-800">Доставка и оплата</h2>
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-6">
                        <h3 class="text-xl font-bold mb-4 flex items-center gap-3"><i class="fa-solid fa-truck text-primary"></i> Доставка: бережно и в срок</h3>
                        <p class="text-slate-600 mb-2"><strong>География:</strong> По Минску и Минской области прямо к вам на объект.</p>
                        <p class="text-slate-600"><strong>Аккуратный подъем:</strong> Занесем в квартиру без лишних доплат.</p>
                    </div>
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 class="text-xl font-bold mb-4 flex items-center gap-3"><i class="fa-regular fa-credit-card text-primary"></i> Оплата: прозрачно и без рисков</h3>
                        <p class="text-slate-600 mb-2"><strong>Оплата по факту:</strong> Никаких предоплат за работу «вслепую».</p>
                        <p class="text-slate-600 mb-2"><strong>Удобный расчет:</strong> Наличными или картой.</p>
                        <p class="text-slate-600"><strong>Фиксированная цена:</strong> Никаких внезапных наценок.</p>
                    </div>
                </div>
                <!-- Warranty -->
                <div>
                    <h2 class="text-3xl font-bold mb-8 text-slate-800">Гарантия</h2>
                    <div class="bg-primary/5 border border-primary/20 p-8 rounded-2xl h-full">
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-lg font-bold text-slate-800 mb-2">Гарантия на оборудование</h3>
                                <p class="text-slate-600 text-sm">Предоставляется в соответствии с паспортом изделия и условиями завода-изготовителя (фиксируется в гарантийном талоне).</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-800 mb-2">Гарантия на монтажные работы</h3>
                                <p class="text-slate-600 text-sm">Срок равен сроку гарантии на само оборудование при соблюдении условий эксплуатации.</p>
                            </div>
                            <div class="bg-white p-5 rounded-xl border-l-4 border-accent shadow-sm">
                                <h3 class="text-sm font-bold text-slate-800 mb-2 text-red-600">Критическое условие:</h3>
                                <p class="text-slate-600 text-sm">Гарантия на монтажные работы сохраняется только при условии проведения ежегодного технического обслуживания нашими специалистами (первое ТО не позднее 12 месяцев).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Placeholder -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-800">Наши работы</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-slate-200 aspect-square rounded-xl flex items-center justify-center text-slate-400">Фото 1</div>
                <div class="bg-slate-200 aspect-square rounded-xl flex items-center justify-center text-slate-400">Фото 2</div>
                <div class="bg-slate-200 aspect-square rounded-xl flex items-center justify-center text-slate-400">Фото 3</div>
                <div class="bg-slate-200 aspect-square rounded-xl flex items-center justify-center text-slate-400">Фото 4</div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contacts" class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
                <div>
                    <a href="#" class="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <i class="fa-solid fa-snowflake text-primary"></i> КлиматМинск
                    </a>
                    <p class="text-sm text-slate-500">Создаем идеальный климат в вашем доме.</p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4">Контакты</h4>
                    <div class="space-y-2">
                        <p><i class="fa-solid fa-phone mr-2 text-primary"></i> +375(29)935-97-35</p>
                        <p><i class="fa-solid fa-phone mr-2 text-primary"></i> +375(29)809-37-55</p>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4">Мессенджеры</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition text-white">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition text-white">
                            <i class="fa-brands fa-viber"></i>
                        </a>
                    </div>
                    <p class="text-sm mt-3">+375(29)935-97-35</p>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
                <p>Сайт зарегистрирован в торговом реестре под №0000000 от 00.00.0000г</p>
                <div class="flex space-x-6">
                    <a href="#" class="hover:text-white transition">Политика конфиденциальности</a>
                    <a href="#" class="hover:text-white transition">Публичная оферта</a>
                    <a href="#" class="hover:text-white transition">Реквизиты</a>
                </div>
            </div>
        </div>
    </footer>

</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('index.html generated with new distinctive design!');
