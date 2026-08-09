export class InfoPanel {
  constructor(container, onExplore) {
    this.onExplore = onExplore;
    this.element = document.createElement('aside');
    this.element.className = 'space-info';
    this.element.setAttribute('aria-hidden', 'true');
    this.element.inert = true;
    this.element.innerHTML = `
      <div class="space-info__eyebrow">Đang chọn</div>
      <div class="space-info__heading">
        <span class="space-info__icon" aria-hidden="true"><i></i></span>
        <h2 class="space-info__title"></h2>
      </div>
      <p class="space-info__description"></p>
      <button class="space-info__explore" type="button">
        <span>Khám phá</span>
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
      </button>
    `;
    container.appendChild(this.element);
    this.icon = this.element.querySelector('.space-info__icon i');
    this.title = this.element.querySelector('.space-info__title');
    this.description = this.element.querySelector('.space-info__description');
    this.exploreButton = this.element.querySelector('.space-info__explore');
    this.handleExplore = () => this.item && this.onExplore(this.item);
    this.exploreButton.addEventListener('click', this.handleExplore);
  }

  show(item) {
    this.item = item;
    this.element.style.setProperty('--active-color', item.color);
    this.icon.className = item.iconClass;
    this.title.textContent = item.label;
    this.description.textContent = item.description;
    this.exploreButton.setAttribute('aria-label', `Khám phá ${item.label}`);
    this.element.classList.add('is-open');
    this.element.setAttribute('aria-hidden', 'false');
    this.element.inert = false;
  }

  hide() {
    this.item = null;
    this.element.classList.remove('is-open');
    this.element.setAttribute('aria-hidden', 'true');
    this.element.inert = true;
  }

  destroy() {
    this.exploreButton.removeEventListener('click', this.handleExplore);
    this.element.remove();
  }
}
