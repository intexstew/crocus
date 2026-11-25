// Local portfolio photos from img/cases/
const GALLERY_PHOTOS = [
  'img/cases/CBLJ0JaZUpA.jpg',
  'img/cases/dhln50pL6c4.jpg',
  'img/cases/En6LohJz1SI.jpg',
  'img/cases/G1I1bAF86jY.jpg',
  'img/cases/I4iYZAW55TI.jpg',
  'img/cases/lg9Oj7VjS5k.jpg',
  'img/cases/SJyrzNZaWxg.jpg',
  'img/cases/XeQocrKFR-k.jpg'
];

// 12 separate furniture & service cells (4x3 balanced grid) with prices, specs & booking
const CATALOG_ITEMS = [
  {
    category: 'Кухни',
    badge: 'Скидка 30%',
    title: 'Кухни Классика',
    price: '128 000 ₽',
    oldPrice: '182 900 ₽',
    photo: GALLERY_PHOTOS[1],
    calcType: 'kitchen-classic',
    desc: 'Большой выбор классических кухонь из массива (Италия, Польша, Россия) и фрезерованного МДФ с патиной.',
    specs: [
      ['Фасады', 'Массив (Италия, Польша, Россия), МДФ с патиной'],
      ['Проект', '3D-проект + расчёт за 15 минут бесплатно'],
      ['Сервис', 'Замер и монтаж от 50 000 ₽ в подарок']
    ]
  },
  {
    category: 'Кухни',
    badge: 'По вашим размерам',
    title: 'Кухни на заказ в Самаре',
    price: '102 000 ₽',
    oldPrice: '145 700 ₽',
    photo: GALLERY_PHOTOS[2],
    calcType: 'kitchen-straight',
    desc: 'Производство кухонной мебели по индивидуальным размерам с точностью до 1 мм.',
    specs: [
      ['Геометрия', 'Сложные углы, ниши и встройка под потолок'],
      ['Сроки', 'Изготовление от 14 дней, установка за 1 день'],
      ['Оплата', 'Карты, б/н, рассрочка 0% / кредит до 300 000 ₽']
    ]
  },
  {
    category: 'Кухни',
    badge: 'Напрямую с фабрики',
    title: 'Кухни с производства',
    price: '131 000 ₽',
    oldPrice: '187 100 ₽',
    photo: GALLERY_PHOTOS[3],
    calcType: 'kitchen-corner',
    desc: 'Кухни напрямую с собственного производства в Самаре без посредников и наценок.',
    specs: [
      ['Выгода', 'Цены на 15–30% ниже рыночных по Самаре'],
      ['Фурнитура', 'Blum (Австрия), Hettich, доводчики, профиль Gola'],
      ['Гарантия', '100% гарантия по договору (24 мес / 10 лет кромка)']
    ]
  },
  {
    category: 'Кухни',
    badge: 'Без стандартов',
    title: 'Кухни с радиусными фасадами',
    price: '118 000 ₽',
    oldPrice: '168 600 ₽',
    photo: GALLERY_PHOTOS[4],
    calcType: 'kitchen-radius',
    desc: 'Изогнутые фасады и столешницы без ограничений по радиусам и размерам.',
    specs: [
      ['Радиусы', 'Нет стандартов в радиусах и размерах'],
      ['Палитра', 'Изготовим в любом цвете по RAL / NCS'],
      ['Проект', 'Бесплатный 3D-проект + расчёт за 15 минут']
    ]
  },
  {
    category: 'Кухни',
    badge: 'Современный стиль',
    title: 'Кухни с прямыми фасадами',
    price: '109 000 ₽',
    oldPrice: '155 700 ₽',
    photo: GALLERY_PHOTOS[5],
    calcType: 'kitchen-straight',
    desc: 'Прямые фасады из пластика, акрила, шпона, высокоглянцевых панелей и матового бархата Supromat.',
    specs: [
      ['Материалы', 'Пластик, Акрил, Шпон, Глянец, Supromat'],
      ['Столешница', 'Влагостойкий пластик 38 мм, еврозапил, Grandex/Neomarm'],
      ['Монтаж', 'Бесплатная установка при заказе от 50 000 ₽']
    ]
  },
  {
    category: 'Распродажа образца',
    badge: 'Выгода 217 000 ₽',
    title: 'Кухня «Нео-Классика» с образца',
    price: '161 000 ₽',
    oldPrice: '378 000 ₽',
    photo: GALLERY_PHOTOS[5],
    calcType: 'kitchen-classic',
    desc: 'Выставочный образец МДФ «Нео-Классика» Premium со влагостойкой столешницей 38 мм.',
    specs: [
      ['Комплектация', 'МДФ «Нео-Классика» Premium, столешница 38 мм'],
      ['Уточнить', 'Наличие в салоне по тел. +7 (927) 692-27-71'],
      ['Монтаж', 'Доставка и установка за 1 день']
    ]
  },
  {
    category: 'Детские',
    badge: 'Экологично E0,5',
    title: 'Детские комнаты на заказ',
    price: '64 000 ₽',
    oldPrice: '91 400 ₽',
    photo: GALLERY_PHOTOS[6],
    calcType: 'kids',
    desc: 'Безопасная мебель для детей и подростков в любом цвете и размере.',
    specs: [
      ['Состав', 'Угловой гардероб, кровать, учебный уголок, ТВ-зона'],
      ['Материалы', 'Экологичный ЛДСП Lamarty E0,5, эмаль, МДФ'],
      ['Проект', '3D-проект + расчёт за 15 минут бесплатно']
    ]
  },
  {
    category: 'Шкафы',
    badge: 'Любой размер',
    title: 'Шкафы-купе и встроенные',
    price: '32 000 ₽',
    oldPrice: '45 700 ₽',
    photo: GALLERY_PHOTOS[7],
    calcType: 'wardrobe',
    desc: 'Встроенные и корпусные шкафы-купе с зеркалами с фацетом, эмалью или шпоном дуба.',
    specs: [
      ['Отделка', 'МДФ в эмали, шпон дуба 24 мм, зеркала с фацетом'],
      ['Системы', 'Hettich Push-to-Open, ручки MakMart, доводчики'],
      ['Проект', '3D-проект + расчёт за 15 минут бесплатно']
    ]
  },
  {
    category: 'Гардеробные и спальни',
    badge: 'Индивидуально',
    title: 'Гардеробные и спальни',
    price: 'от 45 000 ₽',
    oldPrice: '64 300 ₽',
    photo: GALLERY_PHOTOS[1],
    calcType: 'wardrobe',
    desc: 'Эргономичные гардеробные комнаты и спальные гарнитуры по вашим размерам.',
    specs: [
      ['Наполнение', 'Выдвижные ящики, штанги, секции под потолок'],
      ['Стиль', 'В едином стиле со всей мебелью в доме'],
      ['Монтаж', 'Бесплатная установка при заказе от 50 000 ₽']
    ]
  },
  {
    category: 'Гостиные и эксклюзив',
    badge: 'Уникальные проекты',
    title: 'Гостиные, кабинеты и ванные',
    price: 'от 38 000 ₽',
    oldPrice: '54 300 ₽',
    photo: 'img/hero.jpg',
    calcType: 'wardrobe',
    desc: 'ТВ-зоны, рабочие кабинеты, обустройство ниш в ванной и шкафы с интегрированными аквариумами.',
    specs: [
      ['Решения', 'Кухни-гостиные с ТВ-зоной, влагостойкие ниши в санузел'],
      ['Эксклюзив', 'Шкафы с интегрированными аквариумами'],
      ['Скидка', 'Действует скидка 30% по акции']
    ]
  },
  {
    category: 'Акции и условия',
    badge: 'Спецпредложение',
    title: 'Акции, кредит и монтаж 0 ₽',
    price: 'от 10 000 ₽',
    oldPrice: 'Скидка 30% на всё',
    photo: GALLERY_PHOTOS[0],
    calcType: 'kitchen-straight',
    desc: 'Все действующие акции фабрики CROCUS: скидка 30%, монтаж в подарок от 50 000 ₽ и кредит.',
    specs: [
      ['Скидка 30%', 'На всю мебель (включая подписчиков группы ВК)'],
      ['Кредит / 0%', 'До 300 000 ₽ на мебель и технику, рассрочка 0%'],
      ['Оплата', 'Все виды банковских карт и безналичный расчёт (б/н)']
    ]
  }
];

// All 48 news, completed projects, promos, advice & client reviews transferred from CROCUS
const NEWS_POSTS = [
  { date: '17-08-2026', cat: 'project', tag: 'Проект', title: 'ЖК «Капитал», ул. Санфировой 101 — кухня для Ольги и Игоря', text: 'Реализованный кухонный гарнитур с учётом сложных углов помещения. Клип @crocus_mebel.' },
  { date: '23-04-2026', cat: 'project', tag: 'Обзор', title: 'Видео-обзор производства CROCUS без монтажа', text: 'Обзор подготовки потолка, стеновой панели и встроенных розеток в столешницу перед установкой.' },
  { date: '23-04-2026', cat: 'project', tag: 'Проект', title: 'ЖК «Новая Самара» — кухня для Евгения и Анастасии', text: 'Фасад МДФ Supromat Премиум, влагостойкая столешница 70 и 60 см, еврозапил, доводчики, профиль Gola, встроенная техника, планка под натяжной потолок.' },
  { date: '22-01-2025', cat: 'advice', tag: 'О фабрике', title: 'Производство мебели в Самаре по вашим размерам', text: 'Более 18 лет на рынке, гарантия, 3000+ клиентов, установка за 1 день, строго по договору, без посредников.' },
  { date: '22-01-2025', cat: 'project', tag: 'Проект', title: 'Мебель в дом в едином стиле', text: 'Комплексное оснащение загородного дома корпусной и встроенной мебелью.' },
  { date: '23-07-2024', cat: 'project', tag: 'Проект', title: 'Шкафы при входе в дом, Самарская область', text: 'МДФ в эмали, зеркала с фацетом. Запись в салон: ул. 22 Партсъезда 1/2, ТЦ Победа, сек. 123, тел. +7 927 692-27-71.' },
  { date: '20-10-2023', cat: 'promo', tag: 'Акция', title: 'Скидка 30% подписчикам ВК и монтаж в подарок', text: 'По Самаре и области. Тел: 89276922771, 89608321777. Режим работы: 10:00–20:00 без перерывов и выходных по предварительной записи.' },
  { date: '30-08-2023', cat: 'project', tag: 'Проект', title: 'Кухня в 2-этажной квартире', text: 'Реализованный проект индивидуальной кухни с продуманной эргономикой.' },
  { date: '25-08-2023', cat: 'promo', tag: 'Акция', title: 'Акция на новую коллекцию фасадов', text: 'Сроки от 14 дней, бесплатная доставка, скидка 20–30%, гарантия 24 месяца, бесплатный 3D дизайн-проект.' },
  { date: '25-08-2023', cat: 'promo', tag: 'Акция', title: 'Спецусловия на заказ фасадов в Самаре', text: 'Быстрый онлайн-расчёт стоимости и запись на замер: +7 927 692-27-71, +7 927 725-20-78.' },
  { date: '23-08-2023', cat: 'project', tag: 'Проект', title: 'Сданный проект: г. Самара, ЖК «Парус»', text: 'Эмаль, фрезеровки, ручки «Brass».' },
  { date: '21-08-2023', cat: 'project', tag: 'Проект', title: 'Кухня установлена в г. Новокуйбышевск', text: 'МДФ матовые, столешница 38 мм влагостойкая, еврозапил.' },
  { date: '25-06-2022', cat: 'project', tag: 'Проект', title: 'Кинельский район — кухня для Марины', text: 'Массив «Валенсия» Крем RAL 9001, патина «Шампань», камень Grandex.' },
  { date: '24-06-2022', cat: 'project', tag: 'Проект', title: 'Кухня-гостиная с ТВ-зоной', text: 'Фасады МДФ «Высокий глянец».' },
  { date: '23-06-2022', cat: 'project', tag: 'Проект', title: 'Кухня 4200 мм для Ольги', text: 'МДФ и пластик 4200 мм. Цены на 15–30% ниже рыночных.' },
  { date: '22-05-2022', cat: 'promo', tag: 'Распродажа', title: 'Продажа кухни с образца: 161 000 ₽ вместо 378 000 ₽', text: 'МДФ «Нео-Классика» Premium, столешница 38 мм. Тел: +7 927 692-27-71.' },
  { date: '21-05-2022', cat: 'project', tag: 'Детали', title: 'Фасад с фрезеровкой под стекло', text: 'Витринные фасады собственного производства.' },
  { date: '21-05-2022', cat: 'project', tag: 'Проект', title: 'Классическая кухня в бежевых тонах', text: 'Замер, доставка, сборка, установка бесплатно; размерный ряд до 1 мм.' },
  { date: '21-05-2022', cat: 'project', tag: 'Проект', title: 'Рабочая зона с ТВ-зоной и ящиками, Новокуйбышевск', text: 'Удобная система хранения на заказ.' },
  { date: '20-05-2022', cat: 'project', tag: 'Проект', title: 'Современная кухня для Елены', text: 'Лаконичный дизайн и индивидуальная комплектация.' },
  { date: '20-05-2022', cat: 'project', tag: 'Проект', title: 'Обустроили ниши в ванной комнате', text: 'Встроенная мебель со скидкой 30%.' },
  { date: '19-05-2022', cat: 'project', tag: 'Проект', title: 'ЖК «Сокол», Самара — кухня для Ильи', text: 'Сроки от 14 дней, рассрочка 0%, монтаж в подарок.' },
  { date: '19-05-2022', cat: 'project', tag: 'Проект', title: 'ЖК «Рассвет», Самара — кухня для Алексея и семьи', text: 'Индивидуальный дизайн-проект и установка.' },
  { date: '18-05-2022', cat: 'project', tag: 'Проект', title: 'Стильная прихожая с фасадами МДФ (76 200 ₽)', text: 'С доставкой и установкой 82 900 ₽; корпус Lamarty.' },
  { date: '05-05-2022', cat: 'advice', tag: 'О фабрике', title: 'О компании: 16–20 лет делаем кухни на заказ', text: 'Собственное производство в Самаре.' },
  { date: '01-04-2022', cat: 'advice', tag: 'Материалы', title: 'Мебель от производителя: белый МДФ и Slotex', text: 'Надёжные столешницы Slotex и белые фасады МДФ.' },
  { date: '01-04-2022', cat: 'project', tag: 'Классика', title: 'Кухни «Современная классика»', text: 'МДФ, эмаль NCS, патина «Серебро».' },
  { date: '31-03-2022', cat: 'advice', tag: 'О фабрике', title: 'О производстве и соотношении цена/качество', text: 'Собственное оборудование без переплат посредникам.' },
  { date: '31-03-2022', cat: 'advice', tag: 'Полезное', title: '5 причин работать с «CROCUS»', text: 'Индивидуальные проекты, эксклюзивность, точность сроков, договор и гарантия.' },
  { date: '23-03-2022', cat: 'advice', tag: 'Советы', title: 'Памятка по розеткам на кухне при ремонте', text: 'Где и на какой высоте правильно расположить выводы под технику.' },
  { date: '22-03-2022', cat: 'advice', tag: 'Новости', title: 'Работа в штатном режиме, блог ВКонтакте', text: 'Актуальные проекты в сообществе @crocus_mebel.' },
  { date: '18-03-2022', cat: 'advice', tag: 'История', title: 'Производство мебели с 2005 года', text: 'История развития фабрики CROCUS в Самаре.' },
  { date: '17-03-2022', cat: 'project', tag: 'Проект', title: 'Самара, ул. Карла Маркса — шкаф для Анны и Александра', text: 'Шпон дуба 24 мм, эмаль RAL 9010.' },
  { date: '11-03-2022', cat: 'project', tag: 'Проект', title: 'Кухня Неоклассика в элегантном «Белом»', text: 'Светлая неоклассическая кухня на заказ.' },
  { date: '02-02-2022', cat: 'promo', tag: 'Сервис', title: 'Мечтаете о новой кухне? Доставим и установим', text: 'Полный цикл от 3D-проекта до чистового монтажа.' },
  { date: '31-01-2022', cat: 'project', tag: 'Проект', title: 'Комбинированный проект с матовой золотой фурнитурой', text: 'МДФ бархат, встройка под потолок, матовая золотая фурнитура.' },
  { date: '25-01-2022', cat: 'advice', tag: 'Советы', title: 'Советы профессионального повара по эргономике', text: 'Правильный рабочий треугольник и высота модулей.' },
  { date: '12-11-2021', cat: 'promo', tag: 'Выгода', title: 'Пересчёт готового дизайн-проекта кухни', text: 'Крашеная эмаль по цене ПВХ/пластика.' },
  { date: '01-09-2021', cat: 'advice', tag: 'О фабрике', title: 'Три причины, почему выбирают «CROCUS»', text: 'Точность до миллиметра, импортные комплектующие и заводская гарантия.' },
  { date: '28-05-2021', cat: 'advice', tag: 'Вакансия', title: 'Менеджер в салон мебели', text: 'PRO100, Excel, оклад + %, график 5/2 (10–18 / 12–20).' },
  { date: '28-05-2021', cat: 'review', tag: 'Отзыв', title: 'Отзыв: Наталья и семья в г. Безенчук', text: 'Фасады Mattelux, гарантия 10 лет на кромку с лазерной подрезкой.' },
  { date: '18-05-2021', cat: 'review', tag: 'Отзыв', title: 'Отзыв: П-образная белоснежная кухня для Анны', text: 'Самарская область (@crocus__mebel).' },
  { date: '14-05-2021', cat: 'advice', tag: 'Стиль', title: '«СТИЛЬ. ПРОСТО СТИЛЬ.» — работа по проекту и договору', text: 'Производство в Самаре, официальный договор.' },
  { date: '07-04-2021', cat: 'review', tag: 'Отзыв', title: 'Отзыв Натальи, ул. Ставропольская — коллекция «Страдивари»', text: 'Итальянская коллекция «Страдивари», индивидуальный проект в Самаре.' },
  { date: '04-04-2021', cat: 'project', tag: 'Проект', title: 'Кухня с витражной дверью', text: 'Индивидуальный проект @crocus__mebel.' },
  { date: '30-01-2021', cat: 'advice', tag: 'Советы', title: 'Советы администратора @crocus__mebel о выборе производителя', text: 'На что обращать внимание в договоре.' },
  { date: '03-12-2020', cat: 'project', tag: 'Эксклюзив', title: 'Шкафы с интегрированными аквариумами', text: 'Системы Hettich Push-to-Open и ручки MakMart.' },
  { date: '17-11-2020', cat: 'project', tag: 'Проект', title: 'п. Кинельский — кухня из массива дуба «Алиери» для Елены', text: 'Массив дуба «Алиери», камень NEOMARM, Blum (Австрия).' },
  { date: '08-09-2020', cat: 'review', tag: 'Отзыв', title: 'Отзыв мамы Натальи — детская для дочки', text: 'Угловой гардероб, кровать, учебный уголок, ТВ-зона, Lamarty E0,5.' }
];

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  burgerBtn?.addEventListener('click', () => {
    const isHidden = mobileNav.classList.toggle('hidden');
    mobileNav.classList.toggle('flex', !isHidden);
    burgerBtn.setAttribute('aria-expanded', String(!isHidden));
  });
  mobileNav?.querySelectorAll('a, button').forEach((item) => {
    item.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      mobileNav.classList.remove('flex');
      burgerBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Fallback for <dialog closedby="any"> in browsers without native support (e.g. Safari)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isOutsideDialog = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    document.querySelectorAll('dialog[closedby="any"]').forEach((dialog) => {
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = isOutsideDialog(e, dialog);
      });
      dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && isOutsideDialog(e, dialog)) dialog.close();
      });
    });
  }

  // Consistent ARIA & post-interaction validation sync
  const initFormValidationSync = () => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.classList.add('visually-hidden');
    document.body.append(announcer);
    let announceTimer;
    let announcedField;

    const linkError = (el, shown) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute('aria-describedby') || '').split(/\s+/).filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
      else el.removeAttribute('aria-describedby');
    };

    const announceError = (el) => {
      const error = document.getElementById(el.dataset.error);
      if (!error) return;
      const label = el.labels?.[0] ? `${el.labels[0].textContent.trim()}: ` : '';
      clearTimeout(announceTimer);
      announcer.textContent = '';
      announcedField = el;
      announceTimer = setTimeout(() => {
        announcer.textContent = label + error.textContent.trim();
      }, 500);
    };

    const supportsUserInvalid = CSS.supports('selector(:user-invalid)');
    const flagged = new WeakSet();
    const announced = new WeakSet();
    const dirtyState = new WeakMap();

    const syncAria = (el, announce = false, forceInvalid = false) => {
      if (!el.matches?.('input[data-error], textarea[data-error]')) return;
      const invalid = supportsUserInvalid
        ? el.matches(':user-invalid')
        : (forceInvalid || (dirtyState.get(el)?.hasBlurred && !el.validity.valid));

      if (!supportsUserInvalid && (dirtyState.get(el)?.hasBlurred || forceInvalid)) {
        el.classList.toggle('user-invalid-fallback', !el.validity.valid);
        el.classList.toggle('user-valid-fallback', el.validity.valid);
      }

      if (invalid) {
        if (announce && !announced.has(el)) {
          announceError(el);
          announced.add(el);
        }
        el.setAttribute('aria-invalid', 'true');
        linkError(el, true);
        flagged.add(el);
      } else if (flagged.has(el) || el.getAttribute('aria-invalid') !== 'true') {
        el.setAttribute('aria-invalid', 'false');
        linkError(el, false);
        flagged.delete(el);
        announced.delete(el);
        if (announcedField === el) {
          clearTimeout(announceTimer);
          announcer.textContent = '';
        }
      }
    };

    document.querySelectorAll('input[data-error], textarea[data-error]').forEach((el) => syncAria(el));

    document.addEventListener('blur', (e) => {
      const state = dirtyState.get(e.target) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(e.target, state);
      syncAria(e.target, true);
    }, true);

    document.addEventListener('input', (e) => {
      const state = dirtyState.get(e.target) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(e.target, state);
      if (e.target.hasAttribute('aria-invalid')) syncAria(e.target);
    });

    document.addEventListener('invalid', (e) => {
      announced.add(e.target);
      syncAria(e.target, false, true);
    }, true);

    document.addEventListener('reset', (e) => {
      setTimeout(() => {
        [...e.target.elements].forEach((el) => {
          dirtyState.delete(el);
          el.classList.remove('user-invalid-fallback', 'user-valid-fallback');
          syncAria(el);
        });
      });
    }, true);
  };
  initFormValidationSync();

  // Render Catalog Cells
  const catalogGrid = document.getElementById('catalogGrid');
  catalogGrid.innerHTML = CATALOG_ITEMS.map((item, idx) => `
    <article class="group flex flex-col p-4 pb-5 rounded-2xl bg-white shadow-card border border-line hover:shadow-cardHover transition-shadow duration-200 ease-brand">
      <div class="open-product-btn aspect-[4/3] overflow-hidden rounded-xl bg-sand mb-4 cursor-pointer" data-idx="${idx}">
        <img src="${item.photo}" alt="${item.title} — CROCUS Самара" loading="lazy" class="w-full h-full object-cover" />
      </div>
      <div class="flex justify-between items-baseline gap-3 px-1 mb-2">
        <h3 class="open-product-btn text-[17px] font-semibold text-espresso cursor-pointer hover:text-terracotta transition-colors duration-150" data-idx="${idx}">${item.title}</h3>
        <span class="text-base font-semibold text-terracotta whitespace-nowrap tabular-nums">${item.price}</span>
      </div>
      <p class="px-1 mb-4 text-[13.5px] text-inkSoft flex-1">${item.desc}</p>
      <div class="flex items-center justify-between gap-2 pt-3 px-1 border-t border-line">
        <button type="button" class="open-product-btn px-3 py-1.5 rounded-lg text-[12.5px] font-medium bg-cream text-ink hover:bg-espresso hover:text-white transition-colors duration-150 cursor-pointer" data-idx="${idx}">Подробнее</button>
        <button type="button" class="open-booking-btn px-3 py-1.5 rounded-lg text-[12.5px] font-medium bg-cream text-ink hover:bg-terracotta hover:text-white transition-colors duration-150 cursor-pointer" data-item="${item.title} (${item.price})">Забронировать</button>
        <button type="button" class="select-calc-preset px-3 py-1.5 rounded-lg text-[12.5px] font-medium text-inkSoft hover:bg-terracotta/10 hover:text-terracotta transition-colors duration-150 cursor-pointer" data-type="${item.calcType}">Расчёт →</button>
      </div>
    </article>
  `).join('');

  // Price Calculator
  const typeGroup = document.getElementById('calcTypeGroup');
  const lengthInput = document.getElementById('calcLength');
  const lengthVal = document.getElementById('calcLengthVal');
  const lengthMinusBtn = document.getElementById('calcLengthMinus');
  const lengthPlusBtn = document.getElementById('calcLengthPlus');
  const lengthPresetBtns = document.querySelectorAll('.len-preset');
  const termGroup = document.getElementById('calcTermGroup');
  const resetCalcBtn = document.getElementById('resetCalcBtn');
  const oldPriceEl = document.getElementById('calcOldPrice');
  const finalPriceEl = document.getElementById('calcFinalPrice');
  const savingsEl = document.getElementById('calcSavings');
  const breakdownEl = document.getElementById('calcBreakdown');
  const monthlyEl = document.getElementById('calcMonthly');
  const freeInstallText = document.getElementById('freeInstallText');
  const whatsappLink = document.getElementById('calcWhatsappLink');
  const bookFromCalcBtn = document.getElementById('bookFromCalcBtn');

  const formatRub = (num) => `${Math.round(num).toLocaleString('ru-RU')} ₽`;
  let lastCalcSummary = '';
  let installmentMonths = 12;

  const activateSegBtn = (targetBtn) => {
    typeGroup.querySelectorAll('.seg-btn').forEach((c) => {
      c.classList.remove('active', 'bg-espresso', 'text-white', 'border-espresso');
      c.classList.add('bg-white', 'text-espresso', 'border-line');
      c.setAttribute('aria-pressed', 'false');
      const sub = c.querySelector('.seg-sub');
      if (sub) {
        sub.classList.remove('text-white/70');
        sub.classList.add('text-inkMuted');
      }
    });
    targetBtn.classList.add('active', 'bg-espresso', 'text-white', 'border-espresso');
    targetBtn.classList.remove('bg-white', 'text-espresso', 'border-line');
    targetBtn.setAttribute('aria-pressed', 'true');
    const activeSub = targetBtn.querySelector('.seg-sub');
    if (activeSub) {
      activeSub.classList.add('text-white/70');
      activeSub.classList.remove('text-inkMuted');
    }
  };

  const syncLengthPresets = (len) => {
    lengthPresetBtns.forEach((btn) => {
      const isMatch = Math.abs(Number(btn.dataset.len) - len) < 0.05;
      btn.classList.toggle('border-terracotta', isMatch);
      btn.classList.toggle('text-terracotta', isMatch);
      btn.classList.toggle('bg-terracotta/5', isMatch);
    });
  };

  const updateCalculator = () => {
    const activeChip = typeGroup.querySelector('.seg-btn.active') || typeGroup.querySelector('.seg-btn');
    if (!activeChip) return;
    const basePerMeter = Number(activeChip.dataset.base);
    const typeLabel = activeChip.querySelector('span')?.textContent.trim() || activeChip.textContent.trim();
    const length = Number(lengthInput.value);
    const matRadio = document.querySelector('input[name="material"]:checked');
    const matMult = Number(matRadio.value);
    const matName = matRadio.dataset.name;
    const countertopRadio = document.querySelector('input[name="countertop"]:checked');
    const countertop = Number(countertopRadio?.value || 0);
    const hardwareRadio = document.querySelector('input[name="hardware"]:checked');
    const hardware = Number(hardwareRadio?.value || 0);

    let extrasSum = 0;
    const extrasList = [];
    document.querySelectorAll('.calc-extra:checked').forEach((cb) => {
      extrasSum += Number(cb.value);
      extrasList.push(cb.dataset.name);
    });

    lengthVal.textContent = length.toFixed(1);
    syncLengthPresets(length);

    const baseCost = basePerMeter * length * matMult;
    const discountedPrice = baseCost + countertop + hardware + extrasSum;
    const oldPrice = discountedPrice / 0.7;
    const savings = oldPrice - discountedPrice;
    const monthly = Math.min(discountedPrice, 300000) / installmentMonths;

    oldPriceEl.textContent = formatRub(oldPrice);
    finalPriceEl.textContent = formatRub(discountedPrice);
    if (savingsEl) savingsEl.textContent = `Экономия ${formatRub(savings)}`;
    monthlyEl.textContent = `~${formatRub(monthly)}/мес`;

    if (breakdownEl) {
      const rows = [
        [`${typeLabel} (${length.toFixed(1)} м.п.)`, formatRub(baseCost)],
        ['Столешница', countertop ? `+${formatRub(countertop)}` : 'Включено'],
        ['Фурнитура', hardware ? `+${formatRub(hardware)}` : 'Включено'],
        ['Доп. опции', extrasSum ? `+${formatRub(extrasSum)}` : 'Нет']
      ];
      breakdownEl.innerHTML = rows.map(([label, val]) => `
        <div class="flex justify-between items-center gap-3">
          <span class="text-white/70">${label}</span>
          <span class="font-medium text-white">${val}</span>
        </div>
      `).join('');
    }

    freeInstallText.innerHTML = discountedPrice >= 50000
      ? 'Доставка и монтаж — <strong class="font-medium text-white">в подарок</strong> (от 50 000 ₽)'
      : 'Бесплатный монтаж действует при заказе от 50 000 ₽';

    lastCalcSummary = `${typeLabel}, ${length.toFixed(1)} м.п., ${matName} — ${formatRub(discountedPrice)}`;
    const msg = `Здравствуйте! Расчёт на сайте CROCUS:\n• ${lastCalcSummary}\n• Столешница: ${countertopRadio?.dataset.name || 'базовая'}\n• Фурнитура: ${hardwareRadio?.dataset.name || 'стандарт'}\n• Опции: ${extrasList.length ? extrasList.join(', ') : 'базовые'}\nХочу забронировать цену и 3D-проект.`;
    whatsappLink.href = `https://api.whatsapp.com/send?phone=79277252078&text=${encodeURIComponent(msg)}`;
  };

  typeGroup.addEventListener('click', (e) => {
    const chip = e.target.closest('.seg-btn');
    if (!chip) return;
    activateSegBtn(chip);
    updateCalculator();
  });

  lengthInput.addEventListener('input', updateCalculator);
  lengthMinusBtn?.addEventListener('click', () => {
    lengthInput.value = Math.max(1.5, Number(lengthInput.value) - 0.1).toFixed(1);
    updateCalculator();
  });
  lengthPlusBtn?.addEventListener('click', () => {
    lengthInput.value = Math.min(8.0, Number(lengthInput.value) + 0.1).toFixed(1);
    updateCalculator();
  });
  lengthPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      lengthInput.value = btn.dataset.len;
      updateCalculator();
    });
  });

  termGroup?.addEventListener('click', (e) => {
    const btn = e.target.closest('.term-btn');
    if (!btn) return;
    termGroup.querySelectorAll('.term-btn').forEach((b) => {
      b.classList.remove('active', 'bg-terracottaBright', 'text-white');
      b.classList.add('bg-white/10', 'text-white/75');
    });
    btn.classList.add('active', 'bg-terracottaBright', 'text-white');
    btn.classList.remove('bg-white/10', 'text-white/75');
    installmentMonths = Number(btn.dataset.months);
    updateCalculator();
  });

  resetCalcBtn?.addEventListener('click', () => {
    document.getElementById('priceCalcForm').reset();
    const firstChip = typeGroup.querySelector('.seg-btn');
    if (firstChip) activateSegBtn(firstChip);
    lengthInput.value = '3.2';
    installmentMonths = 12;
    termGroup?.querySelectorAll('.term-btn').forEach((b) => {
      const isDefault = b.dataset.months === '12';
      b.classList.toggle('active', isDefault);
      b.classList.toggle('bg-terracottaBright', isDefault);
      b.classList.toggle('text-white', isDefault);
      b.classList.toggle('bg-white/10', !isDefault);
      b.classList.toggle('text-white/75', !isDefault);
    });
    updateCalculator();
  });

  document.querySelectorAll('input[name="material"], input[name="countertop"], input[name="hardware"], .calc-extra').forEach((el) => {
    el.addEventListener('change', updateCalculator);
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.select-calc-preset');
    if (!btn) return;
    const matchingChip = typeGroup.querySelector(`[data-value="${btn.dataset.type}"]`);
    if (matchingChip) {
      activateSegBtn(matchingChip);
      updateCalculator();
    }
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  });

  updateCalculator();

  // Product Detail Modal (<dialog>)
  const productModal = document.getElementById('productModal');
  const pdImage = document.getElementById('pdImage');
  const pdBadge = document.getElementById('pdBadge');
  const pdCategory = document.getElementById('pdCategory');
  const pdTitle = document.getElementById('pdTitle');
  const pdPrice = document.getElementById('pdPrice');
  const pdOldPrice = document.getElementById('pdOldPrice');
  const pdDesc = document.getElementById('pdDesc');
  const pdSpecs = document.getElementById('pdSpecs');
  const pdBookBtn = document.getElementById('pdBookBtn');
  const pdCalcBtn = document.getElementById('pdCalcBtn');
  let activeProductIdx = 0;

  const openProductModal = (idx) => {
    const item = CATALOG_ITEMS[idx];
    if (!item) return;
    activeProductIdx = idx;
    pdImage.src = item.photo;
    pdImage.alt = item.title;
    pdBadge.textContent = item.badge;
    pdCategory.textContent = item.category;
    pdTitle.textContent = item.title;
    pdPrice.textContent = item.price;
    pdOldPrice.textContent = item.oldPrice;
    pdDesc.textContent = `${item.desc} Изготовление на собственном производстве CROCUS (ООО «Мебельная Страна») в Самаре с 2005 года, строго по договору без посредников.`;

    const fullSpecs = [
      ...item.specs,
      ['Точность и размеры', 'Индивидуальный размерный ряд с точностью до 1 мм без наценки за нестандарт'],
      ['3D-проект и замер', 'Бесплатный 3D дизайн-проект за 15 минут в салоне и бесплатный выездной замер'],
      ['Доставка и монтаж', 'Монтаж в подарок при заказе от 50 000 ₽, сборка и установка за 1 день'],
      ['Гарантия и оплата', 'Гарантия 24 мес (10 лет на лазерную кромку), рассрочка 0%, кредит до 300 000 ₽, карты и б/н']
    ];
    pdSpecs.innerHTML = fullSpecs.map(([k, v]) => `<li class="py-2"><strong class="font-medium text-ink">${k}:</strong> ${v}</li>`).join('');
    productModal.showModal();
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-product-btn');
    if (btn) openProductModal(Number(btn.dataset.idx));
  });

  pdBookBtn.addEventListener('click', () => {
    const item = CATALOG_ITEMS[activeProductIdx];
    productModal.close();
    openBooking(`${item.title} (${item.price})`);
  });

  pdCalcBtn.addEventListener('click', () => {
    const item = CATALOG_ITEMS[activeProductIdx];
    productModal.close();
    const matchingChip = typeGroup.querySelector(`[data-value="${item.calcType}"]`);
    if (matchingChip) {
      activateSegBtn(matchingChip);
      updateCalculator();
    }
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  });

  // Booking Modal (<dialog>)
  const bookingModal = document.getElementById('bookingModal');
  const bookingItemTitle = document.getElementById('bookingItemTitle');
  const bookingItemHidden = document.getElementById('bookingItemHidden');
  const bookingWaLink = document.getElementById('bookingWaLink');
  const bookingForm = document.getElementById('bookingForm');
  const bookingFeedback = document.getElementById('bookingFeedback');

  const openBooking = (itemLabel) => {
    bookingItemTitle.textContent = itemLabel || 'Забронировать мебель';
    bookingItemHidden.value = itemLabel || 'Мебель на заказ CROCUS';
    bookingFeedback.textContent = '';
    const waText = `Здравствуйте! Хочу забронировать: ${bookingItemHidden.value} (скидка 30%, бесплатный замер и 3D-проект).`;
    bookingWaLink.href = `https://api.whatsapp.com/send?phone=79277252078&text=${encodeURIComponent(waText)}`;
    bookingModal.showModal();
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-booking-btn');
    if (btn) openBooking(btn.dataset.item);
  });

  bookFromCalcBtn.addEventListener('click', () => openBooking(lastCalcSummary));

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookingName').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    if (!name || !phone) return;
    bookingFeedback.textContent = `Бронь оформлена для ${name} (${phone}) на «${bookingItemHidden.value}». Ждём вас в ТЦ «Победа» (сек. 123) или перезвоним в ближайшее время.`;
    bookingForm.reset();
  });

  // Gallery & Lightbox (<dialog>)
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let currentPhotoIdx = 0;

  const galleryAspects = [
    'aspect-[3/4]',
    'aspect-[4/3]',
    'aspect-square',
    'aspect-[4/5]',
    'aspect-[16/10]',
    'aspect-[3/4]',
    'aspect-[4/3]',
    'aspect-[4/5]',
    'aspect-square',
    'aspect-[16/10]'
  ];

  GALLERY_PHOTOS.forEach((url, idx) => {
    const item = document.createElement('button');
    item.type = 'button';
    const aspect = galleryAspects[idx % galleryAspects.length];
    item.className = `block w-full ${aspect} break-inside-avoid overflow-hidden rounded-2xl bg-white border border-line shadow-card hover:shadow-cardHover transition-shadow duration-200 cursor-pointer`;
    item.setAttribute('aria-label', `Фото работы №${idx + 1}`);
    item.innerHTML = `<img src="${url}" alt="Мебель на заказ в Самаре - CROCUS (${idx + 1})" loading="lazy" class="w-full h-full object-cover" />`;
    item.addEventListener('click', () => openLightbox(idx));
    galleryGrid.appendChild(item);
  });

  const openLightbox = (idx) => {
    currentPhotoIdx = idx;
    lightboxImg.src = GALLERY_PHOTOS[idx];
    if (!lightbox.open) lightbox.showModal();
  };

  document.getElementById('lightboxPrev').addEventListener('click', () => openLightbox((currentPhotoIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length));
  document.getElementById('lightboxNext').addEventListener('click', () => openLightbox((currentPhotoIdx + 1) % GALLERY_PHOTOS.length));

  document.addEventListener('keydown', (e) => {
    if (!lightbox.open) return;
    if (e.key === 'ArrowLeft') openLightbox((currentPhotoIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    if (e.key === 'ArrowRight') openLightbox((currentPhotoIdx + 1) % GALLERY_PHOTOS.length);
  });

  // News Feed
  const newsGrid = document.getElementById('newsGrid');
  const toggleNewsBtn = document.getElementById('toggleAllNewsBtn');
  let currentFilter = 'all';
  let showAllNews = false;

  const renderNews = () => {
    const filtered = currentFilter === 'all' ? NEWS_POSTS : NEWS_POSTS.filter((p) => p.cat === currentFilter);
    const visibleItems = showAllNews ? filtered : filtered.slice(0, 9);
    newsGrid.innerHTML = visibleItems.map((post) => `
      <article class="p-5 rounded-2xl bg-white shadow-card border border-line">
        <div class="flex justify-between text-xs font-medium text-terracotta mb-2 tabular-nums"><span>${post.tag}</span><span class="text-inkMuted">${post.date}</span></div>
        <h3 class="text-[15px] font-semibold leading-snug text-espresso mb-1.5">${post.title}</h3>
        <p class="text-[13px] text-inkSoft">${post.text}</p>
      </article>`).join('');

    if (filtered.length <= 9) {
      toggleNewsBtn.style.display = 'none';
    } else {
      toggleNewsBtn.style.display = 'inline-flex';
      toggleNewsBtn.textContent = showAllNews ? 'Свернуть список' : `Показать все (${filtered.length})`;
    }
  };

  document.querySelectorAll('.tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((b) => {
        b.classList.remove('bg-espresso', 'text-white', 'border-espresso');
        b.classList.add('bg-white', 'text-inkSoft', 'border-line');
      });
      btn.classList.add('bg-espresso', 'text-white', 'border-espresso');
      btn.classList.remove('bg-white', 'text-inkSoft', 'border-line');
      currentFilter = btn.dataset.filter;
      showAllNews = false;
      renderNews();
    });
  });

  toggleNewsBtn.addEventListener('click', () => {
    showAllNews = !showAllNews;
    renderNews();
  });
  renderNews();

  // Reviews (XSS-safe DOM rendering)
  let selectedRating = 5;
  const stars = document.querySelectorAll('#starRating .star');
  stars.forEach((star) => {
    star.addEventListener('click', () => {
      selectedRating = Number(star.dataset.rate);
      stars.forEach((s) => {
        const active = Number(s.dataset.rate) <= selectedRating;
        s.classList.toggle('text-terracotta', active);
        s.classList.toggle('text-line', !active);
      });
    });
  });

  const reviewForm = document.getElementById('reviewForm');
  const submittedReviews = document.getElementById('submittedReviews');
  const reviewFeedback = document.getElementById('reviewFeedback');

  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    if (!name || !text) return;

    const card = document.createElement('div');
    card.className = 'p-5 rounded-2xl bg-white shadow-card border border-line';

    const header = document.createElement('div');
    header.className = 'flex justify-between text-xs font-medium text-terracotta';

    const authorEl = document.createElement('strong');
    authorEl.className = 'font-semibold text-espresso';
    authorEl.textContent = name;

    const ratingEl = document.createElement('span');
    ratingEl.textContent = `${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}`;

    header.append(authorEl, ratingEl);

    const bodyEl = document.createElement('p');
    bodyEl.className = 'mt-2 text-inkSoft text-[13.5px]';
    bodyEl.textContent = text;

    card.append(header, bodyEl);
    submittedReviews.prepend(card);
    reviewForm.reset();
    stars.forEach((s) => {
      s.classList.add('text-terracotta');
      s.classList.remove('text-line');
    });
    selectedRating = 5;
    reviewFeedback.textContent = 'Спасибо, ваш отзыв добавлен.';
  });
});
