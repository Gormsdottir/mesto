import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageDescription = this._popup.querySelector('.popup__description');
        this._popupImagePhoto = this._popup.querySelector('.popup__place-photo');
    }

    // открытие попапа с картинкой
    open(data) {
        this._popupImageDescription.textContent = data.name;
        this._popupImagePhoto.alt = data.name;
        this._popupImagePhoto.src = data.link;
        super.open()
    } 
}