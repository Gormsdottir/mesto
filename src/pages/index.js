import '../pages/index.css'

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards
} from "../utils/items.js";

import {
  popupEdit,
  btnEditProfile,
  profileName,
  profileOccupation,
  popupFormAddCard,
  popupAddCard,
  btnAddCard,
  popupImage,
  btnCloseImage,
  cardsContainer,
  validationConfig,
} from "../utils/constants.js";


// создание карточек

function createCard(item) {
  const card = new Card(item, '#cards-template', handleImageOpen);
  return card.generateCard();
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const initialCard = createCard(item);
      cardList.addItem(initialCard);
    },
  },
cardsContainer);

cardList.renderItems();

// открытие попапа с картинкой
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();

function handleImageOpen(data) {
  imagePopup.open(data);
}

// добавление информации о пользователе

const userInfo = new UserInfo({
  userNameSelector: profileName,
  userDataSelector: profileOccupation
});

userInfo.setUserInfo({
  name: 'Кот и его человек',
  occupation: 'Исследователь тайн мироздания'
});

userInfo.updateUserInfo();

// действия с попапами изменения информации и добавления карточек 

const popupEditForm = new PopupWithForm(popupEdit, submitEditForm);
popupEditForm.setEventListeners();

const popupAddCardForm = new PopupWithForm(popupAddCard, submitAddCardForm);
popupAddCardForm.setEventListeners();

// валидация форм
const popupEditFormVal = new FormValidator(validationConfig, popupEdit);
popupEditFormVal.enableValidation();

const popupAddCardVal = new FormValidator(validationConfig, popupFormAddCard);
popupAddCardVal.enableValidation();

function submitEditForm(data) {
  userInfo.setUserInfo(data);
  userInfo.updateUserInfo();
  popupEditForm.close();
}

function submitAddCardForm({title, image}) {
  const newCard = createCard({
    name: title,
    link: image
  });
  cardList.addItem(newCard);
  popupAddCardForm.close();
}

// кнопки открытия попапов

btnEditProfile.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  profileName.value = user.name;
  profileOccupation.value = user.occupation;
  popupEditFormVal.enableSubmitButton();
  popupEditForm.open();
})

btnAddCard.addEventListener('click', () => {
  popupAddCardVal.disableSubmitButton();
  popupAddCardForm.open();
})
