const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--navbar-bg)';
    } else {
        navbar.style.background = 'var(--navbar-bg)';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const featureCards = document.querySelectorAll('.feature-card');
    let allFeaturesVisible = false;
    
    if (featureCards.length > 0) {
        const firstFeatureTop = featureCards[0].getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        if (firstFeatureTop < windowHeight - elementVisible) {
            allFeaturesVisible = true;
        }
    }
    
    if (allFeaturesVisible) {
        featureCards.forEach(card => {
            card.classList.add('in-view');
        });
    }
    
    elements.forEach(el => {
        if (!el.classList.contains('feature-card')) {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const elementVisible = 150;
            const delay = el.dataset.delay || 0;
            
            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => {
                    el.classList.add('in-view');
                }, parseFloat(delay) * 1000);
            }
        }
    });
}

window.addEventListener('load', handleScrollAnimation);

window.addEventListener('scroll', handleScrollAnimation);

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.rewards-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    showSlide(0);
    setInterval(nextSlide, 5000);
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});
