gsap.registerPlugin(ScrollTrigger, Flip, CustomEase, RoughEase, ExpoScaleEase, SlowMo, Draggable, MotionPathPlugin, TextPlugin);

document.addEventListener('DOMContentLoaded', function() {
    // Header animation
    gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.8)'
    });

    // Hero content animation
    gsap.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });

    // Certifications list animation
    gsap.from('.certifications li', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.certifications',
            start: 'top 80%'
        }
    });

    // Glass container animations with 3D effect
    gsap.utils.toArray('.glass-container').forEach((container, index) => {
        gsap.from(container, {
            opacity: 0,
            y: 100,
            rotationY: 45,
            duration: 1.5,
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Card animations with stagger and 3D effect
    const cards = document.querySelectorAll('.card');
    gsap.from(cards, {
        opacity: 0,
        y: 50,
        rotationX: 45,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.program-cards',
            start: 'top 80%'
        }
    });

    // Enhanced card hover effect
    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                rotationY: 5,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 70
                    },
                    ease: 'power4.inOut'
                });
            }
        });
    });

    // Text animation for the main title with letter-by-letter reveal
    const mainTitle = document.querySelector('.hero-content h1');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
            mainTitle.innerHTML += `<span>${text[i]}</span>`;
        }

        gsap.from('.hero-content h1 span', {
            opacity: 0,
            y: 50,
            rotationX: 90,
            duration: 1,
            stagger: 0.03,
            ease: 'back.out(1.7)'
        });
    }

    // Enhanced background parallax effect
    gsap.to('.background-image', {
        yPercent: 30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Animate icons in nav with bounce effect
    gsap.from('nav ul li a i', {
        scale: 0,
        rotation: 360,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.1
    });

    // Animate CTA button with attention-grabbing effect
    gsap.from('.cta-button', {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'back.out(1.7)',
        onComplete: () => {
            gsap.to('.cta-button', {
                scale: 1.1,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
        }
    });

    // Add a scroll-triggered color change effect to the header
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            const progress = self.progress;
            const color = gsap.utils.interpolate('rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.9)', progress);
            gsap.set('header', { backgroundColor: color });
        }
    });
});
