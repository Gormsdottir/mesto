import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;

        this._form = this._popup.querySelector('.form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));

    }

    // сбор данных полей формы
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(inputElement => {
            this._formValues[inputElement.name] = inputElement.value;
        });
        return this._formValues;
    }

    // закрытие попапа формы
    close() {
        super.close();
        this._form.reset();
    }

    // добавление слушателей попапа формы
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitCallback(this._getInputValues());
        });
    }
}