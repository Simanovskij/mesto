export class FormValidator {
  constructor(config, checkingForm, newForm) {
    this._config = config;
    this._checkingForm = checkingForm;
    this._newForm = newForm;
  }

  _showError(input, config) {
    const error = this._checkingForm.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
  }

  _hideError(input, config) {
    const error = this._checkingForm.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
  }

  _checkInputValidity(input, config) {
    input.setCustomValidity('');
    if (!input.validity.valid) {
      this._showError(input, config);
    } else {
      this._hideError(input, config);
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

  _checkValidity(form, config, newForm) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    this._setButtonState(submitButton, form.checkValidity(), config);
    inputsList.forEach((input) => {
      if (newForm) {
        this._hideError(input, config)
      } else {
        this._checkInputValidity(input, config)
      }
    });
  }

  _setEventListeners(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input, config);
        this._setButtonState(submitButton, form.checkValidity(), config);
      });
    });
  }

  enableValidation() {
    if (this._newForm) {
      this._checkValidity(this._checkingForm, this._config, this._newForm)
    } else {
      this._checkingForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
      })
    }
    this._setEventListeners(this._checkingForm, this._config);
  }
}