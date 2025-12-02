// Smooth scroll reveal animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all cards and feature items
    const fadeElements = document.querySelectorAll('.card, .feature-item, .stat-card, .conclusion-item, .pyramid-level, .direction-box, .effects-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Smooth scrolling for navigation
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

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animate circular progress charts when visible
    const circleObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chart = entry.target;
                const percent = chart.getAttribute('data-percent');
                const circle = chart.querySelector('.circle');
                if (circle && percent) {
                    circle.style.strokeDasharray = `${percent}, 100`;
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.circle-chart').forEach(chart => {
        circleObserver.observe(chart);
    });

    // Add hover effect to pyramid levels
    const pyramidLevels = document.querySelectorAll('.pyramid-level');
    pyramidLevels.forEach((level, index) => {
        level.style.animationDelay = `${index * 0.1}s`;
    });

    // Counter animation for statistics
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const isNumber = !isNaN(target);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            if (isNumber) {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Observe stat cards for counter animation
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const numberElement = entry.target.querySelector('.stat-number');
                const text = numberElement.textContent;

                // Handle different number formats
                if (text.includes('조원')) {
                    const match = text.match(/(\d+)/);
                    if (match) {
                        let count = 0;
                        const target = parseInt(match[1]);
                        const interval = setInterval(() => {
                            count++;
                            numberElement.textContent = count + '조원';
                            if (count >= target) clearInterval(interval);
                        }, 100);
                    }
                } else if (text.includes('%')) {
                    const match = text.match(/([\d.]+)/);
                    if (match) {
                        let count = 0;
                        const target = parseFloat(match[1]);
                        const interval = setInterval(() => {
                            count += 0.6;
                            numberElement.textContent = count.toFixed(1) + '%';
                            if (count >= target) {
                                numberElement.textContent = target + '%';
                                clearInterval(interval);
                            }
                        }, 20);
                    }
                } else {
                    const match = text.match(/(\d+)/);
                    if (match) {
                        let count = 0;
                        const target = parseInt(match[1]);
                        const interval = setInterval(() => {
                            count++;
                            numberElement.textContent = count;
                            if (count >= target) clearInterval(interval);
                        }, 30);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-card').forEach(card => {
        statObserver.observe(card);
    });

    // Add dynamic background pattern
    createBackgroundPattern();
});

// Create subtle background pattern
function createBackgroundPattern() {
    const sections = document.querySelectorAll('section:nth-child(even)');
    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            section.style.position = 'relative';
            const pattern = document.createElement('div');
            pattern.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.03;
                background-image: radial-gradient(circle at 20px 20px, var(--primary-green) 2px, transparent 0);
                background-size: 40px 40px;
                pointer-events: none;
            `;
            section.appendChild(pattern);
        }
    });
}

// Add scroll progress indicator
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-green), var(--accent-green));
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        indicator.style.width = scrolled + '%';
    });
};

createScrollIndicator();

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Responsive navigation menu (if needed in future)
function createMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be implemented if navigation is added
}

// Add Easter egg - subtle animation on logo click
document.addEventListener('click', function(e) {
    if (e.target.closest('.hero-watermark')) {
        e.target.style.animation = 'none';
        setTimeout(() => {
            e.target.style.animation = 'fadeInUp 1s ease-out';
        }, 10);
    }
});
