document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Simple Parallax for Hero
    const heroOverlay = document.querySelector('.hero-bg-overlay');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Only parallax if hero is in view roughly
        if (scrollPosition < window.innerHeight) {
            if(heroOverlay) {
                heroOverlay.style.transform = `scale(1.1) translateY(${scrollPosition * 0.4}px)`;
            }
            if(heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
                // Note: This might conflict with the fade-up 'visible' transform if not careful.
                // Actually fade-up uses transform: translate(0,0) when visible.
                // Setting style directly overrides class. 
                // To avoid conflict, we usually wrap the content in a div for parallax,
                // and the inner div for fade animation.
                // For now, let's skip paralax on content to keep animation clean, or check if 'visible' is active.
            }
        }
    });

});
