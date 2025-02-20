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

// Animasi saat scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    // Special handling for feature cards - animate them together
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
    
    // Handle other animations
    elements.forEach(el => {
        // Skip feature cards as they're handled separately
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

// Panggil fungsi pertama kali saat halaman dimuat
window.addEventListener('load', handleScrollAnimation);
// Panggil fungsi saat scroll
window.addEventListener('scroll', handleScrollAnimation);
