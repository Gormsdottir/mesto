export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._closeBtn = this._popup.querySelector('.button_type_close');
    }

    // открытие попапа
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    // закрытие попапа
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }


    // закрытие попапа клавишей Escape
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    // закрытие попапа при клике на оверлей
    _handleClosePopupClick(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    // добавление слушателей
    setEventListeners() {
        this._closeBtn.addEventListener('click', () => this.close());
        this._popup.addEventListener('click', this._handleClosePopupClick.bind(this));
    }
}