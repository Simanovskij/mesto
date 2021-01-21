export default class Card {
  constructor(data, myId, cardSelector, { handleCardClick, handleDelClick, setLike, delLike }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._setLike = setLike;
    this._delLike = delLike;
    this._myId = myId;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _likeCard(data) {
    this._likeButton.classList.add('button_type_like-black');
    this._setLike(data);
  }

  _removeLikeCard(data) {
    this._likeButton.classList.remove('button_type_like-black');
    this._delLike(data);
  }

  setLikes(data) {
    this._likes.textContent = data.likes.length;
  }

  remove() {
    this._deleteCard(this._card);
  }

  _deleteCard = (card) => {
    card.remove();
    card = null;
  }

  _checkOwner() {
    return this._ownerId == this._myId;
  }

  _checkLikeOwner() {
    this._data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._myId) {
        this._likeButton.classList.add('button_type_like-black')
      }
    })
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.card__name').textContent = this._name;
    this._likes = this._card.querySelector('.card__like-counter');
    console.log(this._likes);
    this._likeButton = this._card.querySelector('.button_type_like');
    this._deleteButton = this._card.querySelector('.button_type_delete');
    if (!this._checkOwner()) {
      this._deleteButton.classList.add('button_hidden');
    };
    this.setLikes(this._data);
    this._checkLikeOwner();
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('button_type_like-black')) {
        this._removeLikeCard(this._data)
      } else {
        this._likeCard(this._data)
      }
    });
    this._deleteButton.addEventListener('click', () => { this._handleDelClick(this._data) });
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._data) });
  }
}