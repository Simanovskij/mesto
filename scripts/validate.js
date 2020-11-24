const showError = (form, input, config) => {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}

const hideError = (form, input, config) => {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

const checkInputValidity = (form, input, config) => {
  input.setCustomValidity('');
  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}

const setButtonState = (button, isActive, config) => {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
  } else {
    button.classList.add(config.inactiveButtonClass);
  }
}

const setEventListeners = (form, config) => {
  const inputsList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    });
  });
}

const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config)
  });
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
}