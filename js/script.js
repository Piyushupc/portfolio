// ============================================
// PORTFOLIO 2.0 - ENHANCED JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all features
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initFormHandling();
    initMobileMenu();
});

// ============================================
// 1. NAVBAR FUNCTIONALITY
// ============================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// ============================================
// 2. SMOOTH SCROLLING
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 3. SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards and skill cards
    document.querySelectorAll('.project-card, .skill-card, .about-grid').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// 4. FORM HANDLING
// ============================================
function initFormHandling() {
    // Add form submission handling
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    // Add focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.borderColor = 'var(--accent-primary)';
        });

        input.addEventListener('blur', function () {
            this.style.borderColor = 'var(--border)';
        });
    });

    // Handle WhatsApp button
    const whatsappBtn = document.getElementById('sendWhatsApp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function (e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields!');
                return;
            }

            // Format message for WhatsApp
            const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp API link (replace with your actual number)
            const whatsappLink = `https://wa.me/919123676497?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappLink, '_blank');
            
            // Show success feedback
            const originalText = whatsappBtn.innerHTML;
            whatsappBtn.innerHTML = '✓ Opening WhatsApp...';
            whatsappBtn.style.background = 'var(--accent-primary)';
            
            // Clear form
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactMessage').value = '';
            
            setTimeout(() => {
                whatsappBtn.innerHTML = originalText;
                whatsappBtn.style.background = '';
            }, 2000);
        });
    }
}

// ============================================
// 5. MOBILE MENU
// ============================================
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close mobile menu after clicking
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });

    // Update menu visibility on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = '';
        }
    });
}

// ============================================
// 6. UTILITY: Intersection Observer for fade-in
// ============================================
function observeElements() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(el => observer.observe(el));
}

// ============================================
// 7. PARALLAX EFFECT (Optional Enhancement)
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const scrollPosition = window.scrollY;
            const yOffset = scrollPosition * 0.5;
            el.style.transform = `translateY(${yOffset}px)`;
        });
    });
}

// ============================================
// 8. KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key.toLowerCase() === 'h') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Press 'P' to go to projects
    if (e.key.toLowerCase() === 'p') {
        const projects = document.querySelector('#projects');
        if (projects) {
            projects.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // Press 'C' to go to contact
    if (e.key.toLowerCase() === 'c') {
        const contact = document.querySelector('#contact');
        if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// 9. THEME TOGGLE (Optional)
// ============================================
function initThemeToggle() {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// ============================================
// 10. PERFORMANCE: Lazy Loading Images
// ============================================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Call additional initializations
initThemeToggle();
initLazyLoading();

// Log for debugging (remove in production)
console.log('Portfolio 2.0 loaded successfully! 🚀');
