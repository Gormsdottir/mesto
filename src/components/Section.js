export default class Section {
    constructor({ renderer }, containerSelector) {
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    // отрисовка элементов
    renderItems(items) {
      items.reverse().forEach(item => this._renderer(item));
    }

    // добавление dom-элемента в контейнет
    addItem(element) {
      const card = this._renderer(element)
      this._container.prepend(card);
    }
  }