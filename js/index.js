// ============ Language Translation System ============
const translations = {
    ar: {
        navAbout: 'عن',
        navFeatures: 'الميزات',
        navHowWorks: 'الآلية',
        navDemo: 'عرض توضيحي',
        navLogin: 'دخول',
        langToggle: 'EN',
        heroTrusted: 'موثوق من قبل 100+ شركة حول العالم',
        heroTitle: 'الشحن العالمي، <span>الدقة المحلية</span>',
        heroDesc: 'نظام شامل متعدد الأدوار للشحن الدولي والمحلي وإدارة توصيل شحناتك مصمم لتبسيط عمليات اللوجستيات عبر دول متعددة، مماثل لنماذج التوصيل التقليديه ولكن مع إمكانيات متقدمة للتعامل مع البضائع وتجميع/تفكيك المنتجات وتتبع شحنتك اينما كانت.',
        heroCTA1: 'ابدأ التجربة',
        heroCTA2: 'شاهد العرض التوضيحي',
        heroStat1Num: '3',
        heroStat1Label: 'دول مخدومة',
        heroStat2Num: '24/7',
        heroStat2Label: 'الدعم والتتبع',
        heroStat3Num: '98.8%',
        heroStat3Label: 'التوصيل في الوقت المحدد',
        featureTag: 'القدرات المتقدمة',
        featureTitle: 'منصة لوجستية على مستوى المؤسسات',
        featureDesc: 'مصممة لشركات التجارة الإلكترونية والشركات اللوجستيه وكذلك للأفراد الذين يحتاجون إلى خدمات شحن موثوقة عند الطلب.',
        ctaReady: 'هل أنت مستعد لتحويل اللوجستيات الخاصة بك؟',
        ctaDesc: 'انضم إلى آلاف الشركات التي تبسط عمليات الشحن الخاصة بها باستخدام منصة ShipHub الشاملة. ابدأ تجربتك المجانية لمدة 14 يوماً اليوم.',
        ctaButton1: 'ابدأ التجربة المجانية',
        ctaButton2: 'احجز عرضاً',
        videoTitle: 'شاهد ShipHub قيد التنفيذ',
        videoDesc: 'شاهد عرضنا التوضيحي لمدة 3 دقائق لنرى كيفية تحويل ShipHub لعمليات الشحن الدولي وتوصيل الميل الأخير للشركات من جميع الأحجام.',
        videoDemo: 'احجز عرضاً مباشراً',
        videoLearn: 'ماذا ستتعلم:',
        // How It Works Section
        howWorksTag: 'العملية',
        howWorksTitle: 'كيفية عمل ShipHub',
        howWorksDesc: 'أربع خطوات شاملة لتحويل عمليات اللوجستيات الخاصة بك بدقة وكفاءة.',
        step1Title: 'جدولة وتخصيص التوصيل',
        step1Desc: 'إدارة عناوين توصيل متعددة عبر دول مختلفة وتحديد تعليمات توصيل مخصصة مع معالم للتحديد الدقيق للموقع.',
        step2Title: 'إنشاء وتصنيف الشحنات',
        step2Desc: 'إنشاء شحنات مع مواصفات بضائع تفصيلية وتصنيفات غنية تشمل الوزن والأبعاد والهشاشة والقيمة ومتطلبات المعالجة الخاصة.',
        step3Title: 'اختيار أفضل عرض متاح',
        step3Desc: 'بعد الموافقة على الطلب، يمكنك اختيار أفضل سائق متاح بناءً على الموقع والقدرات والتقييمات، مع استخدام خوارزميات تحسين المسار لتقليل وقت التوصيل وتكاليف الوقود.',
        step4Title: 'التتبع والتنسيق في الوقت الفعلي',
        step4Desc: 'تتبع الشحنات في الوقت الفعلي مع السائقين الممكنين بـ GPS والاستفادة من الاتصال بين السائق والعميل لتنسيق التوصيل السلس.',
        step5Title: 'التوصيل والتجميع والتحقق',
        step5Desc: 'إكمال التوصيل مع خدمات التجميع الاختيارية بعد التوصيل، وتنفيذ المعالجة الخاصة والتأكيد الرقمي للتوصيل مع الإثبات.',
        // Video Learning Points
        videoPoint1: 'إنشاء شحنات مع تصنيفات تفصيلية',
        videoPoint2: 'إدارة عناوين التوصيل متعددة الدول',
        videoPoint3: 'تتبع GPS الفوري للسائقين والشحنات',
        videoPoint4: 'التحكم الإداري والتحليلات',
        // Feature Cards
        feature1Title: 'ميزات الشحن المتقدمة',
        feature1Desc: 'التقاط بيانات البضائع التفصيلية مع تصنيفات غنية والمعالجة المتخصصة لأنواع البضائع المختلفة.',
        feature1Item1: 'تتبع الوزن والأبعاد والهشاشة والقيمة',
        feature1Item2: 'خيارات تفكيك ما قبل النقل',
        feature1Item3: 'خدمات التجميع بعد التوصيل',
        feature1Item4: 'تعليمات التعامل الخاصة',
        feature2Title: 'إدارة الأسطول والسائقين',
        feature2Desc: 'أسطول خاص من المركبات والسائقين يعملون عبر مناطق الخدمة مع أدوات إدارة شاملة.',
        feature2Item1: 'تتبع GPS للسائقين والتحديثات الفورية',
        feature2Item2: 'ملفات تعريف السائق الشاملة مع السجل التاريخي',
        feature2Item3: 'الاتصال بين السائق والعميل',
        feature2Item4: 'خوارزميات تحسين المسارات',
        feature2Item5: 'أتمتة جدولة التوصيل',
        feature3Title: 'التحكم الإداري',
        feature3Desc: 'الإشراف الكامل على النظام وإدارة حسابات المستخدمين مع التحليلات الشاملة ومقاييس الأداء.',
        feature3Item1: 'إدارة العمليات متعددة المناطق',
        feature3Item2: 'إدارة الأسطول والمركبات',
        feature3Item3: 'أنظمة تكامل المستودع',
        feature3Item4: 'لوحة معلومات تحليلات التوصيل',
        feature3Item5: 'تقارير مقاييس الأداء',
        // CTA Buttons
        ctaStartTrial: 'ابدأ التجربة المجانية',
        ctaBookDemo: 'احجز عرضاً',
    },
    en: {
        navAbout: 'About',
        navFeatures: 'Features',
        navHowWorks: 'How It Works',
        navDemo: 'Platform Demo',
        navLogin: 'Log In',
        langToggle: 'AR',
        heroTrusted: 'Trusted by 100+ businesses worldwide',
        heroTitle: 'Global Shipping, <span>Local Precision</span>',
        heroDesc: 'A comprehensive multi-role international and local shipping system designed to streamline logistics operations across multiple countries, similar to traditional delivery models but with advanced capabilities for handling goods, assembly/disassembly of products, and tracking your shipment anywhere.',
        heroCTA1: 'Start Free Trial',
        heroCTA2: 'Watch Platform Demo',
        heroStat1Num: '3',
        heroStat1Label: 'Countries Served',
        heroStat2Num: '24/7',
        heroStat2Label: 'Support & Tracking',
        heroStat3Num: '98.8%',
        heroStat3Label: 'On-Time Delivery',
        featureTag: 'Advanced Capabilities',
        featureTitle: 'Enterprise-Grade Logistics Platform',
        featureDesc: 'Designed for e-commerce businesses, logistics companies, and individuals requiring reliable on-demand shipping services.',
        ctaReady: 'Ready to Transform Your Logistics?',
        ctaDesc: 'Join thousands of businesses streamlining their shipping operations with ShipHub\'s comprehensive platform. Start your free 14-day trial today.',
        ctaButton1: 'Start Free Trial',
        ctaButton2: 'Schedule Demo',
        videoTitle: 'See ShipHub in Action',
        videoDesc: 'Watch our 3-minute platform demo to see how ShipHub transforms international shipping and last-mile delivery operations for businesses of all sizes.',
        videoDemo: 'Schedule Live Demo',
        videoLearn: 'What You\'ll Learn:',
        // How It Works Section
        howWorksTag: 'The Process',
        howWorksTitle: 'How ShipHub Works',
        howWorksDesc: 'Four comprehensive steps to transform your logistics operations with precision and efficiency.',
        step1Title: 'Schedule & Customize Delivery',
        step1Desc: 'Manage multiple delivery addresses across different countries and define customized delivery instructions with landmarks for precise location identification.',
        step2Title: 'Create & Classify Shipments',
        step2Desc: 'Create shipments with detailed cargo specifications and rich classifications including weight, dimensions, fragility, value, and special handling requirements.',
        step3Title: 'Choose Best Available Offer',
        step3Desc: 'After order approval, select the best available driver based on location, capabilities, and ratings, using route optimization algorithms to reduce delivery time and fuel costs.',
        step4Title: 'Real-Time Tracking & Coordination',
        step4Desc: 'Track shipments in real-time with GPS-enabled drivers and leverage driver-customer communication for seamless delivery coordination.',
        step5Title: 'Delivery, Assembly & Verification',
        step5Desc: 'Complete delivery with optional post-delivery assembly services, execute special handling, and provide digital delivery confirmation with proof.',
        // Video Learning Points
        videoPoint1: 'Create shipments with detailed classifications',
        videoPoint2: 'Manage multi-country delivery addresses',
        videoPoint3: 'Real-time GPS driver and shipment tracking',
        videoPoint4: 'Administrative control and analytics',
        // Feature Cards
        feature1Title: 'Advanced Shipping Features',
        feature1Desc: 'Capture detailed cargo data with rich classifications and specialized handling for different cargo types.',
        feature1Item1: 'Track weight, dimensions, fragility, and value',
        feature1Item2: 'Pre-transport disassembly options',
        feature1Item3: 'Post-delivery assembly services',
        feature1Item4: 'Special handling instructions',
        feature2Title: 'Fleet & Driver Management',
        feature2Desc: 'Dedicated fleet of vehicles and drivers operating across service areas with comprehensive management tools.',
        feature2Item1: 'GPS tracking for drivers with real-time updates',
        feature2Item2: 'Comprehensive driver profiles with historical records',
        feature2Item3: 'Driver-customer communication',
        feature2Item4: 'Route optimization algorithms',
        feature2Item5: 'Delivery scheduling automation',
        feature3Title: 'Administrative Control',
        feature3Desc: 'Full system oversight and user account management with comprehensive analytics and performance metrics.',
        feature3Item1: 'Multi-area operations management',
        feature3Item2: 'Fleet and vehicle management',
        feature3Item3: 'Warehouse integration systems',
        feature3Item4: 'Delivery analytics dashboard',
        feature3Item5: 'Performance metrics reports',
        // CTA Buttons
        ctaStartTrial: 'Start Free Trial',
        ctaBookDemo: 'Schedule Demo',
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'ar';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);
    
    // Set language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
            setLanguage(currentLanguage);
            localStorage.setItem('language', currentLanguage);
        });
    }
});

function setLanguage(lang) {
    // Update HTML lang and dir attributes
    const htmlTag = document.documentElement;
    htmlTag.lang = lang;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data-ar and data-en attributes
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        element.textContent = translations[lang][element.dataset[lang]] || element.getAttribute(`data-${lang}`);
    });
    
    // Update lang toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].langToggle}`;
    }
    
    // Update nav links
    updateNavigation(lang);
    
    // Update hero section
    updateHeroSection(lang);
    
    // Update features section
    updateFeaturesSection(lang);
    
    // Update How It Works section
    updateHowItWorksSection(lang);
    
    // Update CTA sections
    updateCTASection(lang);
    
    // Update video section
    updateVideoSection(lang);
    
    // Update all buttons
    updateAllButtons(lang);
    
    // Update other sections
    updateOtherSections(lang);
}

function updateNavigation(lang) {
    const navItems = {
        'عن': '.nav-links li:nth-child(1) a',
        'الميزات': '.nav-links li:nth-child(2) a',
        'الآلية': '.nav-links li:nth-child(3) a',
        'عرض توضيحي': '.nav-links li:nth-child(4) a'
    };
    
    const navEnItems = {
        'About': '.nav-links li:nth-child(1) a',
        'Features': '.nav-links li:nth-child(2) a',
        'How It Works': '.nav-links li:nth-child(3) a',
        'Platform Demo': '.nav-links li:nth-child(4) a'
    };
    
    if (lang === 'en') {
        const texts = ['About', 'Features', 'How It Works', 'Platform Demo'];
        document.querySelectorAll('.nav-links li a').forEach((el, i) => {
            if (i < texts.length) el.textContent = texts[i];
        });
    } else {
        const texts = ['عن', 'الميزات', 'الآلية', 'عرض توضيحي'];
        document.querySelectorAll('.nav-links li a').forEach((el, i) => {
            if (i < texts.length) el.textContent = texts[i];
        });
    }
}

function updateHeroSection(lang) {
    if (lang === 'en') {
        const badge = document.querySelector('.hero-badge');
        if (badge) badge.innerHTML = '<i class="fas fa-check-circle"></i> Trusted by 100+ businesses worldwide';
        
        const h1 = document.querySelector('.hero-text h1');
        if (h1) h1.innerHTML = 'Global Shipping, <span>Local Precision</span>';
        
        const p = document.querySelector('.hero-text > p');
        if (p) p.textContent = 'A comprehensive multi-role international and local shipping system designed to streamline logistics operations across multiple countries, similar to traditional delivery models but with advanced capabilities for handling goods, assembly/disassembly of products, and tracking your shipment anywhere.';
        
        const stats = document.querySelectorAll('.stat-label');
        if (stats[0]) stats[0].textContent = 'Countries Served';
        if (stats[1]) stats[1].textContent = 'Support & Tracking';
        if (stats[2]) stats[2].textContent = 'On-Time Delivery';
    } else {
        const badge = document.querySelector('.hero-badge');
        if (badge) badge.innerHTML = '<i class="fas fa-check-circle"></i> موثوق من قبل 100+ شركة حول العالم';
        
        const h1 = document.querySelector('.hero-text h1');
        if (h1) h1.innerHTML = 'الشحن العالمي، <span>الدقة المحلية</span>';
        
        const p = document.querySelector('.hero-text > p');
        if (p) p.textContent = 'نظام شامل متعدد الأدوار للشحن الدولي والمحلي وإدارة توصيل شحناتك مصمم لتبسيط عمليات اللوجستيات عبر دول متعددة، مماثل لنماذج التوصيل التقليديه ولكن مع إمكانيات متقدمة للتعامل مع البضائع وتجميع/تفكيك المنتجات وتتبع شحنتك اينما كانت.';
        
        const stats = document.querySelectorAll('.stat-label');
        if (stats[0]) stats[0].textContent = 'دول مخدومة';
        if (stats[1]) stats[1].textContent = 'الدعم والتتبع';
        if (stats[2]) stats[2].textContent = 'التوصيل في الوقت المحدد';
    }
}

function updateFeaturesSection(lang) {
    if (lang === 'en') {
        const tag = document.querySelector('.features .tag');
        if (tag) tag.textContent = 'Advanced Capabilities';
        
        const title = document.querySelector('.features .section-title h2');
        if (title) title.textContent = 'Enterprise-Grade Logistics Platform';
        
        const desc = document.querySelector('.features .section-title p');
        if (desc) desc.textContent = 'Designed for e-commerce businesses, logistics companies, and individuals requiring reliable on-demand shipping services.';
    } else {
        const tag = document.querySelector('.features .tag');
        if (tag) tag.textContent = 'القدرات المتقدمة';
        
        const title = document.querySelector('.features .section-title h2');
        if (title) title.textContent = 'منصة لوجستية على مستوى المؤسسات';
        
        const desc = document.querySelector('.features .section-title p');
        if (desc) desc.textContent = 'مصممة لشركات التجارة الإلكترونية والشركات اللوجستيه وكذلك للأفراد الذين يحتاجون إلى خدمات شحن موثوقة عند الطلب.';
    }
    
    // Update feature cards content
    updateFeatureCards(lang);
}

function updateFeatureCards(lang) {
    const featureCards = document.querySelectorAll('.features-grid .feature-card');
    
    const cardData = {
        en: [
            {
                title: 'Advanced Shipping Features',
                desc: 'Capture detailed cargo data with rich classifications and specialized handling for different cargo types.',
                items: [
                    'Track weight, dimensions, fragility, and value',
                    'Pre-transport disassembly options',
                    'Post-delivery assembly services',
                    'Special handling instructions'
                ]
            },
            {
                title: 'Fleet & Driver Management',
                desc: 'Dedicated fleet of vehicles and drivers operating across service areas with comprehensive management tools.',
                items: [
                    'GPS tracking for drivers with real-time updates',
                    'Comprehensive driver profiles with historical records',
                    'Driver-customer communication',
                    'Route optimization algorithms',
                    'Delivery scheduling automation'
                ]
            },
            {
                title: 'Administrative Control',
                desc: 'Full system oversight and user account management with comprehensive analytics and performance metrics.',
                items: [
                    'Multi-area operations management',
                    'Fleet and vehicle management',
                    'Warehouse integration systems',
                    'Delivery analytics dashboard',
                    'Performance metrics reports'
                ]
            }
        ],
        ar: [
            {
                title: 'ميزات الشحن المتقدمة',
                desc: 'التقاط بيانات البضائع التفصيلية مع تصنيفات غنية والمعالجة المتخصصة لأنواع البضائع المختلفة.',
                items: [
                    'تتبع الوزن والأبعاد والهشاشة والقيمة',
                    'خيارات تفكيك ما قبل النقل',
                    'خدمات التجميع بعد التوصيل',
                    'تعليمات التعامل الخاصة'
                ]
            },
            {
                title: 'إدارة الأسطول والسائقين',
                desc: 'أسطول خاص من المركبات والسائقين يعملون عبر مناطق الخدمة مع أدوات إدارة شاملة.',
                items: [
                    'تتبع GPS للسائقين والتحديثات الفورية',
                    'ملفات تعريف السائق الشاملة مع السجل التاريخي',
                    'الاتصال بين السائق والعميل',
                    'خوارزميات تحسين المسارات',
                    'أتمتة جدولة التوصيل'
                ]
            },
            {
                title: 'التحكم الإداري',
                desc: 'الإشراف الكامل على النظام وإدارة حسابات المستخدمين مع التحليلات الشاملة ومقاييس الأداء.',
                items: [
                    'إدارة العمليات متعددة المناطق',
                    'إدارة الأسطول والمركبات',
                    'أنظمة تكامل المستودع',
                    'لوحة معلومات تحليلات التوصيل',
                    'تقارير مقاييس الأداء'
                ]
            }
        ]
    };
    
    const data = cardData[lang];
    
    featureCards.forEach((card, index) => {
        if (data[index]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const lis = card.querySelectorAll('ul.feature-highlights li');
            
            if (h3) h3.textContent = data[index].title;
            if (p) p.textContent = data[index].desc;
            
            lis.forEach((li, itemIndex) => {
                if (itemIndex < data[index].items.length) {
                    li.textContent = data[index].items[itemIndex];
                }
            });
        }
    });
}

function updateCTASection(lang) {
    if (lang === 'en') {
        const h2 = document.querySelector('.cta-section h2');
        if (h2) h2.textContent = 'Ready to Transform Your Logistics?';
        
        const p = document.querySelector('.cta-section > div > div > p');
        if (p) p.textContent = 'Join thousands of businesses streamlining their shipping operations with ShipHub\'s comprehensive platform. Start your free 14-day trial today.';
    } else {
        const h2 = document.querySelector('.cta-section h2');
        if (h2) h2.textContent = 'هل أنت مستعد لتحويل اللوجستيات الخاصة بك؟';
        
        const p = document.querySelector('.cta-section > div > div > p');
        if (p) p.textContent = 'انضم إلى آلاف الشركات التي تبسط عمليات الشحن الخاصة بها باستخدام منصة ShipHub الشاملة. ابدأ تجربتك المجانية لمدة 14 يوماً اليوم.';
    }
}

function updateHowItWorksSection(lang) {
    const tag = document.querySelector('#how-it-works .tag');
    const title = document.querySelector('#how-it-works .section-title h2');
    const desc = document.querySelector('#how-it-works .section-title p');
    
    if (lang === 'en') {
        if (tag) tag.textContent = 'The Process';
        if (title) title.textContent = 'How ShipHub Works';
        if (desc) desc.textContent = 'Four comprehensive steps to transform your logistics operations with precision and efficiency.';
        
        // Update step rows
        const stepRows = document.querySelectorAll('.step-row');
        const stepData = [
            { title: 'Schedule & Customize Delivery', desc: 'Manage multiple delivery addresses across different countries and define customized delivery instructions with landmarks for precise location identification.' },
            { title: 'Create & Classify Shipments', desc: 'Create shipments with detailed cargo specifications and rich classifications including weight, dimensions, fragility, value, and special handling requirements.' },
            { title: 'Choose Best Available Offer', desc: 'After order approval, select the best available driver based on location, capabilities, and ratings, using route optimization algorithms to reduce delivery time and fuel costs.' },
            { title: 'Real-Time Tracking & Coordination', desc: 'Track shipments in real-time with GPS-enabled drivers and leverage driver-customer communication for seamless delivery coordination.' },
            { title: 'Delivery, Assembly & Verification', desc: 'Complete delivery with optional post-delivery assembly services, execute special handling, and provide digital delivery confirmation with proof.' }
        ];
        
        stepRows.forEach((row, index) => {
            if (stepData[index]) {
                const h3 = row.querySelector('h3');
                const p = row.querySelector('.step-content > p');
                if (h3) h3.textContent = stepData[index].title;
                if (p) p.textContent = stepData[index].desc;
            }
        });
    } else {
        if (tag) tag.textContent = 'العملية';
        if (title) title.textContent = 'كيفية عمل ShipHub';
        if (desc) desc.textContent = 'أربع خطوات شاملة لتحويل عمليات اللوجستيات الخاصة بك بدقة وكفاءة.';
        
        // Update step rows
        const stepRows = document.querySelectorAll('.step-row');
        const stepData = [
            { title: 'جدولة وتخصيص التوصيل', desc: 'إدارة عناوين توصيل متعددة عبر دول مختلفة وتحديد تعليمات توصيل مخصصة مع معالم للتحديد الدقيق للموقع.' },
            { title: 'إنشاء وتصنيف الشحنات', desc: 'إنشاء شحنات مع مواصفات بضائع تفصيلية وتصنيفات غنية تشمل الوزن والأبعاد والهشاشة والقيمة ومتطلبات المعالجة الخاصة.' },
            { title: 'اختيار أفضل عرض متاح', desc: 'بعد الموافقة على الطلب، يمكنك اختيار أفضل سائق متاح بناءً على الموقع والقدرات والتقييمات، مع استخدام خوارزميات تحسين المسار لتقليل وقت التوصيل وتكاليف الوقود.' },
            { title: 'التتبع والتنسيق في الوقت الفعلي', desc: 'تتبع الشحنات في الوقت الفعلي مع السائقين الممكنين بـ GPS والاستفادة من الاتصال بين السائق والعميل لتنسيق التوصيل السلس.' },
            { title: 'التوصيل والتجميع والتحقق', desc: 'إكمال التوصيل مع خدمات التجميع الاختيارية بعد التوصيل، وتنفيذ المعالجة الخاصة والتأكيد الرقمي للتوصيل مع الإثبات.' }
        ];
        
        stepRows.forEach((row, index) => {
            if (stepData[index]) {
                const h3 = row.querySelector('h3');
                const p = row.querySelector('.step-content > p');
                if (h3) h3.textContent = stepData[index].title;
                if (p) p.textContent = stepData[index].desc;
            }
        });
    }
}

function updateVideoSection(lang) {
    if (lang === 'en') {
        const h2 = document.querySelector('.video-content h2');
        if (h2) h2.textContent = 'See ShipHub in Action';
        
        const p = document.querySelector('.video-content > p');
        if (p) p.textContent = 'Watch our 3-minute platform demo to see how ShipHub transforms international shipping and last-mile delivery operations for businesses of all sizes.';
        
        const h3 = document.querySelector('.video-section h3');
        if (h3) h3.textContent = 'What You\'ll Learn:';
        
        // Update video learning points
        const videoLists = document.querySelectorAll('.video-section ul li');
        const learningPoints = [
            'Create shipments with detailed classifications',
            'Manage multi-country delivery addresses',
            'Real-time GPS driver and shipment tracking',
            'Administrative control and analytics'
        ];
        videoLists.forEach((li, index) => {
            if (index < learningPoints.length) {
                const textNode = li.textContent;
                li.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 10px; color: var(--accent-blue);"></i>
                    ${learningPoints[index]}`;
            }
        });
    } else {
        const h2 = document.querySelector('.video-content h2');
        if (h2) h2.textContent = 'شاهد ShipHub قيد التنفيذ';
        
        const p = document.querySelector('.video-content > p');
        if (p) p.textContent = 'شاهد عرضنا التوضيحي لمدة 3 دقائق لنرى كيفية تحويل ShipHub لعمليات الشحن الدولي وتوصيل الميل الأخير للشركات من جميع الأحجام.';
        
        const h3 = document.querySelector('.video-section h3');
        if (h3) h3.textContent = 'ماذا ستتعلم:';
        
        // Update video learning points
        const videoLists = document.querySelectorAll('.video-section ul li');
        const learningPoints = [
            'إنشاء شحنات مع تصنيفات تفصيلية',
            'إدارة عناوين التوصيل متعددة الدول',
            'تتبع GPS الفوري للسائقين والشحنات',
            'التحكم الإداري والتحليلات'
        ];
        videoLists.forEach((li, index) => {
            if (index < learningPoints.length) {
                const textNode = li.textContent;
                li.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 10px; color: var(--accent-blue);"></i>
                    ${learningPoints[index]}`;
            }
        });
    }
}

function updateAllButtons(lang) {
    // Update CTA buttons in hero section
    const heroCtaButtons = document.querySelectorAll('.hero .cta-buttons a.btn');
    if (heroCtaButtons[0]) {
        const span0 = heroCtaButtons[0].querySelector('span');
        if (span0) span0.textContent = lang === 'en' ? 'Start Free Trial' : 'ابدأ التجربة';
        else heroCtaButtons[0].innerHTML = `<i class="fas fa-rocket"></i> ${lang === 'en' ? 'Start Free Trial' : 'ابدأ التجربة'}`;
    }
    if (heroCtaButtons[1]) {
        const span1 = heroCtaButtons[1].querySelector('span');
        if (span1) span1.textContent = lang === 'en' ? 'Watch Platform Demo' : 'شاهد العرض التوضيحي';
        else heroCtaButtons[1].innerHTML = `<i class="fas fa-play-circle"></i> ${lang === 'en' ? 'Watch Platform Demo' : 'شاهد العرض التوضيحي'}`;
    }
    
    // Update Login button
    const loginBtn = document.querySelector('.nav-cta .btn-primary');
    if (loginBtn) {
        const span = loginBtn.querySelector('span.lang-text');
        if (span) span.textContent = lang === 'en' ? 'Log In' : 'دخول';
    }
    
    // Update video section button
    const videoBtn = document.querySelector('.video-content .btn-primary');
    if (videoBtn) {
        videoBtn.innerHTML = `<i class="fas fa-calendar-alt"></i> ${lang === 'en' ? 'Schedule Live Demo' : 'احجز عرضاً مباشراً'}`;
    }
    
    // Update CTA section buttons
    const ctaButtons = document.querySelectorAll('.cta-section .cta-buttons a.btn');
    if (ctaButtons[0]) {
        ctaButtons[0].innerHTML = `<i class="fas fa-shipping-fast"></i> ${lang === 'en' ? 'Start Free Trial' : 'ابدأ التجربة المجانية'}`;
    }
    if (ctaButtons[1]) {
        ctaButtons[1].innerHTML = `<i class="fas fa-calendar-alt"></i> ${lang === 'en' ? 'Schedule Demo' : 'احجز عرضاً'}`;
    }
}

function updateOtherSections(lang) {
    // Update dashboard title
    const dashboardTitle = document.querySelector('.dashboard-title');
    if (dashboardTitle) {
        if (lang === 'en') {
            dashboardTitle.textContent = 'ShipHub Dashboard';
        } else {
            dashboardTitle.textContent = 'لوحة تحكم ShipHub';
        }
    }
    
    // Update dashboard items
    const dashboardItems = document.querySelectorAll('.dashboard-item');
    if (lang === 'en') {
        const texts = ['Shipping Companies', 'Order Owner', 'Drivers', 'Broker'];
        dashboardItems.forEach((el, i) => {
            if (i < texts.length) el.textContent = texts[i];
        });
    } else {
        const texts = ['شركات الشحن', 'صاحب الطلب', 'السائقون', 'الوسيط'];
        dashboardItems.forEach((el, i) => {
            if (i < texts.length) el.textContent = texts[i];
        });
    }
}

// ============ Header scroll effect ============
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============ Mobile menu toggle ============
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

mobileMenuBtn.addEventListener('click', function() {
    const isVisible = navLinks.style.display === 'flex';
    
    if (isVisible) {
        navLinks.style.display = 'none';
        navCta.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navCta.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'var(--white)';
        navLinks.style.padding = '30px';
        navLinks.style.boxShadow = 'var(--shadow-lg)';
        navLinks.style.gap = '20px';
        
        navCta.style.flexDirection = 'column';
        navCta.style.position = 'absolute';
        navCta.style.top = 'calc(100% + 200px)';
        navCta.style.left = '0';
        navCta.style.right = '0';
        navCta.style.backgroundColor = 'var(--white)';
        navCta.style.padding = '30px';
        navCta.style.boxShadow = 'var(--shadow-lg)';
        navCta.style.gap = '15px';
    }
});

// ============ Video modal functionality ============
const videoModal = document.getElementById('videoModal');
const playButton = document.getElementById('playButton');
const closeModal = document.getElementById('closeModal');

playButton.addEventListener('click', function() {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', function() {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Stop video when modal closes
    const iframe = document.getElementById('demoVideo');
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
});

// Close modal when clicking outside
videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop video when modal closes
        const iframe = document.getElementById('demoVideo');
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
});

// ============ Update active link based on scroll position ============
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinksElements = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ============ Smooth scrolling for anchor links ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                navCta.style.display = 'none';
            }
        }
    });
});

// ============ Animate elements on scroll ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.feature-card, .step-content, .pricing-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Add animation classes
document.addEventListener('DOMContentLoaded', function() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .step-content, .pricing-card, .testimonial-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animated, .step-content.animated, .pricing-card.animated, .testimonial-card.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .step-row:nth-child(odd) .step-content {
            transition-delay: 0.1s;
        }
        
        .step-row:nth-child(even) .step-content {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(1) { transition-delay: 0.1s; }
        .feature-card:nth-child(2) { transition-delay: 0.2s; }
        .feature-card:nth-child(3) { transition-delay: 0.3s; }
        
        .pricing-card:nth-child(1) { transition-delay: 0.1s; }
        .pricing-card:nth-child(2) { transition-delay: 0.2s; }
        .pricing-card:nth-child(3) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
});
