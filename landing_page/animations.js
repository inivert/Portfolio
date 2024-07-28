// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Function to initialize all animations
function initAnimations() {
    // Animate header from top
    gsap.from('header', { 
        y: -100, 
        opacity: 0, 
        duration: 1, 
        ease: 'power2.out',
        // Comment: This animation slides the header down from above the viewport
    });

    // Animate hero content from bottom
    gsap.from('.hero-content', { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        delay: 0.5, 
        ease: 'power2.out',
        // Comment: This animation fades in and slides up the hero content
    });

    // Animate glass containers on scroll
    gsap.utils.toArray('.glass-container').forEach(container => {
        gsap.from(container, { 
            opacity: 0, 
            y: 50, 
            duration: 1,
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            // Comment: This animation fades in and slides up each glass container as it enters the viewport
        });
    });

    // Animate cards with stagger effect
    gsap.from('.card', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.program-cards',
            start: 'top 80%'
        },
        // Comment: This animation fades in and slides up each card with a staggered delay
    });

    // Add hover animations to nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { scale: 1.1, duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { scale: 1, duration: 0.3 });
        });
        // Comment: This adds a subtle scale effect to nav links on hover
    });

    // Animate CTA button
    gsap.from('.cta-button', {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'back.out(1.7)',
        // Comment: This animation makes the CTA button pop in
    });

    // Add parallax effect to background image
    gsap.to('.background-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        // Comment: This creates a parallax scrolling effect for the background image
    });
}

// Call the function to initialize animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);
