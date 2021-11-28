import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmForm = this._popup.querySelector('.form');
        this._confirmBtn = this._confirmForm.querySelector('.popup__submit_confirm');
        this._confirmBtnText = this._confirmBtn.textContent;
    }

    // установка слушателей
    setEventListeners() {
        super.setEventListeners()
    
        this._confirmForm.addEventListener('submit', (evt) => {
          evt.preventDefault()
          this._handleSubmitCallback()
        })
    }

    // установка действия по нажатию кнопки подтверждения
    setSubmitAction(action) {
        this._handleSubmitCallback = action
    }

    // отображение текста загрузки
    renderLoading(isLoading) {
        if(isLoading) {
          this._confirmBtn.textContent = 'Сохранение...'
        } else {
          this._confirmBtn.textContent = this._confirmBtnText
        }
      }
}