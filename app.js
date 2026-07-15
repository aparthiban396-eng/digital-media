// app.js - Durga Digital Marketing

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {



    // 1. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }

    // Close mobile menu when clicking a link
    const navLinksList = document.querySelectorAll('.nav-link');
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Custom Cursor Follower (GSAP quickTo)
    const cursorRing = document.getElementById('custom-cursor-ring');
    const cursorDot = document.getElementById('custom-cursor-dot');

    if (cursorRing && cursorDot && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        // Position variables
        const posRing = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const posDot = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // quickTo setup
        const xRingTo = gsap.quickTo(cursorRing, "left", { duration: 0.25, ease: "power3" });
        const yRingTo = gsap.quickTo(cursorRing, "top", { duration: 0.25, ease: "power3" });
        
        const xDotTo = gsap.quickTo(cursorDot, "left", { duration: 0.05, ease: "power3" });
        const yDotTo = gsap.quickTo(cursorDot, "top", { duration: 0.05, ease: "power3" });

        window.addEventListener("mousemove", (e) => {
            xRingTo(e.clientX);
            yRingTo(e.clientY);
            xDotTo(e.clientX);
            yDotTo(e.clientY);
        });

        // Hover effect mappings
        const hoverTargets = 'a, button, .service-card, .tab-btn, .why-card, input, select, textarea';
        document.body.addEventListener('mouseenter', (e) => {
            if (e.target.closest(hoverTargets)) {
                document.body.classList.add('cursor-hover');
            }
        }, true);

        document.body.addEventListener('mouseleave', (e) => {
            if (e.target.closest(hoverTargets)) {
                document.body.classList.remove('cursor-hover');
            }
        }, true);
        
        // Active click states
        window.addEventListener('mousedown', () => {
            cursorRing.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursorRing.style.borderColor = '#ffffff';
        });

        window.addEventListener('mouseup', () => {
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorRing.style.borderColor = '';
        });
    }

    // 4. Case Studies Dashboard & Switcher Configuration
    const clientData = {
        bridal: {
            name: "Bridal Makeup Studio",
            industry: "Beauty & Bridal",
            duration: "20 Days",
            leads: "300+",
            cpr: "₹35.00",
            campaignType: "Meta Lead Generation Ads",
            services: ["Meta Ads", "Lead Generation", "Campaign Strategy"],
            chartData: {
                labels: ["Day 1", "Day 4", "Day 8", "Day 12", "Day 16", "Day 20"],
                leads: [5, 42, 115, 185, 240, 312]
            }
        },
        "tesco-struct": {
            name: "Tesco Structures",
            industry: "Roofing & PEB Construction",
            duration: "1 Year",
            leads: "3,500+",
            cpr: "₹48.04",
            campaignType: "Lead Gen & Brand Awareness",
            services: ["Meta Ads", "Social Media Management", "LinkedIn Marketing", "Google Business Profile", "Video Script Writing", "Video Shoot Coordination", "Video Editing"],
            chartData: {
                labels: ["Month 2", "Month 4", "Month 6", "Month 8", "Month 10", "Month 12"],
                leads: [320, 950, 1680, 2300, 2950, 3550]
            }
        },
        "tesco-dig": {
            name: "Tesco Digitals",
            industry: "Website & IT Services",
            duration: "4 Months",
            leads: "1,000+",
            cpr: "₹86.05",
            campaignType: "Meta Form Leads Campaign",
            services: ["Meta Ads", "Social Media Management", "LinkedIn Marketing", "Google Business Profile", "Video Script Writing", "Video Editing"],
            chartData: {
                labels: ["Month 1", "Month 2", "Month 3", "Month 4"],
                leads: [180, 430, 710, 1050]
            }
        },
        seyon: {
            name: "Seyon Structures",
            industry: "Roofing & Construction",
            duration: "2+ Months (Ongoing)",
            leads: "1,000+",
            cpr: "₹65.00",
            campaignType: "Lead Capture & Local Optimization",
            services: ["Meta Ads", "Google Business Profile", "Social Media Management", "Script Writing", "Video Editing"],
            chartData: {
                labels: ["Day 10", "Day 20", "Day 30", "Day 40", "Day 50", "Day 60"],
                leads: [120, 290, 480, 690, 850, 1020]
            }
        },
        hushpurr: {
            name: "Hushpurr Beauty Parlour",
            industry: "Beauty & Salon",
            duration: "2+ Months (Ongoing)",
            leads: "1,000+",
            cpr: "₹79.49",
            campaignType: "Sales & Product Promotion Campaigns",
            services: ["Meta Lead Generation", "Engagement Campaigns", "Sales Campaigns", "Amazon Product Promotion"],
            chartData: {
                labels: ["Day 10", "Day 20", "Day 30", "Day 40", "Day 50", "Day 60"],
                leads: [95, 230, 420, 680, 890, 1080]
            }
        },
        insurance: {
            name: "Insurance Company",
            industry: "Insurance Recruitment",
            duration: "1 Month",
            leads: "400+",
            cpr: "₹28.50",
            campaignType: "Recruitment & Hiring Lead Ads",
            services: ["Meta Ads", "Hiring Campaigns", "Audience Targeting"],
            chartData: {
                labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                leads: [85, 190, 310, 412]
            }
        },
        "ak-design": {
            name: "AK Design Consultant",
            industry: "Construction Design Consultancy",
            duration: "10 Days",
            leads: "40+",
            cpr: "₹41.98",
            campaignType: "Meta Ads Lead Generation",
            services: ["Meta Lead Generation", "Funnel Planning"],
            chartData: {
                labels: ["Day 2", "Day 4", "Day 6", "Day 8", "Day 10"],
                leads: [6, 15, 24, 32, 42]
            }
        },
        waves: {
            name: "Waves Nature Sarees",
            industry: "Handloom Sarees",
            duration: "1 Month",
            leads: "350+",
            cpr: "₹38.00",
            campaignType: "Meta Ads",
            services: ["Meta Ads", "Campaign Optimization"],
            chartData: {
                labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                leads: [70, 160, 250, 360]
            }
        }
    };

    // Chart.js implementation
    let performanceChart = null;

    const renderChart = (canvasId, chartData) => {
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        // Destroy existing chart to avoid overlay glitch
        if (performanceChart) {
            performanceChart.destroy();
        }

        // Create elegant gradient for line fill
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.25)');
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0.0)');

        performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Cumulative Leads',
                    data: chartData.leads,
                    borderColor: '#d4af37',
                    borderWidth: 3,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#d4af37',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#18181b',
                        titleColor: '#ffffff',
                        bodyColor: '#a1a1aa',
                        borderColor: '#2d2d30',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Leads: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: '#e4e4e9'
                        },
                        ticks: {
                            color: '#4b5563',
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: '#e4e4e9'
                        },
                        ticks: {
                            color: '#4b5563',
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    };

    // Initialize with first client
    const initDashboard = () => {
        const defaultData = clientData['bridal'];
        renderChart('performanceChart', defaultData.chartData);
    };

    // Tab switcher logic
    const tabsContainer = document.getElementById('case-studies-tabs');
    const activeClientName = document.getElementById('active-client-name');
    const activeClientIndustry = document.getElementById('active-client-industry');
    const activeCampaignDuration = document.getElementById('active-campaign-duration');
    const activeLeads = document.getElementById('active-leads');
    const activeCpr = document.getElementById('active-cpr');
    const activeCampaignType = document.getElementById('active-campaign-type');
    const activeServicesList = document.getElementById('active-services-list');

    const switchClient = (key, isScrollTriggered = false) => {
        // Sync mobile navigation tabs active class
        const tabs = tabsContainer.querySelectorAll('.tab-btn');
        tabs.forEach(btn => {
            if (btn.getAttribute('data-client') === key) {
                btn.classList.add('active');
                if (isScrollTriggered && !window.matchMedia('(min-width: 1025px)').matches) {
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            } else {
                btn.classList.remove('active');
            }
        });

        // Sync desktop vertical scroll cards active class
        const scrollCards = document.querySelectorAll('.scroll-card');
        scrollCards.forEach(card => {
            if (card.getAttribute('data-client') === key) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        const data = clientData[key];
        if (data) {
            // Smooth transition for dashboard contents
            gsap.fromTo(".dashboard-viewport > *", 
                { opacity: 1, y: 0 },
                { 
                    opacity: 0, 
                    y: 10, 
                    duration: 0.15, 
                    stagger: 0.03,
                    ease: "power2.in",
                    onComplete: () => {
                        // Update DOM details
                        activeClientName.textContent = data.name;
                        activeClientIndustry.textContent = data.industry;
                        activeCampaignDuration.textContent = data.duration;
                        activeLeads.textContent = data.leads;
                        activeCpr.textContent = data.cpr;
                        activeCampaignType.textContent = data.campaignType;

                        // Render services tags
                        activeServicesList.innerHTML = '';
                        data.services.forEach(service => {
                            const span = document.createElement('span');
                            span.className = 'service-tag';
                            span.textContent = service;
                            activeServicesList.appendChild(span);
                        });

                        // Update Chart
                        renderChart('performanceChart', data.chartData);

                        // Fade back in with dynamic GSAP reveal
                        gsap.fromTo(".dashboard-viewport > *",
                            { opacity: 0, y: 15 },
                            { 
                                opacity: 1, 
                                y: 0, 
                                duration: 0.4, 
                                stagger: 0.05,
                                ease: "power3.out"
                            }
                        );
                    }
                }
            );
        }
    };

    if (tabsContainer) {
        tabsContainer.addEventListener('click', (e) => {
            const tabBtn = e.target.closest('.tab-btn');
            if (!tabBtn) return;
            const key = tabBtn.getAttribute('data-client');
            switchClient(key, false);
        });
    }

    // Call init
    initDashboard();

    // 5. Interactive ROI Estimator
    const budgetSlider = document.getElementById('budget-slider');
    const budgetDisplay = document.getElementById('budget-value-display');
    const projectedLeads = document.getElementById('projected-leads');
    const projectedCpc = document.getElementById('projected-cpc');
    const projectedCtr = document.getElementById('projected-ctr');
    const hiddenBudgetInput = document.getElementById('selected-budget');
    const userBudgetPlaceholder = document.getElementById('user-budget-placeholder');

    const updateProjections = (budget) => {
        const leadsMin = Math.floor(budget / 60);
        const leadsMax = Math.floor(budget / 35);
        const cpc = (11.21 - (budget / 100000) * 6.35).toFixed(2);
        const ctr = (1.25 + (budget / 100000) * 1.05).toFixed(2);

        budgetDisplay.textContent = `₹${budget.toLocaleString('en-IN')}`;
        projectedLeads.textContent = `${leadsMin} - ${leadsMax}`;
        projectedCpc.textContent = `₹${cpc}`;
        projectedCtr.textContent = `${ctr}%`;
        
        if (hiddenBudgetInput) hiddenBudgetInput.value = budget;
        if (userBudgetPlaceholder) userBudgetPlaceholder.textContent = `₹${budget.toLocaleString('en-IN')}`;
    };

    if (budgetSlider) {
        budgetSlider.addEventListener('input', (e) => {
            const budget = parseInt(e.target.value, 10);
            updateProjections(budget);
        });
        updateProjections(parseInt(budgetSlider.value, 10));
    }

    // 6. Lead Capture Form Submission Simulation
    const leadForm = document.getElementById('lead-capture-form');
    const successState = document.getElementById('form-success-state');
    const submitBtn = document.getElementById('form-submit-btn');
    const resetBtn = document.getElementById('btn-reset-form');

    const userNamePlaceholder = document.getElementById('user-name-placeholder');
    const userBusinessPlaceholder = document.getElementById('user-business-placeholder');
    const userEmailPlaceholder = document.getElementById('user-email-placeholder');

    if (leadForm && successState) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Processing...';

            setTimeout(() => {
                const name = document.getElementById('full-name').value;
                const email = document.getElementById('email').value;
                const business = document.getElementById('business-name').value;

                if (userNamePlaceholder) userNamePlaceholder.textContent = name;
                if (userBusinessPlaceholder) userBusinessPlaceholder.textContent = business;
                if (userEmailPlaceholder) userEmailPlaceholder.textContent = email;

                leadForm.classList.add('hidden');
                successState.classList.remove('hidden');

                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }, 1500);
        });
    }

    if (resetBtn && leadForm && successState) {
        resetBtn.addEventListener('click', () => {
            successState.classList.add('hidden');
            leadForm.classList.remove('hidden');
            leadForm.reset();
            
            if (budgetSlider) {
                updateProjections(parseInt(budgetSlider.value, 10));
            }
        });
    }

    // Dynamic custom radial spotlight for service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // 7. PRELOADER & STARTUP ANIMATIONS (GSAP)
    const preloaderProgress = document.getElementById('preloader-progress');
    const preloaderPercentage = document.getElementById('preloader-percentage');
    let loadedPercentage = 0;

    const startAppTimeline = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Force ScrollTrigger to refresh metrics coordinates after preloader slides away
                console.log("Preloader timeline finished. Wiping out. Refreshing ScrollTrigger.");
                ScrollTrigger.refresh();
            }
        });
        
        // Wipe preloader out
        tl.to("#preloader", {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
        });
        
        // Remove preloader from DOM flow after animation
        tl.set("#preloader", { display: "none" });

        // Reveal navbar
        tl.from(".navbar", {
            y: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6");

        // Reveal hero texts
        tl.from(".hero-content > *", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out"
        }, "-=0.8");

        // Reveal hero visual
        tl.from(".hero-visual", {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.2)"
        }, "-=1");

        // Subtle entry float mapping for floating cards
        tl.from(".float-card-1", {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.8");

        tl.from(".float-card-2", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.8");
    };

    // Preloader ticker simulation
    const preloaderInterval = setInterval(() => {
        loadedPercentage += Math.floor(Math.random() * 8) + 3;
        if (loadedPercentage >= 100) {
            loadedPercentage = 100;
            clearInterval(preloaderInterval);
            if (preloaderProgress) preloaderProgress.style.width = '100%';
            if (preloaderPercentage) preloaderPercentage.textContent = '100%';
            
            // Start main animations
            setTimeout(startAppTimeline, 300);
        } else {
            if (preloaderProgress) preloaderProgress.style.width = `${loadedPercentage}%`;
            if (preloaderPercentage) preloaderPercentage.textContent = `${loadedPercentage}%`;
        }
    }, 40);

    // 8. SCROLL REVEAL ANIMATIONS (GSAP ScrollTrigger)
    // Reveal section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: "top 92%",
                toggleActions: "play none none none"
            },
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Reveal services cards grid
    gsap.from(".services-grid .service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 95%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power2.out"
    });

    // Reveal why-us cards grid
    gsap.from(".why-grid .why-card", {
        scrollTrigger: {
            trigger: ".why-grid",
            start: "top 95%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
    });

    // Reveal stats cards
    gsap.from(".stats-grid .stat-card", {
        scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 95%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
    });

    // Decoupled countUp animation for numbers to guarantee execution
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, idx) => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        const obj = { val: 0 };
        gsap.to(obj, {
            val: target,
            duration: 2.0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".stats-grid",
                start: "top 95%", // Trigger slightly earlier for safety
                toggleActions: "play none none none",
                },
            onUpdate: () => {
                if (target >= 1000) {
                    stat.innerText = Math.floor(obj.val).toLocaleString('en-IN');
                } else {
                    stat.innerText = Math.floor(obj.val);
                }
            },
            onComplete: () => {
                if (target >= 1000) {
                    stat.innerText = target.toLocaleString('en-IN');
                } else {
                    stat.innerText = target;
                }
            }
        });
    });

    // Reveal about section image and elements
    gsap.from(".about-photo-wrapper", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 92%"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.from(".about-content > *", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 92%"
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    });

    // 9. SPLIT-SCREEN SCROLLYTELLING (Awwwards-style split scroll list for Case Studies)
    // We bind scroll card triggers on Desktop viewports only (> 1024px)
    ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function() {
            const scrollCards = document.querySelectorAll('.scroll-card');
            
            scrollCards.forEach(card => {
                const clientKey = card.getAttribute('data-client');
                
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 45%",  // Trigger when card top enters center of viewport
                    end: "bottom 45%",
                    onToggle: (self) => {
                        if (self.isActive) {
                            switchClient(clientKey, true);
                        }
                    }
                });
            });

            // Click handler: scroll page to center this card in the viewport
            scrollCards.forEach(card => {
                card.addEventListener('click', () => {
                    const rect = card.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    // Position card at roughly 30% from the top of the viewport
                    const cardCenter = scrollTop + rect.top - (window.innerHeight * 0.3);
                    
                    window.scrollTo({
                        top: cardCenter,
                        behavior: 'smooth'
                    });
                });
            });
        }
    });

    // 10. 3D Tilt Micro-interactions for Cards
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const tiltCards = document.querySelectorAll('.why-card, .service-card, .metric-box, .stat-card');
        tiltCards.forEach(card => {
            card.style.transformStyle = 'preserve-3d';
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Calculate rotation angles (max 8 degrees tilt)
                const rotateX = -(y / (rect.height / 2)) * 8;
                const rotateY = (x / (rect.width / 2)) * 8;
                
                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    scale: 1.025,
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        });
    }
});
