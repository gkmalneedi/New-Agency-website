document.addEventListener('DOMContentLoaded', () => {
    // Nav logic
    document.querySelectorAll('.admin-nav a[data-target]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.admin-nav a').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
            link.classList.add('active');
            document.getElementById(link.getAttribute('data-target')).classList.add('active');
        });
    });

    const logoTypeSelect = document.getElementById('set-logo-type');
    logoTypeSelect.addEventListener('change', (e) => {
        if(e.target.value === 'image') {
            document.getElementById('logo-img-group').style.display = 'block';
            document.getElementById('logo-text-group').style.display = 'none';
        } else {
            document.getElementById('logo-img-group').style.display = 'none';
            document.getElementById('logo-text-group').style.display = 'flex';
        }
    });

    const initDB = () => {
        if (!localStorage.getItem('pulse_db')) {
            const db = {
                settings: {
                    logo_type: "text",
                    logo_img: "",
                    logo_en: "The Daily Pulse.",
                    logo_te: "ది డైలీ పల్స్.",
                    footer_en: "Delivering accurate, timely, and impactful news from around the globe. Stay informed with our award-winning journalism.",
                    footer_te: "ప్రపంచవ్యాప్తంగా కచ్చితమైన, సమయానుకూలమైన వార్తలను అందిస్తున్నాము. మా అవార్డు గెలుచుకున్న జర్నలిజంతో ఎప్పటికప్పుడు అప్‌డేట్ గా ఉండండి.",
                    social: {
                        facebook: "#",
                        twitter: "#",
                        instagram: "#",
                        youtube: "#",
                        linkedin: "#"
                    }
                },
                categories: [
                    { id: "world", en: "World", te: "ప్రపంచం" },
                    { id: "politics", en: "Politics", te: "రాజకీయం" },
                    { id: "business", en: "Business", te: "వ్యాపారం" },
                    { id: "technology", en: "Technology", te: "సాంకేతికం" },
                    { id: "science", en: "Science", te: "సైన్స్" },
                    { id: "health", en: "Health", te: "ఆరోగ్యం" },
                    { id: "sports", en: "Sports", te: "క్రీడలు" },
                    { id: "entertainment", en: "Entertainment", te: "వినోదం" }
                ],
                hero: [
                    { id: 1, category: "world", title_en: "Global Summit Reaches Historic Agreement on Climate Action", title_te: "వాతావరణ మార్పులపై చారిత్రాత్మక ఒప్పందానికి ప్రపంచ శిఖరాగ్ర సమావేశం", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop", author: "Sarah Jenkins" },
                    { id: 2, category: "technology", title_en: "Next-Gen AI Models Unveiled: A Paradigm Shift in Computing", title_te: "నెక్స్ట్-జెన్ AI మోడల్స్ ఆవిష్కరణ: కంప్యూటింగ్ లో పెను మార్పులు", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", author: "Michael Chang" }
                ],
                articles: []
            };
            localStorage.setItem('pulse_db', JSON.stringify(db));
        }
    };
    initDB();

    const getDB = () => JSON.parse(localStorage.getItem('pulse_db'));
    const saveDB = (db) => {
        localStorage.setItem('pulse_db', JSON.stringify(db));
        alert("Saved successfully!");
        loadData();
    };

    // Load Data into Forms
    const loadData = () => {
        const db = getDB();
        
        // Settings
        document.getElementById('set-logo-type').value = db.settings.logo_type || 'text';
        document.getElementById('set-logo-type').dispatchEvent(new Event('change'));
        document.getElementById('set-logo-img').value = db.settings.logo_img || '';
        document.getElementById('set-logo-en').value = db.settings.logo_en;
        document.getElementById('set-logo-te').value = db.settings.logo_te;
        document.getElementById('set-footer-en').value = db.settings.footer_en;
        document.getElementById('set-footer-te').value = db.settings.footer_te;

        // Social Links
        const soc = db.settings.social || {};
        document.getElementById('soc-facebook').value = soc.facebook || '#';
        document.getElementById('soc-twitter').value = soc.twitter || '#';
        document.getElementById('soc-instagram').value = soc.instagram || '#';
        document.getElementById('soc-youtube').value = soc.youtube || '#';
        document.getElementById('soc-linkedin').value = soc.linkedin || '#';

        // Categories Map
        const catMap = {};
        db.categories.forEach(c => catMap[c.id] = c.en);

        // Populate Category Dropdowns
        const catSelects = document.querySelectorAll('.dynamic-cat-select');
        let optionsHTML = '';
        db.categories.forEach(c => {
            optionsHTML += `<option value="${c.id}">${c.en} / ${c.te}</option>`;
        });
        catSelects.forEach(select => select.innerHTML = optionsHTML);

        // Render Categories List
        const categoryList = document.getElementById('category-list');
        categoryList.innerHTML = db.categories.map((c, i) => `
            <div class="data-item">
                <div class="data-item-details">
                    <strong>${c.en}</strong>
                    <span>ID: ${c.id} | Telugu: ${c.te}</span>
                </div>
                <button class="btn btn-danger" onclick="deleteCategory(${i})">Delete</button>
            </div>
        `).join('');

        const heroList = document.getElementById('hero-list');
        heroList.innerHTML = db.hero.map((h, i) => `
            <div class="data-item">
                <div class="data-item-details">
                    <strong>${h.title_en}</strong>
                    <span>Cat: ${catMap[h.category] || h.category} | ${h.author}</span>
                </div>
                <button class="btn btn-danger" onclick="deleteHero(${i})">Delete</button>
            </div>
        `).join('');

        const articleList = document.getElementById('article-list');
        articleList.innerHTML = db.articles.map((a, i) => `
            <div class="data-item">
                <div class="data-item-details">
                    <strong>${a.title_en}</strong>
                    <span>Cat: ${catMap[a.category] || a.category} | ${a.author}</span>
                </div>
                <button class="btn btn-danger" onclick="deleteArticle(${i})">Delete</button>
            </div>
        `).join('');
    };

    window.deleteCategory = (index) => {
        const db = getDB();
        db.categories.splice(index, 1);
        saveDB(db);
    };

    window.deleteHero = (index) => {
        const db = getDB();
        db.hero.splice(index, 1);
        saveDB(db);
    };

    window.deleteArticle = (index) => {
        const db = getDB();
        db.articles.splice(index, 1);
        saveDB(db);
    };

    document.getElementById('form-settings').addEventListener('submit', (e) => {
        e.preventDefault();
        const db = getDB();
        db.settings.logo_type = document.getElementById('set-logo-type').value;
        db.settings.logo_img = document.getElementById('set-logo-img').value;
        db.settings.logo_en = document.getElementById('set-logo-en').value;
        db.settings.logo_te = document.getElementById('set-logo-te').value;
        db.settings.footer_en = document.getElementById('set-footer-en').value;
        db.settings.footer_te = document.getElementById('set-footer-te').value;
        saveDB(db);
    });

    document.getElementById('form-social').addEventListener('submit', (e) => {
        e.preventDefault();
        const db = getDB();
        db.settings.social = {
            facebook: document.getElementById('soc-facebook').value,
            twitter: document.getElementById('soc-twitter').value,
            instagram: document.getElementById('soc-instagram').value,
            youtube: document.getElementById('soc-youtube').value,
            linkedin: document.getElementById('soc-linkedin').value
        };
        saveDB(db);
    });

    document.getElementById('form-category').addEventListener('submit', (e) => {
        e.preventDefault();
        const db = getDB();
        const id = document.getElementById('cat-id').value.toLowerCase().replace(/[^a-z0-9]/g, '');
        // check if exists
        if(db.categories.find(c => c.id === id)) {
            alert('Category ID already exists!');
            return;
        }
        db.categories.push({
            id: id,
            en: document.getElementById('cat-en').value,
            te: document.getElementById('cat-te').value
        });
        saveDB(db);
        e.target.reset();
    });

    document.getElementById('form-hero').addEventListener('submit', (e) => {
        e.preventDefault();
        const db = getDB();
        db.hero.push({
            id: Date.now(),
            title_en: document.getElementById('hero-title-en').value,
            title_te: document.getElementById('hero-title-te').value,
            category: document.getElementById('hero-category').value,
            author: document.getElementById('hero-author').value,
            image: document.getElementById('hero-image').value
        });
        saveDB(db);
        e.target.reset();
    });

    document.getElementById('form-article').addEventListener('submit', (e) => {
        e.preventDefault();
        const db = getDB();
        db.articles.unshift({
            id: Date.now(),
            title_en: document.getElementById('art-title-en').value,
            title_te: document.getElementById('art-title-te').value,
            content_en: document.getElementById('art-content-en').value,
            content_te: document.getElementById('art-content-te').value,
            category: document.getElementById('art-category').value,
            author: document.getElementById('art-author').value,
            image: document.getElementById('art-image').value,
            date: new Date().toISOString()
        });
        saveDB(db);
        e.target.reset();
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
        if(confirm("Are you sure? This will delete all custom data!")) {
            localStorage.removeItem('pulse_db');
            initDB();
            loadData();
            alert("Database reset.");
        }
    });

    loadData();
});
