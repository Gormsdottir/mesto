const popup = document.querySelector('.popup');
const btnEditProfile = document.querySelector('.button_type_edit-profile');
const btnClosepopup = document.querySelector('.button_type_close-popup');

const btnAddCard = document.querySelector('.button_type_add-card');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const popupName = document.querySelector('.popup__input_type_name');
const popupOccupation = document.querySelector('.popup__input_type_occupation');


const initialCards = [
        {
          name: 'Толедо',
          link: 'https://images.unsplash.com/photo-1468412526475-8cc70299f66f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        },
        {
          name: 'Касл Комб',
          link: 'https://images.unsplash.com/photo-1580961074865-78eac6d26180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80'
        },
        {
          name: 'Эдинбург',
          link: 'https://images.unsplash.com/photo-1605641251481-e998506236a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        },
        {
          name: 'Квебек',
          link: 'https://images.unsplash.com/photo-1524022523577-9005d7ae69d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        },
        {
          name: 'Варшава',
          link: 'https://images.unsplash.com/photo-1607427293702-036933bbf746?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'
        },
        {
          name: 'Дубровник',
          link: 'https://images.unsplash.com/photo-1559741145-8d23c9698ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
];


initialCards.forEach(function (el) {
  const cardsContainer = document.querySelector('.cards__grid');
  const cardsTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.button_type_delete');

  cardElement.querySelector('.card__image').src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  
  cardElement.querySelector('.button_type_like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('button_type_like_active');
  });
  
  deleteButton.addEventListener('click', function () {
    const cardItem = deleteButton.closest('.card');
    cardItem.remove();
  });

  cardsContainer.append(cardElement);
});


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