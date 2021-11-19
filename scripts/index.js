import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupEdit = document.querySelector('.popup_type_edit-info');
const btnEditProfile = document.querySelector('.button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditOccupation = document.querySelector('.popup__input_type_occupation');
const btnClosePopupEdit = document.querySelector('.button_type_close-edit-popup');

const popupAddCard = document.querySelector('.popup_type_add-card');
const btnAddCard = document.querySelector('.button_type_add-card');
const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');

const popupImage = document.querySelector('.popup_type_image');
const btnCloseImage = document.querySelector('.button_type_close-image');

const btnClosePopupAdd = document.querySelector('.button_type_close-add-popup');

const popupFormAddCard = document.querySelector('.popup__add-form');

const cardsContainer = document.querySelector('.cards__grid');


const validationConfig = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'button_type_invalid',
  inputErrorClass: 'popup__input-invalid',
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#cards-template');

  const cardElement = card.generateCard();

  document.querySelector('.cards__grid').append(cardElement);
});

function addCard() {
  const info = {
    name: popupAddTitle.value,
    link: popupAddImage.value,
  };
  const card = new Card(info.name, info.link, '#cards-template');
  const newAddCard = card.generateCard(info);

  cardsContainer.prepend(newAddCard);
}

const popupEditFormVal = new FormValidator(validationConfig, popupEdit);
popupEditFormVal.enableValidation();

const popupAddCardVal = new FormValidator(validationConfig, popupFormAddCard);
popupAddCardVal.enableValidation();

function closePopupKeyEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup();
 }
}

function handleClosePopupClick(evt) {
  const target = evt.target;
  if (target.classList.contains('popup')){
    closePopup(target);
  } 
}

function openPopup (elem) {
  elem.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupKeyEsc);
}

function closePopup (elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKeyEsc);
}

function setPopupEditInputValue() {
  popupEditName.value = profileName.textContent.trim();
  popupEditOccupation.value = profileOccupation.textContent.trim();
}

function setPopupEditTextValue() {
  profileName.textContent = popupEditName.value;
  profileOccupation.textContent = popupEditOccupation.value;
}

function saveEditPopupInfo (evt) {
  evt.preventDefault();
  setPopupEditTextValue();
  closePopup(popupEdit);
}

function addNewCardSubmit (evt) {
  evt.preventDefault();
  addCard();
  popupFormAddCard.reset();
  closePopup(popupAddCard);
}

// открытие попапа с данными
btnEditProfile.addEventListener('click', () => {
  popupEditFormVal.enableSubmitButton();
  setPopupEditInputValue();
  openPopup(popupEdit);
});

// закрытие попапа с данными
btnClosePopupEdit.addEventListener('click',  () => {
  closePopup(popupEdit);
});

// сохранение данных
popupEdit.addEventListener('submit', saveEditPopupInfo);

// открытие попапа создания карточки
btnAddCard.addEventListener('click', () => {
  popupAddCardVal.disableSubmitButton();
  openPopup(popupAddCard);
});

// закрытие попапа создания карточки
btnClosePopupAdd.addEventListener('click', () => {
  closePopup(popupAddCard);
});

// сохранение карточки
popupAddCard.addEventListener('submit', addNewCardSubmit);


btnCloseImage.addEventListener('click', () => {
  closePopup(popupImage);
});

popupEdit.addEventListener('click', handleClosePopupClick);
popupAddCard.addEventListener('click', handleClosePopupClick);
popupImage.addEventListener('click', handleClosePopupClick);