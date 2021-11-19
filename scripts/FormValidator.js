export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._formSelector = this._config.formSelector;
        this._inputSelector = this._config.inputSelector;
        this._submitButtonSelector = this._config.submitButtonSelector;
        this._inactiveButtonClass = this._config.inactiveButtonClass;
        this._inputErrorClass = this._config.inputErrorClass;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }

    // показать ошибку
    _showError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);
    }

    // убрать ошибку
    _hideError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }

    // проверка валидности при вводе
    _checkInputValidity(inputElement) {
        if(!inputElement.validity.valid) {
          this._showError(inputElement, inputElement.validationMessage)
        } else
          this._hideError(inputElement);
    }
      
    // проверка поля на валидность
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
    }

    // кнопка неактивна
    disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute('disabled', true);
    }

    // кнопка активна
    enableSubmitButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute('disabled', true);
    }

    // состояние кнопки
    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this.disableSubmitButton();
        } else {
            this.enableSubmitButton()
        }
    }
    
    // установка слушателей
    _setIventListeners() {
        this._toggleButtonState()
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
    }
    
    // включение валидации
    enableValidation() {
        this._setIventListeners();
    }
}