export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this.renderer = renderer;
      this._containerSelector = document.querySelector(containerSelector);
    }
  
    // отрисовка элементов
    renderItems() {
        this._items.reverse().forEach((item) => {
            this.renderer(item); 
      });
    }
    
    // добавление dom-элемента в контейнет
    addItem(element) {
      this._containerSelector.prepend(element);
    }
  }