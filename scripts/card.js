export class Card {
  constructor(title, image, cardSelector) {
    this._title = title;
    this._image = image;
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

  _setEventListeners() {
    this._card.querySelector('.button_type_like').addEventListener('click', this._toggleLikeButton);

    this._card.querySelector('.button_type_delete').addEventListener('click', this._deleteCard);
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__image').src = this._image;
    this._card.querySelector('.card__name').textContent = this._title;
    this._setEventListeners();
    return this._card;
  }
}