import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ru';

export const translations = {
  en: {
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Cases',
    navContact: 'Contact',
    heroGreeting: 'hi, i am',
    heroName: 'olga',
    heroTagline: 'i create creatives and visual content for those who want to stand out',
    heroCTA: 'Get in touch',
    aboutTitle: 'About me',
    aboutText: 'For over five years, I have been creating visual content that makes users stop scrolling. I help brands, startups, and businesses package their ideas into eye-catching graphics and short videos that engage the audience and drive sales. Let\'s create something awesome together!',
    servicesTitle: 'Services',
    services: [
      {
        num: '01',
        name: 'Ad Creatives',
        desc: 'Design of static and animated banners for targeted advertising and promo campaigns that hit the target.',
      },
      {
        num: '02',
        name: 'Social Media Video',
        desc: 'Creating dynamic Reels, Shorts, and Stories: from editing trending videos to adding special effects.',
      },
      {
        num: '03',
        name: 'Profile Design',
        desc: 'Development of a single visual style (post grid, templates, covers) for the brand\'s social networks.',
      },
      {
        num: '04',
        name: 'Motion Design',
        desc: 'Animation of logos, texts, and interface elements to bring dynamics to your content.',
      },
      {
        num: '05',
        name: 'Visual Concepts',
        desc: 'Creating mood boards, product renders, and visual styles for launching new lines and startups.',
      },
    ],
    projectsTitle: 'Cases',
    projectButton: 'View',
    projects: [
      {
        num: '01',
        name: 'Elysian Jewelry',
        category: 'Product Promo',
      },
      {
        num: '02',
        name: 'Nextlevel Studio',
        category: 'Ad Campaign',
      },
      {
        num: '03',
        name: 'Aura Brand Identity',
        category: 'Social Grid Design',
      },
      {
        num: '04',
        name: 'Solaris Digital',
        category: 'Motion Promo',
      },
      {
        num: '05',
        name: 'Zenith Cosmetics',
        category: '3D Visual Show',
      },
      {
        num: '06',
        name: 'Holiday in a Box',
        category: 'Event Decoration',
      },
      {
        num: '07',
        name: 'Lipstick Design',
        category: 'Lipstick Promo',
      },
    ],
    pricingTitle: 'Timeline & Cost',
    pricingTimelineTitle: 'Timeline',
    pricingTimelineSub: '3–7 Days',
    pricingTimelineDesc: 'Average project timeline. The exact delivery time depends directly on the task volume, detail levels, and scene complexity.',
    pricingTimelineOptimal: 'Optimal (3-7 days)',
    pricingTimelineDays1: '1 day',
    pricingTimelineDays10: '10 days',
    pricingTimelineConceptNote: 'Usually, the first concept is ready on the 3rd day.',
    pricingCostTitle: 'Cost',
    pricingCostSub: 'Budget',
    pricingCostDesc: 'Each project is calculated individually. The final price is influenced by the complexity of 3D modeling, scene count, and detail depth.',
    pricingTierStatic: 'Static banner / Creative',
    pricingStaticPrice: 'from $30',
    pricingTierAnimated: 'Video (4 sec) / Reels',
    pricingAnimatedPrice: 'from $50',
    pricingTierBulk: 'Bulk order (3+ creatives)',
    pricingBulkDiscount: '15% discount',
    workflowTitle: 'Workflow',
    workflowCTA: 'Start Project',
    workflow: [
      {
        num: '01',
        title: 'Briefing',
        desc: 'We discuss your brand\'s tasks, analyze competitors, and assemble a mood board with references.',
      },
      {
        num: '02',
        title: 'Concept',
        desc: 'I develop sketches of future creatives, and propose composition and color schemes.',
      },
      {
        num: '03',
        title: 'Creation',
        desc: 'I model 3D scenes, edit videos, add visual effects, and assemble the final graphics.',
      },
      {
        num: '04',
        title: 'Delivery',
        desc: 'We make precise revisions, bring the visuals to perfection, and transfer the final assets.',
      },
    ],
    footerRights: 'All rights reserved.',
    ctaTitle: "Let's create something legendary together",
    ctaDesc: "Ready to elevate your product with high-end 3D and motion design? Drop me a line and let's get started.",
    ctaButton: "Start Project",
  },
  ru: {
    navAbout: 'Обо мне',
    navServices: 'Услуги',
    navProjects: 'Кейсы',
    navContact: 'Контакты',
    heroGreeting: 'привет, я',
    heroName: 'ольга',
    heroTagline: 'создаю креативы и визуальный контент для тех, кто хочет выделяться',
    heroCTA: 'Связаться',
    aboutTitle: 'Обо мне',
    aboutText: 'Более пяти лет я создаю визуальный контент, который заставляет пользователя остановить скролл ленты. Я помогаю брендам, стартапам и бизнесу упаковать их идеи в яркую графику и короткие видео, которые вовлекают аудиторию и приносят продажи. Давайте сделаем что-то крутое вместе!',
    servicesTitle: 'Услуги',
    services: [
      {
        num: '01',
        name: 'Рекламные креативы',
        desc: 'Дизайн статичных и анимированных баннеров для таргетированной рекламы и промо-кампаний, бьющих точно в цель.',
      },
      {
        num: '02',
        name: 'Видео для соцсетей',
        desc: 'Создание динамичных Reels, Shorts и Stories: от монтажа трендовых роликов до добавления спецэффектов.',
      },
      {
        num: '03',
        name: 'Оформление профилей',
        desc: 'Разработка единого визуального стиля (сетка постов, шаблоны, обложки) для соцсетей бренда.',
      },
      {
        num: '04',
        name: 'Motion-дизайн',
        desc: 'Анимация логотипов, текстов и элементов интерфейса для придания динамики вашему контенту.',
      },
      {
        num: '05',
        name: 'Визуальные концепты',
        desc: 'Создание мудбордов, рендеров продуктов и визуальных стилей для запуска новых линеек и стартапов.',
      },
    ],
    projectsTitle: 'Кейсы',
    projectButton: 'Смотреть',
    projects: [
      {
        num: '01',
        name: 'Elysian Jewelry',
        category: 'Промо продукта',
      },
      {
        num: '02',
        name: 'Nextlevel Studio',
        category: 'Рекламная кампания',
      },
      {
        num: '03',
        name: 'Aura Brand Identity',
        category: 'Оформление соцсетей',
      },
      {
        num: '04',
        name: 'Solaris Digital',
        category: 'Motion-промо',
      },
      {
        num: '05',
        name: 'Zenith Cosmetics',
        category: '3D Видеопрезентация',
      },
      {
        num: '06',
        name: 'Праздник в коробке',
        category: 'Оформление праздников',
      },
      {
        num: '07',
        name: 'Lipstick Design',
        category: 'Реклама помады',
      },
    ],
    pricingTitle: 'Сроки и цены',
    pricingTimelineTitle: 'Сроки выполнения',
    pricingTimelineSub: '3–7 Дней',
    pricingTimelineDesc: 'Средний срок разработки проекта. Точное время сдачи напрямую зависит от объема задач, детализации графики и общей сложности сцен.',
    pricingTimelineOptimal: 'Оптимально (3-7 дн)',
    pricingTimelineDays1: '1 день',
    pricingTimelineDays10: '10 дней',
    pricingTimelineConceptNote: 'Обычно первый концепт готов на 3-й день.',
    pricingCostTitle: 'Стоимость',
    pricingCostSub: 'Бюджет',
    pricingCostDesc: 'Каждый проект рассчитывается индивидуально. На итоговую стоимость влияют сложность 3D-моделирования, количество сцен и глубина проработки деталей.',
    pricingTierStatic: 'Статический баннер / Креатив',
    pricingStaticPrice: 'от 30$',
    pricingTierAnimated: 'Видео (4 сек) / Reels',
    pricingAnimatedPrice: 'от 50$',
    pricingTierBulk: 'Пакетный заказ (от 3-х креативов)',
    pricingBulkDiscount: 'скидка 15%',
    workflowTitle: 'Процесс',
    workflowCTA: 'Начать проект',
    workflow: [
      {
        num: '01',
        title: 'Брифинг',
        desc: 'Обсуждаем задачи вашего бренда, анализируем конкурентов и собираем мудборд с референсами.',
      },
      {
        num: '02',
        title: 'Концепт',
        desc: 'Разрабатываю эскизы будущих креативов, предлагаю композиционные и цветовые решения.',
      },
      {
        num: '03',
        title: 'Создание',
        desc: 'Моделирую 3D-сцены, монтирую видео, накладываю эффекты и собираю финальную графику.',
      },
      {
        num: '04',
        title: 'Сдача',
        desc: 'Вносим точечные правки, доводим визуал до совершенства и передаем готовые материалы.',
      },
    ],
    footerRights: 'Все права защищены.',
    ctaTitle: "Давайте создадим что-то легендарное вместе",
    ctaDesc: "Готовы поднять свой продукт на новый уровень с помощью 3D и motion-дизайна? Напишите мне, и мы обсудим ваш проект.",
    ctaButton: "Начать проект",
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
