export class FormValidator {
  constructor(config, checkingForm) {
    this._config = config;
    this._checkingForm = checkingForm;
    this._inputsList = Array.from(checkingForm.querySelectorAll(config.inputSelector));
    this._submitButton = checkingForm.querySelector(config.submitButtonSelector);
  }

  _showError = (input) => {
    const error = this._checkingForm.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  }

  _hideError = (input) => {
    const error = this._checkingForm.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  }

  _checkInputValidity = (input) => {
    input.setCustomValidity('');
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    };
  }

  _hasInvalidInput = () => {
    return this._inputsList.some((input) => {
      return !input.validity.valid;
    });
  }

  _setButtonState = () => {
    if (this._hasInvalidInput(this._inputsList)) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _disableButton = () => {
    this._submitButton.classList.add(this._config.inactiveButtonClass);
  }

  _enableButton = () => {
    this._submitButton.classList.remove(this._config.inactiveButtonClass);
  }

  checkValidity = () => {
    this._setButtonState();
  }

  _setEventListeners = () => {
    this._checkingForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._inputsList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setButtonState();
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  };
}
