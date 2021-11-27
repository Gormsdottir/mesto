export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    // получение template новой карточки
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement;
    }

    // установка слушателей
    _setEventListeners() {
        this._element
        .querySelector('.card__image')
        .addEventListener('click', () => {
            this._handleCardClick({
                name: this._name,
                link: this._link});
        }); 

        this._element
        .querySelector('.button_type_like')
        .addEventListener('click', () => {
            this._handleCardLike();
        });

        this._element
        .querySelector('.button_type_delete')
        .addEventListener('click', () => {
            this._handleCardDelete();
        });
    }

    // лайк карточки
    _handleCardLike() {
        const btnLike = this._element.querySelector('.button_type_like');

        btnLike.classList.toggle('button_type_like_active');
    }

    // удаление карточки
    _handleCardDelete() {
        this._element
        .remove();
    }

    // создание карточки
    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = `фото: ${this._name}`;

        this._setEventListeners();
    
        return this._element;
    }
    
}