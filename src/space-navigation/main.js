import { NAV_ITEMS, ORBITS, SPACE_SETTINGS } from './config.js';
import { SpaceScene } from './Scene.js';

function startSpaceNavigation() {
  const root = document.querySelector('[data-space-navigation]');
  const homeView = root?.closest('.spa-view');
  if (!root || window.__timeboxSpaceNavigation || homeView?.classList.contains('is-hidden')) return false;
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
  return true;
}

function bootSpaceNavigation() {
  if (startSpaceNavigation()) return;
  const homeView = document.getElementById('view-home');
  if (!homeView || window.__timeboxSpaceNavigation) return;

  const observer = new MutationObserver(() => {
    if (startSpaceNavigation()) observer.disconnect();
  });
  observer.observe(homeView, { attributes: true, attributeFilter: ['class'] });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootSpaceNavigation, { once: true });
} else {
  bootSpaceNavigation();
}
