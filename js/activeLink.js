/**
 * activeLink.js
 * Highlights the current nav link based on scroll position.
 */

export function initActiveLink() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    let currentId = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('text-white', isActive);
      link.classList.toggle('font-bold', isActive);
      link.classList.toggle('text-white/90', !isActive);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once on load
  onScroll();
}
