// import { popupImage, popupOpen } from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const CardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return CardElement;
  }

  _toggleLikeButton(evt) {
    evt.target.classList.toggle('button_type_like-black');
  }

  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  // _openPrewiew = () => {
  //   const popupImageFig = popupImage.querySelector('.popup__fig-image');
  //   const popupImageCaption = popupImage.querySelector('.popup__fig-caption');
  //   popupImageFig.src = this._link;
  //   popupImageFig.alt = this._name;
  //   popupImageCaption.textContent = this._name;
  //   popupOpen(popupImage);
  // }

  _setEventListeners() {
    this._card.querySelector('.button_type_like').addEventListener('click', this._toggleLikeButton);
    this._card.querySelector('.button_type_delete').addEventListener('click', this._deleteCard);
    this._card.querySelector('.card__image').addEventListener('click', this._openPrewiew);
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__name').textContent = this._name;
    this._setEventListeners();
    return this._card;
  }
}