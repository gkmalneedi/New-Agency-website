document.addEventListener('DOMContentLoaded', () => {
    
    // --- Translations Dictionary ---
    const translations = {
        en: {
            logo: "The Daily Pulse.",
            breaking: "Breaking",
            cat_home: "Home",
            view_all: "View All",
            footer_desc: "Delivering accurate, timely, and impactful news from around the globe. Stay informed with our award-winning journalism.",
            footer_company: "Company",
            footer_about: "About Us",
            footer_careers: "Careers",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            footer_contact: "Contact",
            rights: "The Daily Pulse. All rights reserved.",
            follow_us: "Follow Us",
            popular_posts: "Popular Posts",
            recommended_posts: "Recommended",
            prev_article: "Previous Article",
            next_article: "Next Article",
            poll_title: "Poll of the Day",
            poll_question: "Do you think AI will replace human journalists in the next 5 years?",
            poll_op1: "Yes, completely.",
            poll_op2: "Partially, for data reporting.",
            poll_op3: "No, human insight is irreplaceable.",
            poll_vote: "Vote"
        },
        te: {
            logo: "ది డైలీ పల్స్.",
            breaking: "బ్రేకింగ్",
            cat_home: "హోమ్",
            view_all: "అన్నింటినీ చూడండి",
            footer_desc: "ప్రపంచవ్యాప్తంగా కచ్చితమైన, సమయానుకూలమైన వార్తలను అందిస్తున్నాము. మా అవార్డు గెలుచుకున్న జర్నలిజంతో ఎప్పటికప్పుడు అప్‌డేట్ గా ఉండండి.",
            footer_company: "సంస్థ",
            footer_about: "మా గురించి",
            footer_careers: "కెరీర్స్",
            footer_privacy: "గోప్యతా విధానం",
            footer_terms: "సేవా నిబంధనలు",
            footer_contact: "సంప్రదించండి",
            rights: "ది డైలీ పల్స్. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.",
            follow_us: "మమ్మల్ని అనుసరించండి",
            popular_posts: "జనాదరణ పొందినవి",
            recommended_posts: "సిఫార్సు చేయబడినవి",
            prev_article: "మునుపటి వ్యాసం",
            next_article: "తదుపరి వ్యాసం",
            poll_title: "ఈ రోజు పోల్",
            poll_question: "రాబోయే 5 సంవత్సరాలలో AI మానవ జర్నలిస్టుల స్థానాన్ని భర్తీ చేస్తుందని మీరు అనుకుంటున్నారా?",
            poll_op1: "అవును, పూర్తిగా.",
            poll_op2: "పాక్షికంగా, డేటా రిపోర్టింగ్ కోసం.",
            poll_op3: "లేదు, మానవ నైపుణ్యాన్ని భర్తీ చేయలేరు.",
            poll_vote: "ఓటు వేయండి"
        }
    };

    const mockArticleStrings = {
        en: { title: "Exciting developments in [CAT] that will change the industry", desc: "An in-depth look at recent events and what experts are predicting for the coming months.", time: "hours ago", bodyPara1: "The industry is undergoing a massive transformation. Experts point out that the recent developments have accelerated the timeline of innovation far beyond initial projections.", bodyPara2: "“This is unprecedented,” said a lead researcher. “We have never seen this level of global coordination before. It essentially redefines how we approach problem-solving at scale.”", bodyPara3: "While there are challenges ahead, the general consensus is optimistic. Market indicators suggest robust growth, and regulatory bodies are beginning to draft frameworks to ensure safety and ethical compliance across the board." },
        te: { title: "[CAT] రంగంలో పరిశ్రమను మార్చేసే ఉత్తేజకరమైన పరిణామాలు", desc: "ఇటీవలి సంఘటనల గురించి లోతైన పరిశీలన మరియు రాబోయే నెలల్లో నిపుణుల అంచనాలు.", time: "గంటల క్రితం", bodyPara1: "పరిశ్రమ భారీ మార్పులకు గురవుతోంది. ఇటీవలి పరిణామాలు ఆవిష్కరణల వేగాన్ని అంచనాలకు మించి పెంచాయని నిపుణులు ఎత్తిచూపుతున్నారు.", bodyPara2: "“ఇది మునుపెన్నడూ లేనిది” అని ఒక ప్రధాన పరిశోధకుడు చెప్పారు. “ఇంతకు ముందు ఈ స్థాయి ప్రపంచ సమన్వయాన్ని మేము చూడలేదు. ఇది సమస్యల పరిష్కారానికి మనం ఎలా ముందుకు వెళ్లాలో పునర్నిర్వచించింది.”", bodyPara3: "ముందు సవాళ్లు ఉన్నప్పటికీ, అందరి అభిప్రాయం సానుకూలంగా ఉంది. మార్కెట్ సూచికలు బలమైన వృద్ధిని సూచిస్తున్నాయి, మరియు సురక్షిత మరియు నైతిక నియమాలను నిర్ధారించడానికి నియంత్రణ సంస్థలు ముసాయిదాలను సిద్ధం చేస్తున్నాయి." }
    };

    // Default Fallback Arrays if DB is empty
    let heroSlidesData = {
        en: [
            { id: 1, category: "world", title: "Global Summit Reaches Historic Agreement on Climate Action", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop", author: "Sarah Jenkins", time: "1 hour ago", link: "article.html?id=1" },
            { id: 2, category: "technology", title: "Next-Gen AI Models Unveiled: A Paradigm Shift in Computing", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", author: "Michael Chang", time: "3 hours ago", link: "article.html?id=2" }
        ],
        te: [
            { id: 1, category: "world", title: "వాతావరణ మార్పులపై చారిత్రాత్మక ఒప్పందానికి ప్రపంచ శిఖరాగ్ర సమావేశం", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop", author: "సారా జెంకిన్స్", time: "1 గంట క్రితం", link: "article.html?id=1" },
            { id: 2, category: "technology", title: "నెక్స్ట్-జెన్ AI మోడల్స్ ఆవిష్కరణ: కంప్యూటింగ్ లో పెను మార్పులు", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", author: "మైఖేల్ చాంగ్", time: "3 గంటల క్రితం", link: "article.html?id=2" }
        ]
    };

    let dynamicCategories = [
        { id: "world", en: "World", te: "ప్రపంచం" },
        { id: "politics", en: "Politics", te: "రాజకీయం" },
        { id: "business", en: "Business", te: "వ్యాపారం" },
        { id: "technology", en: "Technology", te: "సాంకేతికం" },
        { id: "science", en: "Science", te: "సైన్స్" },
        { id: "health", en: "Health", te: "ఆరోగ్యం" },
        { id: "sports", en: "Sports", te: "క్రీడలు" },
        { id: "entertainment", en: "Entertainment", te: "వినోదం" }
    ];

    let customArticles = [];
    let siteSettings = { logo_type: "text" };

    // --- Database Initialization and Override ---
    const dbString = localStorage.getItem('pulse_db');
    if (dbString) {
        const db = JSON.parse(dbString);
        
        siteSettings = db.settings;
        dynamicCategories = db.categories;

        translations.en.logo = db.settings.logo_en || translations.en.logo;
        translations.te.logo = db.settings.logo_te || translations.te.logo;
        translations.en.footer_desc = db.settings.footer_en || translations.en.footer_desc;
        translations.te.footer_desc = db.settings.footer_te || translations.te.footer_desc;
        
        if (db.hero && db.hero.length > 0) {
            heroSlidesData.en = db.hero.map(h => ({
                id: h.id, category: h.category, title: h.title_en, image: h.image, author: h.author, time: "Just now", link: "article.html"
            }));
            heroSlidesData.te = db.hero.map(h => ({
                id: h.id, category: h.category, title: h.title_te, image: h.image, author: h.author, time: "ఇప్పుడే", link: "article.html"
            }));
        }

        if (db.articles) {
            customArticles = db.articles;
        }
    }


    // State
    let currentLang = localStorage.getItem('siteLang') || 'en';
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) langSwitcher.value = currentLang;

    // Theme Setup
    let currentTheme = localStorage.getItem('siteTheme') || 'light';
    const themeToggleBtn = document.getElementById('theme-toggle');
    const updateThemeIcon = () => {
        if (!themeToggleBtn) return;
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    };
    updateThemeIcon();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('siteTheme', currentTheme);
            updateThemeIcon();
        });
    }

    // Scroll Logic
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollBottomBtn = document.getElementById('scroll-bottom');

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    if (scrollBottomBtn) {
        scrollBottomBtn.addEventListener('click', () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
    }

    const getRandomImage = (index) => {
        const pool = [
            "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493150134366-cb29606d2891?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
        ];
        return pool[index % pool.length];
    };

    // --- Render Functions ---

    const renderLogo = () => {
        const logoEls = document.querySelectorAll('.logo h1 a, footer h2');
        logoEls.forEach(el => {
            if (siteSettings.logo_type === 'image' && siteSettings.logo_img) {
                el.innerHTML = `<img src="${siteSettings.logo_img}" alt="Site Logo" style="max-height: 45px; display: block;">`;
                el.removeAttribute('data-i18n'); // prevent override
            } else {
                el.setAttribute('data-i18n', 'logo');
                el.innerHTML = translations[currentLang]['logo'];
            }
        });
    };

    const renderNavMenu = () => {
        const navLinksContainer = document.querySelector('.nav-links');
        if (!navLinksContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const currentCat = urlParams.get('cat');
        const isHome = !window.location.href.includes('category.html') && !window.location.href.includes('article.html');

        let html = `<li><a href="index.html" class="${isHome ? 'active' : ''}" data-i18n="cat_home">${translations[currentLang].cat_home}</a></li>`;
        
        dynamicCategories.forEach(c => {
            const isActive = currentCat === c.id ? 'active' : '';
            const name = currentLang === 'te' ? c.te : c.en;
            html += `<li><a href="category.html?cat=${c.id}" class="${isActive}">${name}</a></li>`;
        });

        navLinksContainer.innerHTML = html;
    };

    const renderSocialLinks = () => {
        if (!siteSettings.social) return;
        const soc = siteSettings.social;
        
        // Update Sidebar
        const fbSidebar = document.querySelector('.sidebar .fa-facebook-f')?.parentElement;
        if(fbSidebar) fbSidebar.href = soc.facebook || '#';
        const twSidebar = document.querySelector('.sidebar .fa-twitter')?.parentElement;
        if(twSidebar) twSidebar.href = soc.twitter || '#';
        const igSidebar = document.querySelector('.sidebar .fa-instagram')?.parentElement;
        if(igSidebar) igSidebar.href = soc.instagram || '#';
        const ytSidebar = document.querySelector('.sidebar .fa-youtube')?.parentElement;
        if(ytSidebar) ytSidebar.href = soc.youtube || '#';

        // Update Footer
        const fbFoot = document.querySelector('footer .fa-facebook-f')?.parentElement;
        if(fbFoot) fbFoot.href = soc.facebook || '#';
        const twFoot = document.querySelector('footer .fa-twitter')?.parentElement;
        if(twFoot) twFoot.href = soc.twitter || '#';
        const igFoot = document.querySelector('footer .fa-instagram')?.parentElement;
        if(igFoot) igFoot.href = soc.instagram || '#';
        const inFoot = document.querySelector('footer .fa-linkedin-in')?.parentElement;
        if(inFoot) inFoot.href = soc.linkedin || '#';
    };

    let slideInterval;

    const renderHeroSlider = () => {
        const heroContainer = document.getElementById('hero-slider');
        if (!heroContainer) return;

        clearInterval(slideInterval);
        
        const data = heroSlidesData[currentLang];
        let sliderHTML = '';
        data.forEach((slide, index) => {
            const catObj = dynamicCategories.find(c => c.id === slide.category);
            const catName = catObj ? (currentLang === 'te' ? catObj.te : catObj.en) : slide.category;

            sliderHTML += `
                <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${slide.image}')">
                    <div class="slide-content">
                        <div class="container">
                            <span class="slide-category">${catName}</span>
                            <h2 class="slide-title"><a href="${slide.link}">${slide.title}</a></h2>
                            <div class="slide-meta">
                                <span class="author">${currentLang === 'te' ? 'రచన' : 'By'} ${slide.author}</span> &bull; <span class="time">${slide.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        sliderHTML += `
            <div class="slider-controls">
                <button class="slider-btn" id="prev-slide"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="slider-btn" id="next-slide"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        `;
        heroContainer.innerHTML = sliderHTML;

        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        const showSlide = (index) => {
            slides.forEach(s => s.classList.remove('active'));
            slides[index].classList.add('active');
        };
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };
        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        document.getElementById('next-slide')?.addEventListener('click', nextSlide);
        document.getElementById('prev-slide')?.addEventListener('click', prevSlide);
        slideInterval = setInterval(nextSlide, 5000);
    };

    const renderHomePageCategories = () => {
        const categoriesContainer = document.getElementById('categories-container');
        if (!categoriesContainer || document.getElementById('category-page-title')) return;

        let categoriesHTML = '';
        dynamicCategories.forEach((catObj, catIndex) => {
            const translatedCat = currentLang === 'te' ? catObj.te : catObj.en;
            let articlesHTML = '';
            
            const catCustom = customArticles.filter(a => a.category === catObj.id);
            
            for (let i = 0; i < 4; i++) {
                let artTitle, artDesc, artImg, artTime, artLink;
                
                if (catCustom[i]) {
                    const ca = catCustom[i];
                    artTitle = currentLang === 'te' ? ca.title_te : ca.title_en;
                    artDesc = currentLang === 'te' ? ca.content_te : ca.content_en;
                    artImg = ca.image;
                    artTime = "Just now";
                    artLink = `article.html?id=${ca.id}`;
                } else {
                    const artStr = mockArticleStrings[currentLang];
                    artTitle = artStr.title.replace('[CAT]', translatedCat);
                    artDesc = artStr.desc;
                    artImg = getRandomImage(catIndex + i);
                    artTime = `${i + 1} ${artStr.time}`;
                    artLink = "article.html";
                }
                
                articlesHTML += `
                    <article class="news-card">
                        <div class="card-img">
                            <img src="${artImg}" alt="${translatedCat} News">
                        </div>
                        <div class="card-content">
                            <h3><a href="${artLink}">${artTitle}</a></h3>
                            <p>${artDesc.substring(0, 100)}...</p>
                            <div class="article-meta">
                                <i class="fa-regular fa-clock"></i> ${artTime}
                            </div>
                        </div>
                    </article>
                `;
            }

            categoriesHTML += `
                <div class="container category-section">
                    <div class="section-header">
                        <h2>${translatedCat}</h2>
                        <a href="category.html?cat=${catObj.id}" class="view-all">${translations[currentLang].view_all} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="news-grid">
                        ${articlesHTML}
                    </div>
                </div>
            `;
        });
        categoriesContainer.innerHTML = categoriesHTML;
    };

    let currentPage = 1;
    const articlesPerPage = 12;

    const renderCategoryPage = () => {
        const urlParams = new URLSearchParams(window.location.search);
        let categoryId = urlParams.get('cat');
        
        let catObj = dynamicCategories.find(c => c.id === categoryId);
        if (!catObj) {
            catObj = dynamicCategories[0]; // fallback
            categoryId = catObj.id;
        }

        const container = document.getElementById('category-articles-container');
        if (!container || document.getElementById('article-title')) return;

        const titleEl = document.getElementById('category-page-title');
        if (titleEl) {
            titleEl.textContent = currentLang === 'te' ? catObj.te : catObj.en;
        }

        const catCustom = customArticles.filter(a => a.category === categoryId);
        const mockCount = Math.max(0, 24 - catCustom.length);
        
        const articles = [];
        catCustom.forEach(c => articles.push({ isCustom: true, data: c }));
        for(let i=0; i<mockCount; i++) {
            articles.push({ isCustom: false, id: i });
        }

        const totalPages = Math.ceil(articles.length / articlesPerPage);
        const startIndex = (currentPage - 1) * articlesPerPage;
        const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

        const translatedCat = currentLang === 'te' ? catObj.te : catObj.en;
        const artStr = mockArticleStrings[currentLang];

        let articlesHTML = `<div class="news-grid">`;
        
        currentArticles.forEach((art, index) => {
            const actualIndex = startIndex + index;
            let artTitle, artDesc, artImg, artTime, artLink;
            
            if (art.isCustom) {
                const ca = art.data;
                artTitle = currentLang === 'te' ? ca.title_te : ca.title_en;
                artDesc = currentLang === 'te' ? ca.content_te : ca.content_en;
                artImg = ca.image;
                artTime = "Just now";
                artLink = `article.html?id=${ca.id}`;
            } else {
                artTitle = artStr.title.replace('[CAT]', translatedCat) + ` - Part ${actualIndex + 1}`;
                artDesc = artStr.desc;
                artImg = getRandomImage(actualIndex);
                artTime = `${(actualIndex % 24) + 1} ${artStr.time}`;
                artLink = "article.html";
            }

            articlesHTML += `
                <article class="news-card">
                    <div class="card-img">
                        <img src="${artImg}" alt="${translatedCat} News">
                    </div>
                    <div class="card-content">
                        <h3><a href="${artLink}">${artTitle}</a></h3>
                        <p>${artDesc.substring(0, 100)}...</p>
                        <div class="article-meta">
                            <i class="fa-regular fa-clock"></i> ${artTime}
                        </div>
                    </div>
                </article>
            `;
        });
        articlesHTML += `</div>`;
        
        const existingPagination = document.getElementById('pagination-container');
        container.innerHTML = articlesHTML;
        if(existingPagination) container.appendChild(existingPagination);

        renderSidebarWidgets(categoryId);

        const pagContainer = document.getElementById('pagination-container');
        if (pagContainer) {
            let pagHTML = '';
            
            pagHTML += `<button class="page-btn" id="prev-page" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
            
            for(let i=1; i<=totalPages; i++) {
                pagHTML += `<button class="page-btn ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }

            pagHTML += `<button class="page-btn" id="next-page" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
            
            pagContainer.innerHTML = pagHTML;

            document.getElementById('prev-page')?.addEventListener('click', () => {
                if(currentPage > 1) { currentPage--; renderCategoryPage(); window.scrollTo(0, 0); }
            });
            document.getElementById('next-page')?.addEventListener('click', () => {
                if(currentPage < totalPages) { currentPage++; renderCategoryPage(); window.scrollTo(0, 0); }
            });
            document.querySelectorAll('.page-btn[data-page]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    currentPage = parseInt(e.target.getAttribute('data-page'));
                    renderCategoryPage();
                    window.scrollTo(0, 0);
                });
            });
        }
    };

    const renderArticlePage = () => {
        const articleBodyContainer = document.getElementById('article-body');
        if (!articleBodyContainer) return; 

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        
        let customArticle = null;
        if (id) {
            customArticle = customArticles.find(a => a.id == id);
        }

        let categoryId = "technology"; 
        if (customArticle) categoryId = customArticle.category;

        let catObj = dynamicCategories.find(c => c.id === categoryId);
        if (!catObj) catObj = dynamicCategories[0];

        const translatedCat = currentLang === 'te' ? catObj.te : catObj.en;
        const artStr = mockArticleStrings[currentLang];
        
        let artTitle, artBody;
        let author = "Michael Chang";
        let dateStr = "May 8, 2026";
        let imgUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
        
        if (customArticle) {
            artTitle = currentLang === 'te' ? customArticle.title_te : customArticle.title_en;
            artBody = `<p style="white-space:pre-wrap;">${currentLang === 'te' ? customArticle.content_te : customArticle.content_en}</p>`;
            author = customArticle.author;
            const d = new Date(customArticle.date);
            dateStr = d.toLocaleDateString(currentLang === 'te' ? 'te-IN' : 'en-US', {month: 'short', day: 'numeric', year:'numeric'});
            imgUrl = customArticle.image;
        } else {
            artTitle = artStr.title.replace('[CAT]', translatedCat);
            artBody = `
                <p>${artStr.bodyPara1}</p>
                <p>${artStr.desc}</p>
                <h2>${translatedCat} ${currentLang === 'te' ? 'యొక్క భవిష్యత్తు' : 'Future Insights'}</h2>
                <blockquote>${artStr.bodyPara2}</blockquote>
                <p>${artStr.bodyPara3}</p>
            `;
        }

        document.getElementById('article-category').textContent = translatedCat;
        document.getElementById('article-title').textContent = artTitle;
        document.getElementById('article-author').textContent = author;
        document.getElementById('article-date').textContent = dateStr;
        document.getElementById('article-image').src = imgUrl;
        
        articleBodyContainer.innerHTML = artBody;

        const prevTitle = mockArticleStrings[currentLang].title.replace('[CAT]', currentLang === 'te' ? 'సైన్స్' : 'Science');
        const nextTitle = mockArticleStrings[currentLang].title.replace('[CAT]', currentLang === 'te' ? 'వ్యాపారం' : 'Business');
        
        document.getElementById('prev-title').textContent = prevTitle;
        document.getElementById('next-title').textContent = nextTitle;

        renderSidebarWidgets(categoryId);
    };

    const renderSidebarWidgets = (categoryId) => {
        let catObj = dynamicCategories.find(c => c.id === categoryId);
        if (!catObj) catObj = dynamicCategories[0];

        const translatedCat = currentLang === 'te' ? catObj.te : catObj.en;
        const artStr = mockArticleStrings[currentLang];
        const artTitle = artStr.title.replace('[CAT]', translatedCat);

        const popularList = document.getElementById('popular-posts-list');
        if (popularList) {
            let html = '';
            for(let i=0; i<4; i++) {
                html += `
                    <li>
                        <img src="${getRandomImage(i)}" alt="Popular">
                        <div class="list-content">
                            <h4><a href="article.html">${artTitle} - Trending</a></h4>
                            <div class="article-meta">${i+2} ${artStr.time}</div>
                        </div>
                    </li>
                `;
            }
            popularList.innerHTML = html;
        }

        const recommendedList = document.getElementById('recommended-posts-list');
        if (recommendedList) {
            let html = '';
            for(let i=2; i<6; i++) {
                html += `
                    <li>
                        <img src="${getRandomImage(i+4)}" alt="Recommended">
                        <div class="list-content">
                            <h4><a href="article.html">${artTitle} - Must Read</a></h4>
                            <div class="article-meta">${i+1} ${artStr.time}</div>
                        </div>
                    </li>
                `;
            }
            recommendedList.innerHTML = html;
        }
    };

    // --- Poll Logic ---
    const setupPolls = () => {
        const forms = document.querySelectorAll('.poll-form');
        
        forms.forEach(form => {
            const newForm = form.cloneNode(true);
            form.parentNode.replaceChild(newForm, form);
            
            newForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const selected = newForm.querySelector('input[name="poll"]:checked');
                if (!selected) {
                    alert(currentLang === 'te' ? 'దయచేసి ఒక ఎంపికను ఎంచుకోండి.' : 'Please select an option.');
                    return;
                }

                const totalVotes = 1245;
                const results = [
                    { value: 0, percentage: 65 },
                    { value: 1, percentage: 25 },
                    { value: 2, percentage: 10 }
                ];

                const resultsContainer = newForm.nextElementSibling;
                let resultsHTML = '';

                results.forEach(res => {
                    const optionKey = `poll_op${res.value + 1}`;
                    const label = translations[currentLang][optionKey];
                    resultsHTML += `
                        <div class="poll-result-bar-wrapper">
                            <div class="poll-result-label">
                                <span>${label}</span>
                                <span>${res.percentage}%</span>
                            </div>
                            <div class="poll-result-bar">
                                <div class="poll-result-fill" style="width: 0%"></div>
                            </div>
                        </div>
                    `;
                });

                resultsHTML += `<p style="font-size:0.8rem; color:var(--text-light); text-align:right; margin-top:10px;">${totalVotes} Votes</p>`;

                newForm.style.display = 'none';
                resultsContainer.style.display = 'block';
                resultsContainer.innerHTML = resultsHTML;

                setTimeout(() => {
                    const fills = resultsContainer.querySelectorAll('.poll-result-fill');
                    fills.forEach((fill, idx) => {
                        fill.style.width = `${results[idx].percentage}%`;
                    });
                }, 50);
            });
        });
    };

    const applyTranslations = () => {
        if (currentLang === 'te') {
            document.body.classList.add('lang-te');
        } else {
            document.body.classList.remove('lang-te');
        }

        renderLogo();
        renderNavMenu();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang][key]) {
                el.setAttribute('placeholder', translations[currentLang][key]);
            }
        });

        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const locale = currentLang === 'te' ? 'te-IN' : 'en-US';
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = new Date().toLocaleDateString(locale, options);
            dateElement.style.display = 'block';
        }

        renderSocialLinks();
        renderHeroSlider();
        renderHomePageCategories();
        
        if(document.getElementById('category-page-title')) {
            renderCategoryPage();
        }

        if(document.getElementById('article-body')) {
            renderArticlePage();
        }

        setupPolls();
    };

    applyTranslations();

    if (langSwitcher) {
        langSwitcher.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('siteLang', currentLang);
            applyTranslations();
        });
    }

    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show-mobile-menu');
        });
    }
});
