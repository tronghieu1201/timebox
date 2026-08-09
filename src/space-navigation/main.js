import { NAV_ITEMS, ORBITS, SPACE_SETTINGS } from './config.js';
import { SpaceScene } from './Scene.js';

function startSpaceNavigation() {
  const root = document.querySelector('[data-space-navigation]');
  if (!root) return;
  try {
    window.__timeboxSpaceNavigation = new SpaceScene({
      root,
      items: NAV_ITEMS,
      orbits: ORBITS,
      settings: SPACE_SETTINGS
    });
  } catch (error) {
    root.classList.add('is-unavailable');
    const hint = root.querySelector('.space-navigation__hint');
    if (hint) hint.textContent = 'Không thể khởi tạo không gian 3D trên thiết bị này.';
    console.warn('[Timebox] WebGL navigation unavailable:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startSpaceNavigation, { once: true });
} else {
  startSpaceNavigation();
}
