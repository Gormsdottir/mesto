let popup = document.querySelector('.popup');
let btnEditProfile = document.querySelector('.profile__edit-button');
let btnClosepopup = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


let popupName = document.querySelector('.popup__input_name');
let popupOccupation = document.querySelector('.popup__input_occupation');


function openPopup() {
    popup.classList.add('popup__opened');
}

function setPopupInputValue() {
    popupName.value = profileName.textContent.trim();
    popupOccupation.value = profileOccupation.textContent.trim();
}

function closePopup() {
    popup.classList.remove('popup__opened');
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