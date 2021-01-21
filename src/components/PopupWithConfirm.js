import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form')
    this._setEventListeners();
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._data);
      this.close();
    });
  }

  open(data) {
    super.open();
    this._data = data;
  }
}