

(function() {
    'use strict';

    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // ========== SERVICES SLIDER (HOME PAGE) ==========
    const servicesSlider = document.getElementById('servicesSlider');
    const servicesPrev = document.getElementById('servicesPrev');
    const servicesNext = document.getElementById('servicesNext');
    
    if (servicesSlider && servicesPrev && servicesNext) {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.service-slide');
        const slidesPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        const totalSlides = slides.length;
        
        function updateSlider() {
            const slideWidth = slides[0].offsetWidth + 30;
            servicesSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
        
        servicesNext.addEventListener('click', () => {
            if (currentIndex < totalSlides - slidesPerView) {
                currentIndex++;
                updateSlider();
            }
        });
        
        servicesPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        window.addEventListener('resize', updateSlider);
    }

    // ========== TUTORIALS SLIDER (SYNTHESIS PAGE) ==========
    const tutorialsSlider = document.getElementById('tutorialsSlider');
    const tutorialPrev = document.getElementById('tutorialPrev');
    const tutorialNext = document.getElementById('tutorialNext');
    
    if (tutorialsSlider && tutorialPrev && tutorialNext) {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.tutorial-slide');
        const slidesPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        const totalSlides = slides.length;
        
        function updateTutorialSlider() {
            const slideWidth = slides[0].offsetWidth + 30;
            tutorialsSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
        
        tutorialNext.addEventListener('click', () => {
            if (currentIndex < totalSlides - slidesPerView) {
                currentIndex++;
                updateTutorialSlider();
            }
        });
        
        tutorialPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateTutorialSlider();
            }
        });
        
        window.addEventListener('resize', updateTutorialSlider);
    }

    // ========== RECENT POSTS (HOME PAGE) ==========
    const recentPostsContainer = document.getElementById('recentPosts');
    if (recentPostsContainer) {
        const recentPosts = [
            {
                image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&auto=format",
                category: "SKIN THEORY",
                title: "Le renouveau des peptides dans les soins",
                date: "15 Déc 2024",
                readTime: "6 min"
            },
            {
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38f96ac?w=400&auto=format",
                category: "TREND LAB",
                title: "Analyse : La tendance 'Strawberry Makeup'",
                date: "12 Déc 2024",
                readTime: "4 min"
            },
            {
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6b7e6f?w=400&auto=format",
                category: "COMMUNITY",
                title: "Before/After : 3 mois avec Chroma Lab",
                date: "10 Déc 2024",
                readTime: "8 min"
            }
        ];
        
        recentPostsContainer.innerHTML = recentPosts.map(post => `
            <div class="post-card">
                <div class="post-image" style="background-image: url('${post.image}')">
                    <span class="post-category">${post.category}</span>
                </div>
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <div class="post-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ========== TRENDS GRID (TREND CENTRIFUGE PAGE) ==========
    const trendsGrid = document.getElementById('trendsGrid');
    if (trendsGrid) {
        const trends = [
            {
                image: "https://images.unsplash.com/photo-1571877227200-b0f98e3f5bc9?w=400&auto=format",
                title: "Glass Skin 2.0",
                category: "skincare",
                trendMeter: 87,
                scienceGrade: "A-",
                views: "50M+"
            },
            {
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc103e2a?w=400&auto=format",
                title: "Latte Makeup",
                category: "makeup",
                trendMeter: 92,
                scienceGrade: "B+",
                views: "35M+"
            },
            {
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&auto=format",
                title: "Cold Girl Aesthetic",
                category: "makeup",
                trendMeter: 78,
                scienceGrade: "B",
                views: "28M+"
            },
            {
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&auto=format",
                title: "Skin Cycling",
                category: "skincare",
                trendMeter: 94,
                scienceGrade: "A",
                views: "62M+"
            },
            {
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38f96ac?w=400&auto=format",
                title: "Bubble Hair",
                category: "hair",
                trendMeter: 71,
                scienceGrade: "C+",
                views: "15M+"
            },
            {
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6b7e6f?w=400&auto=format",
                title: "Clean Girl Makeup",
                category: "makeup",
                trendMeter: 89,
                scienceGrade: "B+",
                views: "42M+"
            }
        ];
        
        function renderTrends(filter = 'all', sort = 'trend') {
            let filtered = filter === 'all' ? trends : trends.filter(t => t.category === filter);
            filtered = [...filtered].sort((a, b) => {
                if (sort === 'trend') return b.trendMeter - a.trendMeter;
                if (sort === 'science') return b.scienceGrade.localeCompare(a.scienceGrade);
                return parseInt(b.views) - parseInt(a.views);
            });
            
            trendsGrid.innerHTML = filtered.map(trend => `
                <div class="trend-card">
                    <div class="trend-card-image" style="background-image: url('${trend.image}')">
                        <div class="trend-score">🔥 ${trend.trendMeter}%</div>
                    </div>
                    <div class="trend-card-content">
                        <h3>${trend.title}</h3>
                        <div class="trend-metrics">
                            <div class="metric">
                                <span class="metric-label">TREND DECAY METER</span>
                                <div class="meter-bar">
                                    <div class="meter-fill" style="width: ${trend.trendMeter}%"></div>
                                </div>
                            </div>
                            <div class="metric">
                                <span class="metric-label">SCIENCE GRADE</span>
                                <div class="science-grade">${trend.scienceGrade}</div>
                            </div>
                            <div class="metric">
                                <span class="metric-label">VIEWS</span>
                                <div>${trend.views}</div>
                            </div>
                        </div>
                        <button class="btn-outline trend-detail" style="margin-top: 15px; width: 100%;">Voir l'analyse →</button>
                    </div>
                </div>
            `).join('');
            
            document.querySelectorAll('.trend-detail').forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('🔬 Analyse complète disponible dans la version premium du laboratoire.');
                });
            });
        }
        
        // Filtres
        const filterBtns = document.querySelectorAll('.filter-btn');
        const sortSelect = document.getElementById('sortTrends');
        let currentFilter = 'all';
        let currentSort = 'trend';
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter');
                renderTrends(currentFilter, currentSort);
            });
        });
        
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                renderTrends(currentFilter, currentSort);
            });
        }
        
        renderTrends();
    }

    // ========== PERIODIC TABLE (FORMULA ARCHIVE) ==========
    const periodicGrid = document.getElementById('periodicGrid');
    if (periodicGrid) {
        const ingredients = [
            { name: "Niacinamide", category: "actifs", desc: "Vitamine B3, anti-inflammatoire" },
            { name: "Retinol", category: "actifs", desc: "Anti-âge, renouvellement cellulaire" },
            { name: "Acide Hyaluronique", category: "hydratants", desc: "Hydratation intense" },
            { name: "Vitamine C", category: "antioxydants", desc: "Antioxydant, éclat" },
            { name: "Acide Salicylique", category: "exfoliants", desc: "Anti-imperfections" },
            { name: "Céramides", category: "hydratants", desc: "Barrière cutanée" },
            { name: "Peptides", category: "actifs", desc: "Collagène, fermeté" },
            { name: "AHA", category: "exfoliants", desc: "Exfoliation douce" },
            { name: "Squalane", category: "hydratants", desc: "Hydratation, non comédogène" },
            { name: "Centella Asiatica", category: "actifs", desc: "Apaisant, cicatrisant" }
        ];
        
        function renderIngredients(category = 'all') {
            const filtered = category === 'all' ? ingredients : ingredients.filter(i => i.category === category);
            periodicGrid.innerHTML = filtered.map(ing => `
                <div class="ingredient-card">
                    <h4>${ing.name}</h4>
                    <p>${ing.desc}</p>
                    <small style="color: var(--red);">${ing.category}</small>
                </div>
            `).join('');
        }
        
        const categoryBtns = document.querySelectorAll('.category');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.getAttribute('data-cat');
                renderIngredients(cat);
            });
        });
        
        const searchInput = document.getElementById('ingredientSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filtered = ingredients.filter(i => i.name.toLowerCase().includes(searchTerm));
                periodicGrid.innerHTML = filtered.map(ing => `
                    <div class="ingredient-card">
                        <h4>${ing.name}</h4>
                        <p>${ing.desc}</p>
                        <small style="color: var(--red);">${ing.category}</small>
                    </div>
                `).join('');
            });
        }
        
        renderIngredients();
    }

    // ========== FIELD NOTES BLOG ==========
    const fieldNotesGrid = document.getElementById('fieldNotesGrid');
    if (fieldNotesGrid) {
        const blogPosts = [
            {
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                author: "Sophie M.",
                category: "reviews",
                title: "Mon expérience avec l'analyse Chroma Lab",
                content: "Après 3 mois d'utilisation des recommandations, ma peau n'a jamais été aussi belle...",
                likes: 124,
                comments: 18
            },
            {
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                author: "Thomas L.",
                category: "before-after",
                title: "Before/After : Ma routine retinol",
                content: "Voici les résultats après 6 semaines d'utilisation du retinol recommandé...",
                likes: 89,
                comments: 12
            },
            {
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                author: "Emma R.",
                category: "routines",
                title: "Ma routine Glass Skin 2.0",
                content: "J'ai suivi le protocole Chroma Lab et voici mon retour d'expérience...",
                likes: 203,
                comments: 34
            },
            {
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                author: "Lucas D.",
                category: "reviews",
                title: "Le fond de teint parfait existe !",
                content: "Grâce à l'analyse de sous-ton, j'ai enfin trouvé LA teinte...",
                likes: 67,
                comments: 9
            }
        ];
        
        function renderBlogPosts(category = 'all', search = '') {
            let filtered = category === 'all' ? blogPosts : blogPosts.filter(p => p.category === category);
            if (search) {
                filtered = filtered.filter(p => p.title.toLowerCase().includes(search) || p.content.toLowerCase().includes(search));
            }
            fieldNotesGrid.innerHTML = filtered.map(post => `
                <div class="post-card">
                    <div class="post-image" style="background-image: url('${post.image}')">
                        <span class="post-category">${post.category}</span>
                    </div>
                    <div class="post-content">
                        <h3>${post.title}</h3>
                        <p>${post.content.substring(0, 100)}...</p>
                        <div class="post-meta">
                            <span><i class="fas fa-user"></i> ${post.author}</span>
                            <span><i class="fas fa-heart"></i> ${post.likes}</span>
                            <span><i class="fas fa-comment"></i> ${post.comments}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        const catBtns = document.querySelectorAll('.blog-cat-btn');
        const blogSearch = document.getElementById('blogSearch');
        let currentBlogCat = 'all';
        
        catBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentBlogCat = btn.getAttribute('data-cat');
                renderBlogPosts(currentBlogCat, blogSearch ? blogSearch.value : '');
            });
        });
        
        if (blogSearch) {
            blogSearch.addEventListener('input', (e) => {
                renderBlogPosts(currentBlogCat, e.target.value);
            });
        }
        
        renderBlogPosts();
        
        const submitNoteBtn = document.getElementById('submitNoteBtn');
        if (submitNoteBtn) {
            submitNoteBtn.addEventListener('click', () => {
                alert('📝 Merci de partager votre expérience ! Notre équipe examinera votre témoignage.');
            });
        }
    }

    // ========== PRODUCTS GRID (EQUIPMENT ROOM) ==========
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        const products = [
            {
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc103e2a?w=300&auto=format",
                name: "Lip Serum Chroma",
                category: "makeup",
                ingredient: "hyaluronic",
                shape: "all",
                price: "45€",
                description: "Rouge à lèvres hydratant"
            },
            {
                image: "https://images.unsplash.com/photo-1571877227200-b0f98e3f5bc9?w=300&auto=format",
                name: "Glass Skin Drops",
                category: "skincare",
                ingredient: "hyaluronic",
                shape: "all",
                price: "52€",
                description: "Sérum illuminateur"
            },
            {
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&auto=format",
                name: "Retinol Night Cream",
                category: "skincare",
                ingredient: "retinol",
                shape: "all",
                price: "68€",
                description: "Crème anti-âge"
            },
            {
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&auto=format",
                name: "Vitamin C Booster",
                category: "skincare",
                ingredient: "vitaminc",
                shape: "all",
                price: "39€",
                description: "Concentré éclat"
            },
            {
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38f96ac?w=300&auto=format",
                name: "Blush Architect",
                category: "makeup",
                ingredient: "all",
                shape: "heart",
                price: "32€",
                description: "Fards à joues sur mesure"
            },
            {
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6b7e6f?w=300&auto=format",
                name: "Contour Pro",
                category: "makeup",
                ingredient: "all",
                shape: "oval",
                price: "42€",
                description: "Palette contouring"
            }
        ];
        
        function renderProducts(ingredient = 'all', shape = 'all') {
            let filtered = products;
            if (ingredient !== 'all') {
                filtered = filtered.filter(p => p.ingredient === ingredient || p.ingredient === 'all');
            }
            if (shape !== 'all') {
                filtered = filtered.filter(p => p.shape === shape || p.shape === 'all');
            }
            
            productsGrid.innerHTML = filtered.map(product => `
                <div class="product-card">
                    <div class="product-image" style="background-image: url('${product.image}')"></div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        <button class="btn-outline product-buy" style="width: 100%;">Ajouter au panier →</button>
                    </div>
                </div>
            `).join('');
            
            document.querySelectorAll('.product-buy').forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('🛒 Produit ajouté à votre panier Chroma Lab.');
                });
            });
        }
        
        const ingredientFilters = document.querySelectorAll('[data-ingredient]');
        const shapeFilters = document.querySelectorAll('[data-shape]');
        let currentIngredient = 'all';
        let currentShape = 'all';
        
        ingredientFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                ingredientFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentIngredient = btn.getAttribute('data-ingredient');
                renderProducts(currentIngredient, currentShape);
            });
        });
        
        shapeFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                shapeFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentShape = btn.getAttribute('data-shape');
                renderProducts(currentIngredient, currentShape);
            });
        });
        
        renderProducts();
        
        // Comparateur de produits
        const compare1 = document.getElementById('compare1');
        const compare2 = document.getElementById('compare2');
        const compare3 = document.getElementById('compare3');
        const compareBtn = document.getElementById('compareBtn');
        const comparisonResults = document.getElementById('comparisonResults');
        
        if (compare1 && compare2 && compare3 && compareBtn) {
            products.forEach((p, i) => {
                const option = `<option value="${i}">${p.name}</option>`;
                compare1.innerHTML += option;
                compare2.innerHTML += option;
                compare3.innerHTML += option;
            });
            
            compareBtn.addEventListener('click', () => {
                const ids = [compare1.value, compare2.value, compare3.value].filter(v => v !== '');
                if (ids.length < 2) {
                    comparisonResults.innerHTML = '<p>Sélectionnez au moins 2 produits à comparer.</p>';
                    return;
                }
                
                const selected = ids.map(id => products[parseInt(id)]);
                comparisonResults.innerHTML = `
                    <h4>Résultats de la comparaison :</h4>
                    <div style="display: grid; grid-template-columns: repeat(${selected.length}, 1fr); gap: 20px; margin-top: 20px;">
                        ${selected.map(p => `
                            <div>
                                <strong>${p.name}</strong>
                                <p>Prix : ${p.price}</p>
                                <p>Catégorie : ${p.category}</p>
                                <p>⭐ Note Chroma Lab : ${Math.floor(Math.random() * 2 + 4)}/5</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            });
        }
    }

    // ========== SPECIMEN LAB QUIZ ==========
    const quizSteps = document.querySelectorAll('.quiz-step');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    const resetQuiz = document.getElementById('resetQuiz');
    const saveResults = document.getElementById('saveResults');
    
    let quizData = {
        shape: '',
        undertone: '',
        contrast: ''
    };
    
    function updateStep(stepNumber) {
        quizSteps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === stepNumber);
        });
        const stepElements = document.querySelectorAll('.step');
        stepElements.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === stepNumber);
        });
    }
    
    if (nextBtns.length) {
        // Face shape selection
        const shapeOptions = document.querySelectorAll('.shape-option');
        const nextStep1 = document.getElementById('nextStep1');
        
        shapeOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                shapeOptions.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                quizData.shape = opt.getAttribute('data-shape');
                if (nextStep1) nextStep1.disabled = false;
            });
        });
        
        if (nextStep1) {
            nextStep1.addEventListener('click', () => updateStep(2));
        }
        
        // Undertone selection
        const undertoneOptions = document.querySelectorAll('.undertone-option');
        const nextStep2 = document.getElementById('nextStep2');
        
        undertoneOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                undertoneOptions.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                quizData.undertone = opt.getAttribute('data-undertone');
                if (nextStep2) nextStep2.disabled = false;
            });
        });
        
        if (nextStep2) {
            nextStep2.addEventListener('click', () => updateStep(3));
        }
        
        // Contrast selection
        const contrastOptions = document.querySelectorAll('.contrast-option');
        const nextStep3 = document.getElementById('nextStep3');
        
        contrastOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                contrastOptions.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                quizData.contrast = opt.getAttribute('data-contrast');
                if (nextStep3) nextStep3.disabled = false;
            });
        });
        
        if (nextStep3) {
            nextStep3.addEventListener('click', () => {
                updateStep(4);
                displayResults();
            });
        }
        
        // Previous buttons
        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentActive = document.querySelector('.quiz-step.active');
                const currentIndex = Array.from(quizSteps).indexOf(currentActive);
                if (currentIndex > 0) {
                    updateStep(currentIndex);
                }
            });
        });
    }
    
    function displayResults() {
        const resultShape = document.getElementById('resultShape');
        const resultUndertone = document.getElementById('resultUndertone');
        const resultContrast = document.getElementById('resultContrast');
        const resultStyles = document.getElementById('resultStyles');
        const resultLipstick = document.getElementById('resultLipstick');
        
        const shapeNames = { oval: 'Ovale', round: 'Rond', square: 'Carré', heart: 'Cœur', diamond: 'Diamant', rectangle: 'Rectangle' };
        const undertoneNames = { cool: 'Froid (bleu/violet)', warm: 'Chaud (doré/jaune)', neutral: 'Neutre' };
        const contrastNames = { low: 'Faible contraste', medium: 'Contraste moyen', high: 'Fort contraste' };
        
        let styles = '';
        let lipstick = '';
        
        if (quizData.shape === 'oval') styles = 'La plupart des styles vous vont ! Misez sur des looks équilibrés.';
        else if (quizData.shape === 'round') styles = 'Optez pour des contours allongés et des blushs en diagonale.';
        else if (quizData.shape === 'square') styles = 'Adoucissez avec des textures floues et des couleurs douces.';
        else if (quizData.shape === 'heart') styles = 'Valorisez votre menton avec des couleurs plus intenses en bas du visage.';
        else styles = 'Structurez avec des jeux d’ombres et de lumières.';
        
        if (quizData.undertone === 'cool') lipstick = 'Rouges à lèvres bleutés (cerise, framboise).';
        else if (quizData.undertone === 'warm') lipstick = 'Rouges orangés, brique, terracotta.';
        else lipstick = 'Polyvalente : essayez les nude rosés et les rouges équilibrés.';
        
        if (resultShape) resultShape.textContent = shapeNames[quizData.shape] || '—';
        if (resultUndertone) resultUndertone.textContent = undertoneNames[quizData.undertone] || '—';
        if (resultContrast) resultContrast.textContent = contrastNames[quizData.contrast] || '—';
        if (resultStyles) resultStyles.textContent = styles;
        if (resultLipstick) resultLipstick.textContent = lipstick;
    }
    
    if (resetQuiz) {
        resetQuiz.addEventListener('click', () => {
            quizData = { shape: '', undertone: '', contrast: '' };
            document.querySelectorAll('.shape-option, .undertone-option, .contrast-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            if (nextStep1) nextStep1.disabled = true;
            if (nextStep2) nextStep2.disabled = true;
            if (nextStep3) nextStep3.disabled = true;
            updateStep(1);
        });
    }
    
    if (saveResults) {
        saveResults.addEventListener('click', () => {
            alert('💾 Votre Specimen ID Card a été sauvegardée ! Vous pouvez la retrouver dans votre espace personnel.');
        });
    }

    // ========== START ANALYSIS BUTTON ==========
    const startAnalysisBtn = document.getElementById('startAnalysisBtn');
    if (startAnalysisBtn) {
        startAnalysisBtn.addEventListener('click', () => {
            window.location.href = 'specimen-lab.html';
        });
    }

    // ========== NOTIFICATION SYSTEM ==========
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-microchip"></i>
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(notification);
        
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(12px);
                border-left: 3px solid var(--red);
                border-radius: 12px;
                padding: 16px 24px;
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
                color: white;
            }
            .notification-content i {
                color: var(--red);
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ========== CONSOLE LOG ==========
    console.log('%c✨ CHROMA LAB v.2030 — FULLY OPERATIONAL ✨', 'color: #E6324B; font-size: 16px; font-weight: bold;');
    console.log('%cDesign System: Black | White | Red | 7 Pages Structure', 'color: #fff; background: #E6324B; padding: 4px 12px; border-radius: 8px;');
    console.log('%cNavigation: Accueil | Specimen Lab | Trends | Formula Archive | Synthesis | Field Notes | Equipment', 'color: #E6324B; font-style: italic;');
})();