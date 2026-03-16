// Initialize Swiper for Hero Section
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Reveal animations on scroll
const sections = document.querySelectorAll('section, .service-card, .testi-card, .award-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    if(!section.classList.contains('hero')) {
        section.style.opacity = 0;
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(section);
    }
});

// Adding hover floating animation dynamic logic for cards maybe
document.querySelectorAll('.glass').forEach(card => {
    card.addEventListener('mousemove', e => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// SPA Routing Logic
const pageData = {
    'page-marketing-automation': {
        title: 'Marketing Automation',
        subtitle: 'Automate efficiently.',
        desc: 'We\'ve helped over 200 clients scale their workflow, stripping out hours of manual labor by creating deeply connected AI agent chains that run your marketing backend effectively 24/7.',
        stats: [{v: '200+', l: 'Clients Scaled'}, {v: '10,000+', l: 'Hours Saved'}, {v: '300%', l: 'ROI Increase'}]
    },
    'page-sem': {
        title: 'Search Engine Marketing',
        subtitle: 'Drive targeted visibility.',
        desc: 'Through highly detailed keyword manipulation and cost optimization loops, we ensure that every ad dollar goes towards absolute conversion potential.',
        stats: [{v: '$5M+', l: 'Ad Spend'}, {v: '45%', l: 'Lowered CPA'}, {v: '5M+', l: 'Clicks Generated'}]
    },
    'page-smm': {
        title: 'Social Media Marketing',
        subtitle: 'Engage your audience.',
        desc: 'We build dynamic brand communities. Our algorithmic posting logic hits exactly when your demographic is active.',
        stats: [{v: '10M+', l: 'Followers Gained'}, {v: '12%', l: 'Engagement Rate'}, {v: '500+', l: 'Campaigns Run'}]
    },
    'page-smo': {
        title: 'Social Media Optimization',
        subtitle: 'Maximize organic reach.',
        desc: 'Perfectly configured bios, link-trees, grids, and metadata structures layout the foundation for incredible organic growth without paid ads.',
        stats: [{v: '80+', l: 'Brands Optimized'}, {v: '200%', l: 'Profile Views'}, {v: '90%', l: 'Click-through'}]
    },
    'page-seo': {
        title: 'Search Engine Optimization',
        subtitle: 'Dominate the search results.',
        desc: 'Leveraging programmatic SEO scaling, we mass-publish incredibly relevant articles that capture millions of search volume intents.',
        stats: [{v: '#1', l: 'Google Rankings'}, {v: '450%', l: 'Traffic Gen'}, {v: '100K', l: 'Backlinks Built'}]
    },
    'page-whatsapp': {
        title: 'WhatsApp Marketing',
        subtitle: 'Direct mobile chat sales.',
        desc: 'Running robust chatbots and conversational closing models globally to turn cold leads into buyers via simple chat dynamics.',
        stats: [{v: '85%', l: 'Open Rate'}, {v: '30%', l: 'Conversion Rate'}, {v: '10M+', l: 'Messages Sent'}]
    },
    'page-email': {
        title: 'Email Marketing',
        subtitle: 'Automate direct revenue.',
        desc: 'High conversion lifecycle marketing funnels that onboard, nurture, and extract LTV from previously dead lists.',
        stats: [{v: '50%', l: 'Average Open'}, {v: '15%', l: 'CTR'}, {v: '$2M+', l: 'Drip Revenue'}]
    },
    'page-content': {
        title: 'Content Marketing',
        subtitle: 'Communicate your value.',
        desc: 'We deploy AI creative hubs that generate deeply emotional brand stories mixed with SEO optimization logic.',
        stats: [{v: '1,000+', l: 'Articles Written'}, {v: '10M', l: 'Readers Reached'}, {v: 'Top 1%', l: 'Quality Score'}]
    },
    'page-brand': {
        title: 'Brand Management',
        subtitle: 'Curate a premium identity.',
        desc: 'Digital footprint tracking, sentiment analysis, and continuous reputation management frameworks applied globally.',
        stats: [{v: 'Zero', l: 'PR Crises'}, {v: '98%', l: 'Positive sentiment'}, {v: '50+', l: 'Rebrands'}]
    },
    'page-uiux': {
        title: 'UI/UX Design',
        subtitle: 'Build converting interfaces.',
        desc: 'Every micro-interaction is tracked. We develop beautiful, dev21st glassmorphic aesthetics engineered specifically to drop bounce rates.',
        stats: [{v: '25%', l: 'Lower Bounce'}, {v: '40%', l: 'Higher Funnel Gen'}, {v: '100+', l: 'Pages Built'}]
    },
    'page-video': {
        title: 'Video Production',
        subtitle: 'Capture visual attention.',
        desc: 'Delivering hyper-optimized shorts, TikTok edits, and VSLs that instantly grab attention inside the first 3 seconds.',
        stats: [{v: '500M+', l: 'Video Views'}, {v: '2M+', l: 'Shares'}, {v: '1K+', l: 'Assets Made'}]
    },
    'page-ecommerce': {
        title: 'Ecommerce Industry',
        subtitle: 'Scaling digital stores exponentially.',
        desc: 'Our autonomous systems handle dynamic catalog remarketing, reducing cart abandonment across top retail clients by targeting buying triggers instantly.',
        stats: [{v: '$100M', l: 'Client Revenue'}, {v: '3.2x', l: 'Average ROAS'}, {v: '150+', l: 'Stores Scaled'}]
    },
    'page-agriculture': {
        title: 'Agriculture Sector',
        subtitle: 'Connecting ag-tech to global markets.',
        desc: 'We\'ve bridged traditional farming conglomerates and ag-tech startups to key global buyers through deeply segmented B2B campaigns.',
        stats: [{v: '50+', l: 'Agri-Partners'}, {v: '200%', l: 'Lead Increase'}, {v: '$50M', l: 'B2B Deals'}]
    },
    'page-healthcare': {
        title: 'Healthcare Providers',
        subtitle: 'HIPAA-compliant growth.',
        desc: 'We carefully scale patient intakes for specialized care centers using local-SEO dominance and empathetic brand management.',
        stats: [{v: '1M+', l: 'Patients Reached'}, {v: '80%', l: 'Local Visibility'}, {v: '30+', l: 'Clinics Grown'}]
    },
    'page-it': {
        title: 'Information Technology',
        subtitle: 'Scaling SaaS and Enterprise Software.',
        desc: 'Engineering ultra-focused multi-touch attribution campaigns specifically designed for long-cycle enterprise B2B sales.',
        stats: [{v: '$25M+', l: 'SaaS ARR Gen'}, {v: '150', l: 'Enterprise Leads'}, {v: '3M', l: 'Developers Engaged'}]
    },
    'page-education': {
        title: 'Education Sector',
        subtitle: 'Increasing campus & virtual enrollments.',
        desc: 'We utilize video and localized SEO to maximize engagement with prospective students and drive enrollment applications.',
        stats: [{v: '50,000+', l: 'New Enrollments'}, {v: '12', l: 'Universities'}, {v: '35%', l: 'Decreased CPA'}]
    },
    'page-hospitality': {
        title: 'Hospitality Industry',
        subtitle: 'Max booking occupancy.',
        desc: 'Visually driven lifestyle campaigns aimed directly at high-ticket travelers ensuring peak seasonal sellouts for global hotel chains.',
        stats: [{v: '98%', l: 'Occupancy Hit'}, {v: '300%', l: 'Direct Bookings'}, {v: '40+', l: 'Resorts'}]
    },
    'page-real-estate': {
        title: 'Real Estate',
        subtitle: 'Acquiring serious buyers and sellers.',
        desc: 'Using geo-fencing and hyper-localized targeting, we connect luxury realtors with massive pools of high-intent clients.',
        stats: [{v: '$1B+', l: 'In Property Sold'}, {v: '10K+', l: 'Qualified Leads'}, {v: '25', l: 'Brokerages'}]
    },
    'page-fmcg': {
        title: 'FMCG Sector',
        subtitle: 'Mass market infiltration.',
        desc: 'Creating widespread consumer awareness utilizing micro-influencer algorithmic mapping to capture local store-shelf demand.',
        stats: [{v: '20M', l: 'Unit Sales Influenced'}, {v: '300%', l: 'Brand mentions'}, {v: '15', l: 'Global Brands'}]
    },
    'page-retail': {
        title: 'Retail Sector',
        subtitle: 'Omnichannel retail presence.',
        desc: 'Synchronizing point-of-sale physical action with digital loyalty and geo-targeted proximity ads to drive footfall.',
        stats: [{v: '1.5M+', l: 'Footfalls Tracked'}, {v: '40%', l: 'Loyalty uptake'}, {v: '60+', l: 'Stores'}]
    },
    'page-fintech': {
        title: 'Fintech Industry',
        subtitle: 'Driving app downloads and trust.',
        desc: 'Acquiring users for heavily regulated crypto and traditional banking apps using compliant, credibility-driven search intent campaigns.',
        stats: [{v: '5M+', l: 'App Installs'}, {v: '$2.50', l: 'CAC Target'}, {v: '20', l: 'Apps Scaled'}]
    }
};

const homeView = document.getElementById('home-view');
const dynamicView = document.getElementById('dynamic-view');
const dynTitle = document.getElementById('dyn-title');
const dynSubtitle = document.getElementById('dyn-subtitle');
const dynContainer = document.getElementById('dyn-content-container');

function switchPage() {
    let hash = window.location.hash;
    
    if (hash.startsWith('#page-')) {
        // Hide home
        homeView.style.display = 'none';
        dynamicView.style.display = 'block';
        window.scrollTo(0, 0);

        let pageKey = hash.substring(1); // remove #
        dynContainer.innerHTML = '';
        
        if(pageKey === 'page-about') {
            dynTitle.innerText = "About AgentIQ";
            dynSubtitle.innerText = "Redefining Digital Scale with AI";
            dynContainer.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 40px;">
                    
                    <!-- Intro & Stats -->
                    <!-- Intro & Infographic -->
                    <div class="about-content" style="text-align: left; background: #ffffff; backdrop-filter: blur(16px); padding: 50px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); display: flex; gap: 40px; align-items: center; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 300px;">
                            <h3 style="font-size: 32px; color: var(--text-color); margin-bottom: 20px;">Redefining Digital Scale with AI</h3>
                            <p style="font-size: 18px; color: #6b7280; line-height: 1.8; margin-bottom: 20px;">AgentIQ was founded on the belief that manual digital marketing is a relic of the past. By leveraging sophisticated, autonomous agentic AI models, we are able to analyze, predict, and execute vast marketing campaigns with 100% efficiency and zero human bottlenecks.</p>
                            <p style="font-size: 18px; color: #6b7280; line-height: 1.8;">Our commitment to maximum ROI ensures that every dollar spent is algorithmically engineered to multiply. We integrate directly into your operations to drive unseen growth metrics.</p>
                        </div>
                        <div style="flex: 1; min-width: 300px; text-align: center; position: relative;">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" style="width: 100%; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);" alt="Infographic representing AI Marketing Data">
                            <div style="position: absolute; bottom: -20px; left: -20px; background: rgba(0,0,0,0.7); backdrop-filter: blur(10px); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color);">
                                <h4 style="color: #f09433; font-size: 24px; font-weight: 800;">100%</h4>
                                <p style="font-size: 12px; color: #9ca3af;">Efficiency Achieved</p>
                            </div>
                        </div>
                    </div>

                    <!-- Mission & Vision -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                        <div class="glass" style="padding: 40px; text-align: center;">
                            <i class="fas fa-rocket" style="font-size: 40px; color: #f09433; margin-bottom: 20px;"></i>
                            <h3 style="font-size: 26px; color: var(--text-color); margin-bottom: 15px;">Our Mission</h3>
                            <p style="font-size: 16px; color: #6b7280; line-height: 1.8;">Empower businesses with AI-driven marketing that turns data into powerful insights, fuels growth, and redefines customer engagement for the digital age.</p>
                        </div>
                        <div class="glass" style="padding: 40px; text-align: center;">
                            <i class="fas fa-eye" style="font-size: 40px; color: #bc1888; margin-bottom: 20px;"></i>
                            <h3 style="font-size: 26px; color: var(--text-color); margin-bottom: 15px;">Our Vision</h3>
                            <p style="font-size: 16px; color: #6b7280; line-height: 1.8;">Lead the future of digital marketing with AI, making AgentIQ the go-to for innovation, growth, and game-changing strategies globally.</p>
                        </div>
                    </div>

                    <!-- Strategic Approach -->
                    <div class="glass" style="padding: 50px;">
                        <h3 style="font-size: 32px; color: var(--text-color); margin-bottom: 15px; text-align: center;">Our Strategic Approach To Your Success</h3>
                        <p style="font-size: 16px; color: #6b7280; line-height: 1.8; text-align: center; margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto;">With a true understanding of what's now and what's next in digital, we follow a strategic AI approach to ensure your digital success. Here's how we do it:</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                            <div style="background: rgba(0,0,0,0.2); padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
                                <i class="fas fa-search-chart" style="font-size: 30px; color: #dc2743; margin-bottom: 15px;"></i>
                                <h4 style="font-size: 20px; color: var(--text-color); margin-bottom: 10px;">Analysis & Insights</h4>
                                <p style="font-size: 15px; color: #6b7280; line-height: 1.6;">Conduct in-depth AI-powered analysis to understand your audience's behavior and precise preferences.</p>
                            </div>
                            <div style="background: rgba(0,0,0,0.2); padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
                                <i class="fas fa-crosshairs" style="font-size: 30px; color: #f09433; margin-bottom: 15px;"></i>
                                <h4 style="font-size: 20px; color: var(--text-color); margin-bottom: 10px;">Precise Targeting</h4>
                                <p style="font-size: 15px; color: #6b7280; line-height: 1.6;">Leverage machine learning algorithms to target the exact right audience at the perfect time for maximum engagement.</p>
                            </div>
                            <div style="background: rgba(0,0,0,0.2); padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
                                <i class="fas fa-pencil-ruler" style="font-size: 30px; color: #bc1888; margin-bottom: 15px;"></i>
                                <h4 style="font-size: 20px; color: var(--text-color); margin-bottom: 10px;">Personalized Content</h4>
                                <p style="font-size: 15px; color: #6b7280; line-height: 1.6;">Blend human creativity and AI to create hyper-personalized dynamic content that resonates instantly.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Our Thriving Client Community -->
                    <div style="padding: 50px 0;">
                        <h3 style="font-size: 32px; color: var(--text-color); margin-bottom: 15px; text-align: center;">Our Thriving Client Community</h3>
                        <p style="font-size: 16px; color: #6b7280; line-height: 1.8; text-align: center; margin-bottom: 40px; max-width: 800px; margin-left: auto; margin-right: auto;">We are so obsessed with our clients' success that nothing makes us happier than seeing them on top of their game. This obsession helps us cultivate a growing community of contented and loyal clients.</p>
                        
                        <div class="floating-client-grid">
                            <div class="floating-client"><i class="fas fa-microchip"></i> <span>A2H Tech</span></div>
                            <div class="floating-client"><i class="fas fa-egg"></i> <span>ABHI EGGS</span></div>
                            <div class="floating-client"><i class="fas fa-desktop"></i> <span>ADNEVAR</span></div>
                            <div class="floating-client"><i class="fas fa-infinity"></i> <span>Blend</span></div>
                            <div class="floating-client"><i class="fas fa-cloud-shield-alt"></i> <span>CipherCloud</span></div>
                            <div class="floating-client"><i class="fas fa-gem"></i> <span>Sparkle</span></div>
                            <div class="floating-client"><i class="fas fa-balance-scale"></i> <span>FAIRAIGLE</span></div>
                            <div class="floating-client"><i class="fas fa-camera"></i> <span>FabPik</span></div>
                            <div class="floating-client"><i class="fas fa-door-open"></i> <span>EUROART</span></div>
                            <div class="floating-client"><i class="fas fa-bolt"></i> <span>EBUTOR</span></div>
                        </div>
                    </div>

                    <!-- The Numbers That Illustrate Our Impact -->
                    <div class="glass" style="padding: 50px;">
                        <h3 style="font-size: 32px; color: var(--text-color); margin-bottom: 15px; text-align: center;">The Numbers That Illustrate Our Impact — Loud & Clear</h3>
                        <p style="font-size: 16px; color: #6b7280; line-height: 1.8; text-align: center; margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto;">We believe in transparency and results. Our track record speaks for itself across global industries.</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center;">
                            <div style="padding: 30px; background: rgba(0,0,0,0.3); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
                                <h2 style="color: #f09433; font-size: 45px; margin-bottom: 5px; font-weight: 800;">$500M+</h2>
                                <p style="font-size: 15px; color: #9ca3af;">Revenue Generated</p>
                            </div>
                            <div style="padding: 30px; background: rgba(0,0,0,0.3); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
                                <h2 style="color: #dc2743; font-size: 45px; margin-bottom: 5px; font-weight: 800;">700+</h2>
                                <p style="font-size: 15px; color: #9ca3af;">Global Clients</p>
                            </div>
                            <div style="padding: 30px; background: rgba(0,0,0,0.3); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
                                <h2 style="color: #bc1888; font-size: 45px; margin-bottom: 5px; font-weight: 800;">99%</h2>
                                <p style="font-size: 15px; color: #9ca3af;">Client Retention</p>
                            </div>
                            <div style="padding: 30px; background: rgba(0,0,0,0.3); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
                                <h2 style="color: #4a6bff; font-size: 45px; margin-bottom: 5px; font-weight: 800;">10x</h2>
                                <p style="font-size: 15px; color: #9ca3af;">Average ROI</p>
                            </div>
                        </div>
                    </div>

                    <!-- Company Journey -->
                    <div class="glass" style="padding: 50px; overflow: hidden; position: relative;">
                        <div style="position: absolute; top:0; right:0; opacity: 0.05; pointer-events: none;">
                            <i class="fas fa-network-wired" style="font-size: 300px;"></i>
                        </div>
                        <h3 style="font-size: 32px; color: var(--text-color); margin-bottom: 15px; text-align: center;">Our Journey</h3>
                        <p style="font-size: 16px; color: #6b7280; line-height: 1.8; text-align: center; margin-bottom: 50px;">From humble beginnings to an AI-powered global marketing powerhouse.</p>
                        
                        <div style="position: relative; max-width: 800px; margin: 0 auto;">
                            <!-- Vertical Line -->
                            <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: var(--ig-grad); transform: translateX(-50%); border-radius: 4px;"></div>
                            
                            <!-- 2017 -->
                            <div style="display: flex; justify-content: flex-end; padding-right: 50%; margin-bottom: 40px; position: relative;">
                                <div style="position: absolute; right: -12px; top: 10px; width: 24px; height: 24px; background: #000; border-radius: 50%; z-index: 2; border: 4px solid #f09433;"></div>
                                <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); width: 80%; text-align: right; margin-right: 40px;">
                                    <h4 style="color: #f09433; font-size: 24px; font-weight: 800; margin-bottom: 5px;">2017</h4>
                                    <h5 style="color: var(--text-color); font-size: 18px; margin-bottom: 10px;">The Inception</h5>
                                    <p style="color: #6b7280; font-size: 14px;">Founded by Arjun V. with a vision to automate tedious digital processes and leverage data-driven marketing.</p>
                                </div>
                            </div>

                            <!-- 2020 -->
                            <div style="display: flex; justify-content: flex-start; padding-left: 50%; margin-bottom: 40px; position: relative;">
                                <div style="position: absolute; left: -12px; top: 10px; width: 24px; height: 24px; background: #000; border-radius: 50%; z-index: 2; border: 4px solid #dc2743;"></div>
                                <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); width: 80%; text-align: left; margin-left: 40px;">
                                    <h4 style="color: #dc2743; font-size: 24px; font-weight: 800; margin-bottom: 5px;">2020</h4>
                                    <h5 style="color: var(--text-color); font-size: 18px; margin-bottom: 10px;">Scaling Globally</h5>
                                    <p style="color: #6b7280; font-size: 14px;">Expanded our client base to over 200 international brands, introducing programmatic SEO and sophisticated funnel structures.</p>
                                </div>
                            </div>

                            <!-- 2023 -->
                            <div style="display: flex; justify-content: flex-end; padding-right: 50%; margin-bottom: 40px; position: relative;">
                                <div style="position: absolute; right: -12px; top: 10px; width: 24px; height: 24px; background: #000; border-radius: 50%; z-index: 2; border: 4px solid #bc1888;"></div>
                                <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); width: 80%; text-align: right; margin-right: 40px;">
                                    <h4 style="color: #bc1888; font-size: 24px; font-weight: 800; margin-bottom: 5px;">2023</h4>
                                    <h5 style="color: var(--text-color); font-size: 18px; margin-bottom: 10px;">The AI Pivot</h5>
                                    <p style="color: #6b7280; font-size: 14px;">Integrated machine learning algorithms and established our proprietary autonomous campaign engine.</p>
                                </div>
                            </div>

                            <!-- 2026 -->
                            <div style="display: flex; justify-content: flex-start; padding-left: 50%; margin-bottom: 0px; position: relative;">
                                <div style="position: absolute; left: -12px; top: 10px; width: 24px; height: 24px; background: #000; border-radius: 50%; z-index: 2; border: 4px solid #4a6bff;"></div>
                                <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); width: 80%; text-align: left; margin-left: 40px;">
                                    <h4 style="color: #4a6bff; font-size: 24px; font-weight: 800; margin-bottom: 5px;">2026</h4>
                                    <h5 style="color: var(--text-color); font-size: 18px; margin-bottom: 10px;">Market Leaders</h5>
                                    <p style="color: #6b7280; font-size: 14px;">Recognized as a premier AI digital marketing agency, deploying full agentic operations and managing $10M+ in ad spend efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- FAQs -->
                    <div class="glass" style="padding: 50px;">
                        <h3 style="font-size: 32px; color: var(--text-color); margin-bottom: 15px; text-align: center;">Frequently Asked Questions</h3>
                        <p style="font-size: 16px; color: #6b7280; line-height: 1.8; text-align: center; margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto;">Everything you need to know about our AI-driven marketing approach.</p>
                        
                        <div style="display: flex; flex-direction: column; gap: 15px; max-width: 800px; margin: 0 auto; text-align: left;">
                            <details style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; cursor: pointer;">
                                <summary style="font-size: 20px; color: var(--text-color); outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 500;">
                                    What is AI-powered digital marketing?
                                </summary>
                                <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">AI-powered digital marketing uses artificial intelligence to improve and automate marketing tasks. Technologies like machine learning and data analytics help marketers understand customer behaviour, personalize content, optimize campaigns, and make better decisions instantly.</p>
                            </details>
                            
                            <details style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; cursor: pointer;">
                                <summary style="font-size: 20px; color: var(--text-color); outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 500;">
                                    How effective is AI in improving customer targeting?
                                </summary>
                                <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">AI can significantly improve customer targeting and personalization by analyzing large datasets to identify patterns and preferences, enabling perfectly accurate audience segmentation and tailored marketing messages at scale.</p>
                            </details>

                            <details style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; cursor: pointer;">
                                <summary style="font-size: 20px; color: var(--text-color); outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 500;">
                                    What are the most common AI tools used?
                                </summary>
                                <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">Our core engine combines predictive analytics platforms, conversational AI chatbots, dynamic content generation arrays, and highly complex automated ad buying scripts tailored specifically to each platform algorithm.</p>
                            </details>

                            <details style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; cursor: pointer;">
                                <summary style="font-size: 20px; color: var(--text-color); outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 500;">
                                    How do you measure the success of AI campaigns?
                                </summary>
                                <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">Success is measured directly through real-time dashboards mapping exact KPIs: Return on Ad Spend (ROAS), lowered Cost Per Acquisition (CPA), conversion rates, and raw revenue gains.</p>
                            </details>
                        </div>
                    </div>

                </div>
            `;
        } else if(pageKey === 'page-team') {
            dynTitle.innerText = "Meet the Experts";
            dynSubtitle.innerText = "The brilliant minds behind AgentIQ building the future framework of digital marketing optimization.";
            dynContainer.innerHTML = `
                <div class="team-grid">
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-user-tie"></i></div>
                        <h3>Arjun V.</h3><h4>Founder & CEO</h4>
                        <p>Pioneering the strategic AI shift in digital performance with 15+ years of scale experience.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-microchip"></i></div>
                        <h3>Sarah M.</h3><h4>Chief Technology Officer</h4>
                        <p>Architect behind our proprietary machine learning logic and autonomous campaign engine.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-lightbulb"></i></div>
                        <h3>Elena R.</h3><h4>Chief Marketing Officer</h4>
                        <p>Driving core branding philosophy and high-yield operational tactics for global outreach.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-brain"></i></div>
                        <h3>David K.</h3><h4>Lead Data Scientist</h4>
                        <p>Turning millions of data points into perfectly predicted ROAS optimizations in real-time.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-palette"></i></div>
                        <h3>Mia L.</h3><h4>Creative Director</h4>
                        <p>Ensuring visual aesthetics and ad content deeply resonate with hyper-targeted demographics.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-chart-line"></i></div>
                        <h3>Omar T.</h3><h4>Lead SEO Specialist</h4>
                        <p>Dominating search engine results pages through complex technical metadata manipulation.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-hashtag"></i></div>
                        <h3>Jessica C.</h3><h4>Social Media Director</h4>
                        <p>Managing large scale community engagement and viral algorithm strategies across platforms.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-object-group"></i></div>
                        <h3>James W.</h3><h4>Lead UI/UX Designer</h4>
                        <p>Engineering psychological UI flows that transform traffic into instant conversions.</p>
                    </div>
                    <div class="team-card glass">
                        <div class="team-avatar"><i class="fas fa-handshake"></i></div>
                        <h3>Priya S.</h3><h4>Client Success Manager</h4>
                        <p>Translating technical AI metrics to stakeholders to ensure absolute enterprise satisfaction.</p>
                    </div>
                </div>
            `;
        } else if(pageData[pageKey]) {
            let d = pageData[pageKey];
            dynTitle.innerText = d.title;
            dynSubtitle.innerText = "";
            
            const sectorKeys = ['page-ecommerce', 'page-agriculture', 'page-healthcare', 'page-it', 'page-education', 'page-hospitality', 'page-real-estate', 'page-fmcg', 'page-retail', 'page-fintech'];
            const isSector = sectorKeys.includes(pageKey);
            const colors = ['#f09433', '#dc2743', '#bc1888'];
            
            if (isSector) {
                // Sector Layout (Matching Miraki Digital style blocks)
                let html = `
                    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px;">
                        
                        <!-- Hero Section -->
                        <div class="glass" style="padding: 60px; border-radius: 24px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap;">
                            <div style="flex: 1; min-width: 300px; position: relative; z-index: 2;">
                                <div style="display: inline-block; padding: 6px 16px; background: rgba(240,148,51,0.1); border: 1px solid rgba(240,148,51,0.3); color: #f09433; border-radius: 20px; font-size: 14px; margin-bottom: 20px; font-weight: 600;">INDUSTRY SOLUTIONS</div>
                                <h1 style="font-size: 48px; color: #ffffff; line-height: 1.2; margin-bottom: 20px; font-weight: 800;">Digital Marketing for <span style="background: var(--ig-grad); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">${d.title.replace(' Sector', '').replace(' Industry', '')}</span></h1>
                                <p style="font-size: 18px; color: #9ca3af; line-height: 1.6; margin-bottom: 30px;">${d.desc}</p>
                                <a href="#contact" onclick="window.scrollTo(0,0)" class="btn-gradient" style="padding: 15px 35px; font-size: 16px; display: inline-block;">Grow Your Business <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
                            </div>
                            <div style="flex: 1; min-width: 300px; height: 350px; background-image: url('https://source.unsplash.com/random/800x600?${d.title.split(' ')[0]},business'); background-size: cover; background-position: center; border-radius: 16px; position: relative; z-index: 2; border: 1px solid rgba(255,255,255,0.1);">
                                <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(11,12,16,0.2), rgba(11,12,16,0.6)); border-radius: 16px;"></div>
                            </div>
                            
                            <!-- Background accent -->
                            <i class="fas fa-globe" style="position: absolute; right: -10%; top: -20%; font-size: 500px; color: rgba(255,255,255,0.02); z-index: 1;"></i>
                        </div>

                        <!-- Industry Challenges Section -->
                        <div style="text-align: center;">
                            <h2 style="font-size: 36px; color: var(--text-color); margin-bottom: 15px;">Why ${d.title.replace(' Sector', '').replace(' Industry', '')} Brands Struggle</h2>
                            <p style="font-size: 16px; color: #6b7280; max-width: 600px; margin: 0 auto 40px;">The landscape is competitive. Traditional marketing fails to capture modern intent.</p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; text-align: left;">
                                <div class="glass" style="padding: 30px; border-radius: 16px;">
                                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(220,39,67,0.1); color: #dc2743; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;"><i class="fas fa-exclamation-triangle"></i></div>
                                    <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 10px;">High Acquisition Costs</h3>
                                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">Rising competition on ad platforms makes acquiring a new customer incredibly expensive without AI targeting.</p>
                                </div>
                                <div class="glass" style="padding: 30px; border-radius: 16px;">
                                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(240,148,51,0.1); color: #f09433; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;"><i class="fas fa-users-slash"></i></div>
                                    <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 10px;">Low Customer Retention</h3>
                                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">Failing to engage previous customers with dynamic post-purchase automation leads to heavy churn rates.</p>
                                </div>
                                <div class="glass" style="padding: 30px; border-radius: 16px;">
                                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(188,24,136,0.1); color: #bc1888; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;"><i class="fas fa-chart-line"></i></div>
                                    <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 10px;">Stagnant Scaling</h3>
                                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">Manual operations bottleneck growth. Without autonomous agents, scaling campaigns globally is nearly impossible.</p>
                                </div>
                            </div>
                        </div>

                        <!-- How We Help Section -->
                        <div class="glass" style="padding: 60px; border-radius: 24px; background: #ffffff;">
                            <div style="text-align: center; margin-bottom: 50px;">
                                <h2 style="font-size: 36px; color: var(--text-color); margin-bottom: 15px;">How AgentIQ Transforms ${d.title.replace(' Sector', '').replace(' Industry', '')}</h2>
                                <p style="font-size: 16px; color: #6b7280; max-width: 600px; margin: 0 auto;">We deploy our proprietary AI systems perfectly calibrated for your specific industry logic.</p>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px;">
                                <div style="display: flex; gap: 20px;">
                                    <i class="fas fa-robot" style="font-size: 30px; color: #f09433; margin-top: 5px;"></i>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Predictive Analytics</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">We forecast demand and optimize budgets instantly using complex predictive data models.</p>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 20px;">
                                    <i class="fas fa-bullseye" style="font-size: 30px; color: #dc2743; margin-top: 5px;"></i>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Hyper-Targeting</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">Automated behavioral tracing to find exactly the customers ready to buy your specific products.</p>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 20px;">
                                    <i class="fas fa-magic" style="font-size: 30px; color: #bc1888; margin-top: 5px;"></i>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Dynamic Creatives</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">AI-generated visual assets and copy variations tested millions of times per day.</p>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 20px;">
                                    <i class="fas fa-comments-dollar" style="font-size: 30px; color: #f09433; margin-top: 5px;"></i>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Conversational Sales</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">Intelligent LLM chatbots handling inbound leads, objection handling, and immediate closing.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Responsive fix for the 2-column grid above -->
                            <style>
                                @media (max-width: 768px) {
                                    div[style*="grid-template-columns: repeat(2, 1fr)"] {
                                        grid-template-columns: 1fr !important;
                                    }
                                }
                            </style>
                        </div>
                        
                        <!-- Impact Stats Section -->
                        <div style="text-align: center;">
                            <h2 style="font-size: 36px; color: var(--text-color); margin-bottom: 40px;">Our Incredible Impact</h2>
                            <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                `;
                
                d.stats.forEach((s, i) => {
                    html += `
                        <div class="glass" style="padding: 40px 30px; border-radius: 20px; min-width: 250px; text-align: center; border-top: 3px solid ${colors[i]};">
                            <h3 style="color: var(--text-color); font-size: 45px; margin-bottom: 5px; font-weight: 800;">${s.v}</h3>
                            <p style="font-size: 16px; color: #9ca3af; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">${s.l}</p>
                        </div>
                    `;
                });
                
                html += `
                            </div>
                        </div>
                        
                    </div>
                `;
                dynContainer.innerHTML = html;
                dynContainer.style.maxWidth = "100%"; // Let the inner max-width handle it

            } else {
                // Comprehensive Service Layout
                let html = `
                    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px;">
                        
                        <!-- Hero Section -->
                        <div class="glass" style="padding: 60px; border-radius: 24px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap;">
                            <div style="flex: 1; min-width: 300px; position: relative; z-index: 2;">
                                <div style="display: inline-block; padding: 6px 16px; background: rgba(188,24,136,0.1); border: 1px solid rgba(188,24,136,0.3); color: #bc1888; border-radius: 20px; font-size: 14px; margin-bottom: 20px; font-weight: 600;">CORE SERVICE</div>
                                <h1 style="font-size: 48px; color: #ffffff; line-height: 1.2; margin-bottom: 20px; font-weight: 800;">${d.title}</h1>
                                <p style="font-size: 20px; color: #f09433; margin-bottom: 20px; font-weight: 500;">${d.subtitle}</p>
                                <p style="font-size: 18px; color: #9ca3af; line-height: 1.6; margin-bottom: 30px;">${d.desc}</p>
                                <a href="#contact" onclick="window.scrollTo(0,0)" class="btn-gradient" style="padding: 15px 35px; font-size: 16px; display: inline-block;">Get Started <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
                            </div>
                            <div style="flex: 1; min-width: 300px; height: 400px; background-image: url('https://source.unsplash.com/random/800x600?${d.title.split(' ')[0]},digital,laptop'); background-size: cover; background-position: center; border-radius: 16px; position: relative; z-index: 2; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                                <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(11,12,16,0.2), rgba(11,12,16,0.6)); border-radius: 16px;"></div>
                            </div>
                            
                            <!-- Background accent -->
                            <i class="fas fa-layer-group" style="position: absolute; right: -5%; top: -10%; font-size: 450px; color: rgba(255,255,255,0.02); z-index: 1;"></i>
                        </div>

                        <!-- The AgentIQ Advantage -->
                        <div style="text-align: center;">
                            <h2 style="font-size: 36px; color: var(--text-color); margin-bottom: 15px;">The AgentIQ Advantage</h2>
                            <p style="font-size: 16px; color: #6b7280; max-width: 600px; margin: 0 auto 40px;">Why standard agencies can't compete with our autonomous marketing infrastructure.</p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; text-align: left;">
                                <div class="glass" style="padding: 30px; border-radius: 16px;">
                                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(220,39,67,0.1); color: #dc2743; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;"><i class="fas fa-bolt"></i></div>
                                    <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 10px;">Millisecond Execution</h3>
                                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">Our agents deploy split tests, modify bids, and swap creatives instantly—rendering manual operations obsolete.</p>
                                </div>
                                <div class="glass" style="padding: 30px; border-radius: 16px;">
                                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(240,148,51,0.1); color: #f09433; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;"><i class="fas fa-bullseye"></i></div>
                                    <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 10px;">Zero-Waste Targeting</h3>
                                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">By layering machine learning datasets on top of standard targeting, we ensure you never pay for an unqualified click.</p>
                                </div>
                                <div class="glass" style="padding: 30px; border-radius: 16px;">
                                    <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(188,24,136,0.1); color: #bc1888; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;"><i class="fas fa-infinity"></i></div>
                                    <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 10px;">Infinite Scale</h3>
                                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">Because our backbone is built on autonomous code rather than human labor, scaling your spend 100x happens without bottleneck.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Service Strategy Process -->
                        <div class="glass" style="padding: 60px; border-radius: 24px; background: #ffffff;">
                            <div style="text-align: center; margin-bottom: 50px;">
                                <h2 style="font-size: 36px; color: var(--text-color); margin-bottom: 15px;">How We Deploy ${d.title}</h2>
                                <p style="font-size: 16px; color: #6b7280; max-width: 600px; margin: 0 auto;">Our systematic, 4-step AI-integration approach to guarantee ROI.</p>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; position: relative;">
                                <!-- Connecting lines for desktop -->
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-left: 1px dashed rgba(255,255,255,0.1); border-top: 1px dashed rgba(255,255,255,0.1); margin-left: 20px; margin-top: 20px; z-index: 0;" class="process-line"></div>
                                
                                <style>
                                    @media (max-width: 768px) {
                                        .process-line { display: none; }
                                        .service-process-grid { grid-template-columns: 1fr !important; }
                                    }
                                </style>
                                
                                <div class="service-process-item" style="display: flex; gap: 20px; position: relative; z-index: 1; background: var(--bg-color); padding: 20px; border-radius: 16px;">
                                    <div style="width: 40px; height: 40px; min-width: 40px; background: var(--ig-grad); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-color);">1</div>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Data Ingestion</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">Our agents analyze your current analytics, CRM data, and competitor footprints.</p>
                                    </div>
                                </div>
                                <div class="service-process-item" style="display: flex; gap: 20px; position: relative; z-index: 1; background: var(--bg-color); padding: 20px; border-radius: 16px;">
                                    <div style="width: 40px; height: 40px; min-width: 40px; background: var(--ig-grad); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-color);">2</div>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Model Calibration</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">We set absolute ROI targets and boundary conditions for the autonomous systems.</p>
                                    </div>
                                </div>
                                <div class="service-process-item" style="display: flex; gap: 20px; position: relative; z-index: 1; background: var(--bg-color); padding: 20px; border-radius: 16px;">
                                    <div style="width: 40px; height: 40px; min-width: 40px; background: var(--ig-grad); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-color);">3</div>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Autonomous Execution</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">The AI handles bidding, placement, creative generation, and A/B testing dynamically.</p>
                                    </div>
                                </div>
                                <div class="service-process-item" style="display: flex; gap: 20px; position: relative; z-index: 1; background: var(--bg-color); padding: 20px; border-radius: 16px;">
                                    <div style="width: 40px; height: 40px; min-width: 40px; background: var(--ig-grad); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-color);">4</div>
                                    <div>
                                        <h3 style="color: var(--text-color); font-size: 22px; margin-bottom: 10px;">Scale & Dominate</h3>
                                        <p style="color: #6b7280; font-size: 15px; line-height: 1.6;">Once the winning variants are locked, the system automatically routes budget to maximize returns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Impact Stats Section -->
                        <div style="text-align: center;">
                            <h2 style="font-size: 36px; color: var(--text-color); margin-bottom: 40px;">${d.title} Performance</h2>
                            <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                `;
                
                d.stats.forEach((s, i) => {
                    html += `
                        <div class="glass" style="padding: 40px 30px; border-radius: 20px; min-width: 250px; text-align: center; border-left: 3px solid ${colors[i]};">
                            <h3 style="color: var(--text-color); font-size: 45px; margin-bottom: 5px; font-weight: 800;">${s.v}</h3>
                            <p style="font-size: 16px; color: #9ca3af; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">${s.l}</p>
                        </div>
                    `;
                });
                
                html += `
                            </div>
                        </div>
                        
                    </div>
                `;
                dynContainer.innerHTML = html;
                dynContainer.style.maxWidth = "100%"; // Full width allowed
            }
        } else {
            // Check if it's all-services or all-sectors layout
            if(pageKey === 'page-all-services') {
                dynTitle.innerText = "All Services";
                dynSubtitle.innerText = "Explore our complete list of targeted services.";
                dynContainer.innerHTML = document.getElementById('services').querySelector('.services-grid').innerHTML;
                dynContainer.innerHTML += `
                    <div class="service-card glass"><i class="fab fa-whatsapp"></i><h3>WhatsApp Marketing</h3></div>
                    <div class="service-card glass"><i class="fas fa-envelope-open-text"></i><h3>Email Marketing</h3></div>
                    <div class="service-card glass"><i class="fas fa-pen-nib"></i><h3>Content Marketing</h3></div>
                    <div class="service-card glass"><i class="fas fa-medal"></i><h3>Brand Management</h3></div>
                    <div class="service-card glass"><i class="fas fa-layer-group"></i><h3>UI/UX Design</h3></div>
                    <div class="service-card glass"><i class="fas fa-video"></i><h3>Video Production</h3></div>
                `;
                dynContainer.className = "services-grid";
            } else if(pageKey === 'page-all-sectors') {
                dynTitle.innerText = "All Sectors";
                dynSubtitle.innerText = "We serve a wide variety of global industries.";
                dynContainer.innerHTML = document.getElementById('sectors').querySelector('.services-grid').innerHTML;
                dynContainer.innerHTML += `
                    <div class="service-card glass"><i class="fas fa-concierge-bell"></i><h3>Hospitality</h3></div>
                    <div class="service-card glass"><i class="fas fa-building"></i><h3>Real Estate</h3></div>
                    <div class="service-card glass"><i class="fas fa-box-open"></i><h3>FMCG</h3></div>
                    <div class="service-card glass"><i class="fas fa-store"></i><h3>Retail</h3></div>
                    <div class="service-card glass"><i class="fas fa-coins"></i><h3>Fintech</h3></div>
                `;
                dynContainer.className = "services-grid";
            } else if(pageKey.startsWith('page-resource-')) {
                let resourceType = pageKey.replace('page-resource-', '');
                let resourceTitle = resourceType.replace('-', ' ').toUpperCase();
                dynTitle.innerText = resourceTitle;
                dynSubtitle.innerText = `Explore our latest ${resourceTitle.toLowerCase()} to stay ahead in the digital marketing landscape.`;
                
                let html = '<div class="resource-grid">';
                // Generate 20 grid items PROGRAMMATICALLY
                for(let i=1; i<=20; i++) {
                    html += `
                        <div class="resource-card glass">
                            <div class="resource-image" style="background-image: url('https://source.unsplash.com/random/800x600?technology,marketing,ai&sig=${resourceType}${i}')"></div>
                            <div class="resource-body">
                                <span class="resource-tag">${resourceTitle}</span>
                                <h3>The Future of ${resourceTitle}: Insights & Trends ${i}</h3>
                                <p>Discover the latest advancements and agentic frameworks optimizing the way we approach ${resourceTitle.toLowerCase()} globally.</p>
                                <a href="#page-article" onclick="window.scrollTo(0,0)">Read Full ${resourceTitle.slice(0, -1)} <i class="fas fa-arrow-right" style="margin-left:5px;"></i></a>
                            </div>
                        </div>
                    `;
                }
                html += '</div>';
                dynContainer.innerHTML = html;
                dynContainer.className = "connect-container"; 
                dynContainer.style.maxWidth = "1200px";

            } else if(pageKey === 'page-article') {
                dynTitle.innerText = "The Future of Digital Disruption";
                dynSubtitle.innerText = "";
                dynContainer.innerHTML = `
                    <div class="glass" style="padding: 50px; text-align: left; max-width: 900px; margin: 0 auto; border-radius: 24px;">
                        <div class="article-header">
                            <div class="resource-tag" style="margin-bottom: 20px; font-size: 16px;">FEATURED RESOURCE</div>
                            <h1>The Future of Digital Disruption: Embracing Agentic AI in 2026</h1>
                            <div class="article-meta">
                                By AgentIQ Research Team <span>|</span> Published March 2026 <span>|</span> 10 Min Read
                            </div>
                        </div>
                        <div class="article-featured-image" style="background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop');"></div>
                        <div class="article-content">
                            <p>As we navigate through the late 2020s, the digital marketing landscape has fundamentally shifted. Manual campaign management, A/B testing delays, and subjective creative decisions are rapidly being replaced by autonomous, agentic artificial intelligence systems.</p>
                            <h2>The Rise of The Autonomous Agent</h2>
                            <p>Agentic AI goes beyond generative text and images. It represents software entities that can perceive their environment, make decisions, execute multi-step plans, and adapt to changing conditions without human intervention. At AgentIQ, this means deploying models that analyze live ad auction data and independently re-allocate budget mid-second.</p>
                            <h2>Eliminating The Bottleneck</h2>
                            <p>The primary bottleneck in historical digital marketing was the human element. Time spent analyzing spreadsheets, dragging and dropping UI elements, and arguing over copy semantics cost brands millions in missed opportunities. A well-architected AI workflow strips this latency entirely.</p>
                            <h2>What This Means For Your Brand</h2>
                            <p>In this new era, your strategy must pivot from "how do we do this?" to "what are our core objectives?". We set the parameters, establish the brand voice, and define the absolute ROI goals; the Agentic frameworks handle the 'how'. Welcome to the future of scale.</p>
                        </div>
                    </div>
                `;
            } else if(pageKey === 'page-portfolio') {
                dynTitle.innerText = "Our Portfolio";
                dynSubtitle.innerText = "Partnering with innovators. Scale achieved across multiple sectors.";
                dynContainer.innerHTML = `
                    <div style="max-width: 1200px; margin: 0 auto;">
                        <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                            ${[
                                {i: 'fas fa-microchip', n: 'A2H Tech', s: 'Information Technology'},
                                {i: 'fas fa-egg', n: 'ABHI EGGS', s: 'Agriculture'},
                                {i: 'fas fa-desktop', n: 'ADNEVAR', s: 'Information Technology'},
                                {i: 'fas fa-infinity', n: 'Blend', s: 'Retail'},
                                {i: 'fas fa-cloud-shield-alt', n: 'CipherCloud', s: 'Fintech'},
                                {i: 'fas fa-gem', n: 'Sparkle', s: 'Ecommerce'},
                                {i: 'fas fa-balance-scale', n: 'FAIRAIGLE', s: 'Legal services'},
                                {i: 'fas fa-camera', n: 'FabPik', s: 'Media'},
                                {i: 'fas fa-door-open', n: 'EUROART', s: 'Real Estate'},
                                {i: 'fas fa-bolt', n: 'EBUTOR', s: 'FMCG'}
                            ].map(client => `
                                <div class="portfolio-card glass" style="padding: 40px; text-align: center; border-radius: 20px; transition: transform 0.3s; display: flex; flex-direction: column; align-items: center; gap: 20px;">
                                    <div class="client-logo" style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                                        <i class="${client.i}" style="font-size: 50px; background: var(--ig-grad); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"></i>
                                        <h3 style="font-size: 24px; font-weight: 800; color: var(--text-color); letter-spacing: -0.5px;">${client.n}</h3>
                                    </div>
                                    <span class="client-sector" style="padding: 6px 16px; background: rgba(255,255,255,0.05); border-radius: 30px; font-size: 14px; color: #bbb; font-weight: 500; border: 1px solid var(--border-color);">${client.s}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                dynContainer.style.maxWidth = "1200px";
            } else if(pageKey === 'page-careers') {
                dynTitle.innerText = "Careers at AgentIQ";
                dynSubtitle.innerText = "Join the team building the autonomous future of digital scale.";
                dynContainer.innerHTML = `
                    <div style="max-width: 900px; margin: 0 auto;">
                        <div class="job-grid">
                            <div class="job-card glass">
                                <div class="job-info">
                                    <h3>Senior AI Engineer</h3>
                                    <div class="job-meta">
                                        <span><i class="fas fa-map-marker-alt"></i> Remote</span>
                                        <span><i class="fas fa-briefcase"></i> Full-Time</span>
                                    </div>
                                    <p style="color: #6b7280; font-size: 15px; margin-top: 15px;">Architect the data pipelines that feed our autonomous ad-buying agent networks.</p>
                                </div>
                                <a href="mailto:careers@agentiq.com?subject=Application:%20Senior%20AI%20Engineer" class="btn-gradient">Apply Now</a>
                            </div>
                            
                            <div class="job-card glass">
                                <div class="job-info">
                                    <h3>Performance Marketing Lead</h3>
                                    <div class="job-meta">
                                        <span><i class="fas fa-map-marker-alt"></i> New York / Hybrid</span>
                                        <span><i class="fas fa-briefcase"></i> Full-Time</span>
                                    </div>
                                    <p style="color: #6b7280; font-size: 15px; margin-top: 15px;">Oversee the strategic output of our AI frameworks and interface directly with enterprise clients.</p>
                                </div>
                                <a href="mailto:careers@agentiq.com?subject=Application:%20Performance%20Marketing%20Lead" class="btn-gradient">Apply Now</a>
                            </div>

                            <div class="job-card glass">
                                <div class="job-info">
                                    <h3>Generative UI/UX Designer</h3>
                                    <div class="job-meta">
                                        <span><i class="fas fa-map-marker-alt"></i> Remote</span>
                                        <span><i class="fas fa-briefcase"></i> Contract</span>
                                    </div>
                                    <p style="color: #6b7280; font-size: 15px; margin-top: 15px;">Design ultra-premium glassmorphic interfaces that our AI systems will dynamically deploy across client sites.</p>
                                </div>
                                <a href="mailto:careers@agentiq.com?subject=Application:%20Generative%20UI/UX%20Designer" class="btn-gradient">Apply Now</a>
                            </div>
                            
                            <div class="job-card glass">
                                <div class="job-info">
                                    <h3>Prompt Engineering Specialist</h3>
                                    <div class="job-meta">
                                        <span><i class="fas fa-map-marker-alt"></i> London / Remote</span>
                                        <span><i class="fas fa-briefcase"></i> Full-Time</span>
                                    </div>
                                    <p style="color: #6b7280; font-size: 15px; margin-top: 15px;">Refine and optimize complex LLM prompts for our dynamic copy and email generation engines.</p>
                                </div>
                                <a href="mailto:careers@agentiq.com?subject=Application:%20Prompt%20Engineering%20Specialist" class="btn-gradient">Apply Now</a>
                            </div>
                        </div>
                    </div>
                `;
            } else if(pageKey === 'page-privacy') {
                dynTitle.innerText = "Privacy Policy";
                dynSubtitle.innerText = "Last updated: March 2026";
                dynContainer.innerHTML = `
                    <div class="glass" style="padding: 50px; text-align: left; max-width: 900px; margin: 0 auto; border-radius: 24px;">
                        <div class="article-content">
                            <h2>1. Information We Collect</h2>
                            <p>At AgentIQ, we take your privacy seriously. We algorithmically process user interactions strictly to enhance our models and improve your experience. We collect standard analytical metrics alongside voluntarily submitted lead forms.</p>
                            <h2>2. How We Use and Process Data</h2>
                            <p>Your data is fed into encrypted, private machine learning pipelines. We do not sell your personal behavior logs to third-party data brokers. Our AI strictly uses contextualized inputs to generate optimized marketing output.</p>
                            <h2>3. Data Security & Retention</h2>
                            <p>We leverage enterprise-grade SSL, zero-trust architectures, and decentralized backup nodes to ensure your data is secure. We only retain identifiable information for as long as necessary to provide our digital services.</p>
                        </div>
                    </div>
                `;
            } else if(pageKey === 'page-terms') {
                dynTitle.innerText = "Terms & Conditions";
                dynSubtitle.innerText = "Legal agreements governing the use of AgentIQ services.";
                dynContainer.innerHTML = `
                    <div class="glass" style="padding: 50px; text-align: left; max-width: 900px; margin: 0 auto; border-radius: 24px;">
                        <div class="article-content">
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing AgentIQ, you agree to be bound by these Terms. If you do not agree to all terms, you may not access our site or employ our AI marketing engines.</p>
                            <h2>2. Use of AI Outputs</h2>
                            <p>Any marketing collateral, copy, or UI frameworks generated by AgentIQ's autonomous systems remains the intellectual property of AgentIQ until delivered and fully paid for under a specific enterprise scope of work.</p>
                            <h2>3. Warranty Disclaimer</h2>
                            <p>While our algorithms strive for 100% efficiency, digital marketing markets are inherently volatile. AgentIQ provides its predictive services "as is" and disclaims all warranties regarding definitive algorithmic guarantees.</p>
                        </div>
                    </div>
                `;
            } else {
                 // Fallback
                 dynTitle.innerText = "Coming Soon";
                 dynSubtitle.innerText = "";
            }
        }
        
        // Hide mobile menu if open
        navUl.classList.remove('active');
        
    } else {
        // Show home
        homeView.style.display = 'block';
        dynamicView.style.display = 'none';
        dynContainer.className = "connect-container"; 
    }
}

window.addEventListener('hashchange', switchPage);
// Check on load
switchPage();
