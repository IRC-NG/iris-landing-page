/**
 * navbar.js
 * Handles mobile menu toggle and navbar scroll effect.
 */

export function initNavbar() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');

  if (!mobileMenuBtn || !mobileMenu || !hamburgerIcon || !navbar) return;

  const ICON_OPEN = 'M6 18L18 6M6 6l12 12';
  const ICON_CLOSED = 'M4 6h16M4 12h16M4 18h16';

  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    hamburgerIcon.setAttribute('d', isHidden ? ICON_CLOSED : ICON_OPEN);
  });

  // Close mobile menu when clicking a nav link
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.setAttribute('d', ICON_CLOSED);
    });
  });

  // Navbar background on scroll
  const updateScrollProgress = () => {
    if (!scrollProgress) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
    scrollProgress.setAttribute('aria-valuenow', Math.round(progress).toString());
  };

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
    updateScrollProgress();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });

  // Run once on load in case user refreshed mid-page
  onScroll();
}
