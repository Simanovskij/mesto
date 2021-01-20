export default class Card {
  constructor(data, myId, cardSelector, { handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likeCounter = data.likes.length
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._myId = myId;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _toggleLikeButton(evt) {
    evt.target.classList.toggle('button_type_like-black');
  }

  _deleteCard = () => {
    this._card.remove();
    this._card = null;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.card__name').textContent = this._name;
    this._card.querySelector('.card__like-counter').textContent = this._likeCounter;
    this._setEventListeners();
    if (this._ownerId !== this._myId) {
      this._card.querySelector('.button_type_delete').classList.add('button_hidden');
    };
    console.log(this._ownerId);
    console.log(this._myId);
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.button_type_like').addEventListener('click', this._toggleLikeButton);
    this._card.querySelector('.button_type_delete').addEventListener('click', this._deleteCard);
    this._cardImage.addEventListener('click', this._handleCardClick);
  }
}