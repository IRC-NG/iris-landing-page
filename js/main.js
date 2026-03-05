/**
 * main.js
 * Entry point - imports and initialises all modules.
 */

import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initActiveLink } from './activeLink.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initActiveLink();
});
