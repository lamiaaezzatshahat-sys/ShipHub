// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
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

// Video modal functionality
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

// Update active link based on scroll position
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

// Smooth scrolling for anchor links
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

// Animate elements on scroll
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
