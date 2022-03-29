export default class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleConfirmDelete }, cardSelector, api, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleConfirmDelete = handleConfirmDelete;

    this._cardSelector = cardSelector;
    this._api = api;
    this._userId = userId;


  }

  // получение template новой карточки
  _getCardTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  // установка слушателей
  _setEventListeners() {

    // открытие попапа с картинкой
    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this._handleCardClick({
          name: this._name,
          link: this._link
        })
      });

    // лайк
    this._element
      .querySelector('.button_type_like')
      .addEventListener('click', () => {
        this._handleLikeClick()
      });

    // удаление
    this._element
      .querySelector('.button_type_delete')
      .addEventListener('click', () => {
        this._handleConfirmDelete()
      })
  }

  // лайк карточки
  handleCardLike() {
    const btnLike = this._element.querySelector('.button_type_like')
    const countLike = this._element.querySelector('.card__like-count')

    if (!(btnLike.classList.contains('button_type_like_active'))) {
      this._api.like(this._id)
        .then((data) => {
          btnLike.classList.add('button_type_like_active')
          countLike.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.dislike(this._id)
        .then((data) => {
          btnLike.classList.remove('button_type_like_active')
          countLike.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // удаление карточки
  handleCardDelete() {
    this._element
      .remove();
  }

  // создание карточки
  generateCard() {
    this._getCardTemplate()
    this._cardName = this._element.querySelector('.card__title');
    this._cardImage = this._element.querySelector('.card__image');
    this._count = this._element.querySelector('.card__like-count');

    this._btnDelete = this._element.querySelector('.button_type_delete');
    this._btnLike = this._element.querySelector('.button_type_like');


    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `фото: ${this._name}`;

    this._count.textContent = this._likes.length;

    if (!(this._ownerId === this._userId)) {
      this._btnDelete.style.display = 'none'
    }

    if (this._likes.find((obj) => this._userId === obj._id)) {
      this._btnLike.classList.add('button_type_like_active')
    }

    this._setEventListeners()

    return this._element;
  }
}