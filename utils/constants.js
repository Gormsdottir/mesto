// папап с формой редактирования профиля
const popupEdit = document.querySelector('.popup_type_edit-info');
const btnEditProfile = document.querySelector('.button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditOccupation = document.querySelector('.popup__input_type_occupation');
const btnClosePopupEdit = document.querySelector('.button_type_close-edit-popup');

// попап с формой добавления карточки
const popupFormAddCard = document.querySelector('.popup__add-form');
const popupAddCard = document.querySelector('.popup_type_add-card');
const btnAddCard = document.querySelector('.button_type_add-card');
const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');
const btnClosePopupAdd = document.querySelector('.button_type_close-add-popup');

// попап с картинкой
const popupImage = document.querySelector('.popup_type_image');
const btnCloseImage = document.querySelector('.button_type_close-image');

// сетка карточек
const cardsContainer = document.querySelector('.cards__grid');

const cardSelector = '.cards';

// конфигурация для валидации
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'button_type_invalid',
  inputErrorClass: 'popup__input-invalid',
}

export {
    popupEdit,
    btnEditProfile,
    profileName,
    profileOccupation,
    popupEditName,
    popupEditOccupation,
    btnClosePopupEdit,
    popupFormAddCard,
    popupAddCard,
    btnAddCard,
    popupAddTitle,
    popupAddImage,
    btnClosePopupAdd,
    popupImage,
    btnCloseImage,
    cardsContainer,
    validationConfig,
    cardSelector
}