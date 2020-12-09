export class FormValidator {
  constructor(config, checkingForm) {
    this._config = config;
    this._checkingForm = checkingForm;
  }

  _showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
  }

  _hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
  }

  _checkInputValidity(form, input, config) {
    input.setCustomValidity('');
    if (!input.validity.valid) {
      this._showError(form, input, config);
    } else {
      this._hideError(form, input, config);
    }
  }

  _setButtonState(button, isActive, config) {
    if (isActive) {
      this._enableButton(button, config);
    } else {
      this._disableButton(button, config);
    }
  }

  _disableButton(button, config) {
    button.classList.add(config.inactiveButtonClass);
  }

  _enableButton = (button, config) => {
    button.classList.remove(config.inactiveButtonClass);
  }

  _setEventListeners(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input, config);
        this._setButtonState(submitButton, form.checkValidity(), config);
      });
    });
    form.addEventListener('submit', () => {
      this._disableButton(submitButton, config);
    })
  }

  enableValidation() {
    this._setEventListeners(this._checkingForm, this._config);
  }
}