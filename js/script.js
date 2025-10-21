// Add 'reveal' class to elements that should animate on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Add reveal class to all section headings and content
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const headings = section.querySelectorAll('h2, h3, p, .btn');
        headings.forEach((heading, index) => {
            heading.classList.add('reveal');
            heading.style.animationDelay = `${index * 0.1}s`;
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card-new, .essential-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});