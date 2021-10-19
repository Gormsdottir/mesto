const showError = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass)
}

const hideError = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
  });
}

const toggleButtonState = (button, isNotValidateInputs, inactiveButtonClass) => {
    if(isNotValidateInputs){
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
}

const checkInputValidity = (errorElement, inputElement, config) => {

    if (!inputElement.validity.valid) {
        showError(errorElement, inputElement, config);
    } else {
        hideError(errorElement, inputElement, config);
    }
}

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButton = formElement.querySelector(submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            const isNotValidateInputs = hasInvalidInput(inputList);

            checkInputValidity(formElement, inputElement, inputErrorClass);
            toggleButtonState(submitButton, isNotValidateInputs, inactiveButtonClass);
        })
    }) 

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })

}

const enableValidation = ({formSelector, ...rest}) => {
    const forms = document.querySelectorAll(formSelector);

    Array.from(forms).forEach(formElement => {

        setEventListeners(formElement, rest) 
   })
}

const validationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'button_type_invalid',
    inputErrorClass: 'popup__input-invalid',
}

const {inputSelector, ...rest} = validationConfig;

enableValidation(validationConfig);