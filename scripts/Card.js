export default class Card {
    constructor(name, link, cardSelector, handleImageOpen) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleImageOpen = handleImageOpen;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._element
        .querySelector('.card__image')
        .addEventListener('click', () => {
            this._handleImageOpen({
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

    _handleCardLike() {
        const btnLike = this._element.querySelector('.button_type_like');

        btnLike.classList.toggle('button_type_like_active');
    }

    _handleCardDelete() {
        this._element
        .closest('.card')
        .remove();
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = `фото: ${this._name}`;

        this._setEventListeners();
    
        return this._element;
    }
    
}