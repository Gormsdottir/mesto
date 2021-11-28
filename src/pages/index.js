import '../pages/index.css'

import Api from "../components/Api.js"
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";


import {
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
  popupAvatar,
  popupFormEditAvatar,
  btnEditAvatar,
  popupConfirmDelete,
  cardsContainer,
  cardSelector,
  validationConfig
} from "../utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-30',
  headers: {
    authorization: 'cde4f620-2d00-4326-89fd-80ea2c0d07b4',
    'Content-Type': 'application/json'
  }
});


// создание карточек

const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: _ => imagePopup.open(data),
    handleLikeClick: _ => card.handleLikeCard(),
    handleConfirmDelete: _ => {
      popupConfirmDeleteForm.setSubmitAction( _ => {
        popupConfirmDeleteForm.renderLoadingWhileDeleting(true)
        api.delete(data._id)
          .then( _ => {
            card.handleCardDelete()
            popupConfirmDeleteForm.close()
          })
          .catch((err) => 
          console.log(err))
          .finally( _ => 
            popupConfirmDeleteForm.renderLoading(false))
      })
      popupConfirmDeleteForm.open()
    }
  },
  cardSelector,
  api,
  userId
  )
  return card
}

const cardList = new Section( {
  renderer: item => {
    const card = createCard(item)
    const cardElement = card.renderCard()
    cardList.addItem(cardElement)
  } }, 
  cardsContainer
)


// добавление информации о пользователе

const userInfo = new UserInfo({
  name: profileName,
  occupation: profileOccupation,
  avatar: popupAvatar
});


// валидация форм

const popupEditFormVal = new FormValidator(validationConfig, popupFormEditProfile);
popupEditFormVal.enableValidation();

const popupAddCardVal = new FormValidator(validationConfig, popupFormAddCard);
popupAddCardVal.enableValidation();

const popupEditAvatarVal = new FormValidator(validationConfig, popupFormEditAvatar);
popupEditAvatarVal.enableValidation();


// попап с картинкой

const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();


// попап изменения информации

const popupEditForm = new PopupWithForm(popupEdit, formValues => {
  popupEditForm.renderLoading(true)
  api.setUserInfoApi(formValues)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupEditForm.close()
    })
    .catch((err) => 
      console.log(err))
    .finally( _ => 
      popupEditForm.renderLoading(false))
});

popupEditForm.setEventListeners();


// попап добавления карточек

const popupAddCardForm = new PopupWithForm(popupAddCard, formValues => {
  popupAddCardForm.renderLoading(true)
  api.addUserCard(formValues)
    .then((data) => {
      const card = createCard(data)
      const cardElement = card.generateCard()
      cardList.addItem(cardElement)
      cardAddFormValidator.disableSubmitButton()
      popupAddCardForm.close()
    })
    .catch((err) => console.log(err))
    .finally( _ => popupAddCardForm.renderLoading(true))
});

popupAddCardForm.setEventListeners();


// попап изменения аватара

const popupEditAvatarForm = new PopupWithForm(popupEditAvatar, formValues => {
  popupEditAvatarForm.renderLoading(true)
  api.handleUserAvatar(formValues)
      .then((data) => {
          userInfo.setUserAvatar(data)
          popupEditAvatarVal.disableSubmitButton()
          popupEditAvatarForm.close()
      })
      .catch((err) => console.log(err))
      .finally(_ => popupEditAvatarForm.renderLoading(false))
});

popupEditAvatarForm.setEventListeners();


// попап подтверждения удаления карточки

const popupConfirmDeleteForm = new PopupWithConfirm(popupConfirmDelete);
popupConfirmDeleteForm.setEventListeners();


// кнопки открытия попапов

btnEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.name;
  profileOccupationInput.value = userData.occupation;
  popupEditFormVal.enableSubmitButton();
  popupEditForm.open();
})

btnEditAvatar.addEventListener('click', () => {
  popupEditAvatarForm.open();
})

btnAddCard.addEventListener('click', () => {
  popupAddCardVal.disableSubmitButton();
  popupAddCardForm.renderLoading(false);
  popupAddCardForm.open();
})


// отображение начальной информации

let userId;

api.getAllData()
    .then(([cards, userData]) => {
        userInfo.setUserInfo(userData)
        userId = userData._id

        cardList.render(cards)
    })
    .catch((err) => console.log(err))
