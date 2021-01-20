import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__fig-image');
    this._title = this._popup.querySelector('.popup__fig-caption');
  }

  open(data) {
    super.open()
    this._image.src = data.link;
    this._title.textContent = data.name;
  }
}