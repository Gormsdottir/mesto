let popup = document.querySelector('.popup');
let btnEditProfile = document.querySelector('.button_type_edit-profile');
let btnClosepopup = document.querySelector('.button_type_close-popup');

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

let popupName = document.querySelector('.popup__input_type_name');
let popupOccupation = document.querySelector('.popup__input_type_occupation');

function openPopup() {
    popup.classList.add('popup_opened');
}

function setPopupInputValue() {
    popupName.value = profileName.textContent.trim();
    popupOccupation.value = profileOccupation.textContent.trim();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function setPopupTextValue() {
    profileName.textContent = popupName.value;
    profileOccupation.textContent = popupOccupation.value;
}

function popupSubmit (evt) {
    evt.preventDefault();
    setPopupTextValue();
    closePopup();
}

btnEditProfile.addEventListener('click', openPopup);
btnEditProfile.addEventListener('click', setPopupInputValue);
btnClosepopup.addEventListener('click', closePopup);
popup.addEventListener('submit', popupSubmit);
