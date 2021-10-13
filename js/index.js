const popup = document.querySelector('.popup');

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
const btnClosePopupAdd = document.querySelector('.button_type_close-add-popup');
const btnCreateCard = document.querySelector('.popup__submit_add');

const cardsContainer = document.querySelector('.cards__grid');

function createCard(data) {
  const cardsTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardName = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const deleteButton = cardElement.querySelector('.button_type_delete');
  const btnCloseImage = document.querySelector('.button_type_close-image');
  const popupImage = document.querySelector('.popup_type_image');
  const popupDescription = document.querySelector('.popup__description');
  const popupPlacePhoto = document.querySelector('.popup__place-photo');

  cardName.textContent = data.name;
  cardImage.src = data.link;

  cardElement.querySelector('.button_type_like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('button_type_like_active');
  });
    
  deleteButton.addEventListener('click', function () {
      const cardItem = deleteButton.closest('.card');
      cardItem.remove();
  });

  cardImage.addEventListener('click', function () {
    popupImage.classList.add('popup_opened');
    popupDescription.textContent = data.name;
    popupDescription.alt = data.name;
    popupPlacePhoto.src = data.link;
  });

  btnCloseImage.addEventListener('click', function () {
    popupImage.classList.remove('popup_opened');
  });

  return cardElement;
};

initialCards.forEach((item) => {
  const newCard = createCard(item);

  cardsContainer.append(newCard);
});

function addCard() {

  const info = {
    name: document.querySelector('.popup__input_type_title').value,
    link: document.querySelector('.popup__input_type_image').value,
  };
  const newAddCard = createCard(info);
  
  cardsContainer.prepend(newAddCard);
}

function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function setPopupEditInputValue() {
  popupEditName.value = profileName.textContent.trim();
  popupEditOccupation.value = profileOccupation.textContent.trim();
}

function setPopupEditTextValue() {
  profileName.textContent = popupEditName.value;
  profileOccupation.textContent = popupEditOccupation.value;
}

function popupSubmit (evt) {
  evt.preventDefault();
  setPopupEditTextValue();
  closePopupEdit();
}

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

function addCardSubmit (evt) {
  evt.preventDefault();
  addCard();
  document.querySelector('.popup__add-form').reset();
  closePopupAdd();
}

btnEditProfile.addEventListener('click', openPopupEdit);
btnClosePopupEdit.addEventListener('click', closePopupEdit);
btnSubmit.addEventListener('click', closePopupEdit);
btnEditProfile.addEventListener('click', setPopupEditInputValue);
popupEdit.addEventListener('submit', popupSubmit);

btnAddCard.addEventListener('click', openPopupAdd);
btnClosePopupAdd.addEventListener('click', closePopupAdd);
popupAdd.addEventListener('submit', addCardSubmit);
