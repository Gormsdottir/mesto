const popupEdit = document.querySelector('.popup_type_edit-info');
const btnEditProfile = document.querySelector('.button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditOccupation = document.querySelector('.popup__input_type_occupation');
const btnClosePopupEdit = document.querySelector('.button_type_close-edit-popup');
const btnSubmit = document.querySelector('.popup__submit_edit');

const popupAdd = document.querySelector('.popup_type_add-card');
const btnAddCard = document.querySelector('.button_type_add-card');
const addCardTitle = document.querySelector('.card__title');
const addCardImage = document.querySelector('.card__image');
const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');
const popupDescription = document.querySelector('.popup__description');
const popupPlacePhoto = document.querySelector('.popup__place-photo');
const popupImage = document.querySelector('.popup_type_image');
const btnCloseImage = document.querySelector('.button_type_close-image');

const btnClosePopupAdd = document.querySelector('.button_type_close-add-popup');
const btnCreateCard = document.querySelector('.popup__submit_add');

const cardsContainer = document.querySelector('.cards__grid');


function likeCard (evt) {
  evt.target.classList.toggle('button_type_like_active');
}

function createCard(data) {
  const cardsTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const deleteButton = cardElement.querySelector('.button_type_delete');
  const btlLike = cardElement.querySelector('.button_type_like');

  cardName.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = 'фото: ' + data.name;

  function openFullImage() {
    openPopup(popupImage);
    popupDescription.textContent = data.name;
    popupPlacePhoto.alt = data.name;
    popupPlacePhoto.src = data.link;
  }
  
  function deleteCard() {
    const cardItem = deleteButton.closest('.card');
    cardItem.remove();
  }

  btlLike.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);  
  cardImage.addEventListener('click', openFullImage);  
  btnCloseImage.addEventListener('click', closePopup.bind(null, popupImage));

  return cardElement;
};

initialCards.forEach((item) => {
  const newCard = createCard(item);

  cardsContainer.append(newCard);
});

function addCard() {
  const info = {
    name: popupAddTitle.value,
    link: popupAddImage.value,
  };
  const newAddCard = createCard(info);

  cardsContainer.prepend(newAddCard);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
  document.querySelector('.popup__add-form').reset();
  closePopup(popupAdd);
}

btnEditProfile.addEventListener('click', openPopup.bind(null, popupEdit));
btnClosePopupEdit.addEventListener('click', closePopup.bind(null, popupEdit));
btnSubmit.addEventListener('click', closePopup.bind(null, popupEdit));

btnEditProfile.addEventListener('click', setPopupEditInputValue);
popupEdit.addEventListener('submit', saveEditPopupInfo);

btnAddCard.addEventListener('click', openPopup.bind(null, popupAdd));
btnClosePopupAdd.addEventListener('click', closePopup.bind(null, popupAdd));

popupAdd.addEventListener('submit', addNewCardSubmit);