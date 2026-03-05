/**
 * animations.js
 * Scroll-triggered reveal animations using Intersection Observer.
 */

export function initAnimations() {
  const animatedSelectors = '.fade-in, .slide-left, .slide-right';
  const elements = document.querySelectorAll(animatedSelectors);

  if (!elements.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once visible (animate only once)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
}
