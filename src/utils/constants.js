// папап с формой редактирования профиля
const popupEdit = '.popup_type_edit-info';
const popupFormEditProfile = document.querySelector('.popup__edit-form');
const btnEditProfile = document.querySelector('.button_type_edit-profile');
const profileName = '.profile__name';
const profileOccupation = '.profile__occupation';
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileOccupationInput = document.querySelector('.popup__input_type_occupation');

// попап с формой добавления карточки
const popupAddCard = '.popup_type_add-card';
const popupFormAddCard = document.querySelector('.popup__add-form');
const btnAddCard = document.querySelector('.button_type_add-card');

// попап с картинкой
const popupImage = '.popup_type_image';

// попап изменения аватара
const popupEditAvatar = '.popup_type_edit-avatar';
const popupFormEditAvatar = document.querySelector('.popup__edit-avatar-form');
const btnEditAvatar = document.querySelector('.button_type_edit_avatar');

// попап подтверждения удаления
const popupConfirmDelete = '.popup_type_confirm';

// сетка карточек
const cardsContainer = '.cards__grid';

// template карточек
const cardSelector = '#cards-template';

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
  popupFormEditProfile,
  btnEditProfile,
  profileName,
  profileOccupation,
  profileNameInput,
  profileOccupationInput,
  popupFormAddCard,
  popupAddCard,
  btnAddCard,
  popupImage,
  popupEditAvatar,
  popupFormEditAvatar,
  btnEditAvatar,
  popupConfirmDelete,
  cardsContainer,
  cardSelector,
  validationConfig
}