const page = document.querySelector('.page');
const popupEdit = document.querySelector('.popup_type_edit-info');
const btnEditProfile = document.querySelector('.button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditOccupation = document.querySelector('.popup__input_type_occupation');
const btnClosePopupEdit = document.querySelector('.button_type_close-edit-popup');
const btnEditSubmit = document.querySelector('.popup__submit_edit');

const popupAddCard = document.querySelector('.popup_type_add-card');
const btnAddCard = document.querySelector('.button_type_add-card');
const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');
const popupDescription = document.querySelector('.popup__description');
const popupPlacePhoto = document.querySelector('.popup__place-photo');
const popupImage = document.querySelector('.popup_type_image');
const btnCloseImage = document.querySelector('.button_type_close-image');

const btnClosePopupAdd = document.querySelector('.button_type_close-add-popup');
const btnCreateCard = document.querySelector('.popup__submit_add');

const popupFormAddCard = document.querySelector('.popup__add-form');

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
  const btnLike = cardElement.querySelector('.button_type_like');

  cardName.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = `фото: ${data.name}`;

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

  btnLike.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);  
  cardImage.addEventListener('click', openFullImage);  
  
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

function closePopupKeyEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup();
 }
}

function handleClosePopupClick(evt) {
  const target = evt.target;
  if (target.classList.contains('popup')){
    closePopup();
  } 
}

function openPopup (elem) {
  elem.classList.add('popup_opened');
  page.addEventListener('click', handleClosePopupClick);
  document.addEventListener('keydown', closePopupKeyEsc);
}

function closePopup () {
  const activePopup = document.querySelector('.popup_opened');
  if(activePopup) {
  activePopup.classList.remove('popup_opened');
  page.removeEventListener('click', handleClosePopupClick);
  document.removeEventListener('keydown', closePopupKeyEsc);
  popupFormAddCard.reset();
  }
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

btnEditProfile.addEventListener('click', () => {
  setPopupEditInputValue();
  openPopup(popupEdit);
});

btnClosePopupEdit.addEventListener('click', closePopup);
btnEditSubmit.addEventListener('click', closePopup);

popupEdit.addEventListener('submit', saveEditPopupInfo);

btnAddCard.addEventListener('click', () => {
  toggleButtonState(btnCreateCard, true, validationConfig.inactiveButtonClass);
  openPopup(popupAddCard);
});
popupAddCard.addEventListener('submit', addNewCardSubmit);
btnClosePopupAdd.addEventListener('click', closePopup);

btnCloseImage.addEventListener('click', closePopup);