export default class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._popup = document.querySelector('.popup_type_image');
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
            this._handleImageOpen();
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

    _handleImageOpen() {
        this._popup.classList.add('popup_opened');

        this._popup.querySelector('.popup__description').textContent = this._name;
        this._popup.querySelector('.popup__place-photo').alt = this._name;
        this._popup.querySelector('.popup__place-photo').src = this._link;
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