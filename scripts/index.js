const popupEdit = document.querySelector('.popup_type_edit');
const editForm = popupEdit.querySelector('.popup__form');
const editButton = document.querySelector('.button_type_edit');
const userName = document.querySelector('.profile__name');
const userFeature = document.querySelector('.profile__feature');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputFeature = popupEdit.querySelector('.popup__input_type_feature');

const popupImage = document.querySelector('.popup_type_image');

const popupAdd = document.querySelector('.popup_type_add');
const addForm = popupAdd.querySelector('.popup__form');
const newCardName = popupAdd.querySelector('.popup__input_type_place-name');
const newCardLink = popupAdd.querySelector('.popup__input_type_link');
const addButton = document.querySelector('.button_type_add');

const cardList = document.querySelector('.cards-list');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
}

import { Card } from './card.js';
import { FormValidator } from './validate.js';

const initialCards = [{
    name: 'Гоа',
    link: './images/goa.jpg'
  },
  {
    name: 'Казань',
    link: './images/kazan.jpg'
  },
  {
    name: 'Переславль',
    link: './images/pereslavl.jpg'
  },
  {
    name: 'Дзержинск',
    link: './images/dzer.jpg'
  },
  {
    name: 'Панаджи',
    link: './images/panaji.jpg'
  },
  {
    name: 'Сергиев Посад',
    link: './images/sergiev.jpg'
  }
];

// открытие popup и добавление слушателей
const popupOpen = (popup) => {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', (evt) => {
    closeEsc(evt, popup);
  })

  popup.addEventListener('click', (evt) => {
    closeBackground(evt, popup);
  })
}

// открытие popupEdit
editButton.addEventListener('click', () => {
  inputName.value = userName.textContent;
  inputFeature.value = userFeature.textContent;
  popupOpen(popupEdit);
  new FormValidator(validationConfig, editForm).enableValidation();
});

// редактирование popupEdit
const popupEditSave = (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(popupEdit);
}

// открытие popupAdd 
addButton.addEventListener('click', () => {
  popupOpen(popupAdd);
  new FormValidator(validationConfig, addForm).enableValidation();
})

// закрытие popup
const popupClose = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', (evt) => {
    closeEsc(evt, popup);
  })
}

// закрытие по Esc
const closeEsc = (evt, popup) => {
  if (evt.key === 'Escape') {
    popupClose(popup);
  }
}

//закрытие по backgorund
const closeBackground = (evt, popup) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close')) {
    popupClose(popup);
  }
}

// создание карточки
const createCard = (name, link) => {
  const cardElement = new Card(name, link, '.card-template').generateCard();
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.addEventListener('click', () => {
    popupOpen(popupImage);
    prewiewOpen(name, link);
  });
  return cardElement;
}

// добавление карточек
const addCard = (container, cardElement) => {
  container.prepend(cardElement);
}

// добавление новой карточки
const addNewCard = (evt) => {
  evt.preventDefault();
  addCard(cardList, createCard(newCardName.value, newCardLink.value));
  popupClose(popupAdd);
  evt.target.reset();
}

// создание превью карточки
const prewiewOpen = (name, link) => {
  const popupImageFig = popupImage.querySelector('.popup__fig-image');
  const popupImageCaption = popupImage.querySelector('.popup__fig-caption');
  popupImageFig.src = link;
  popupImageFig.alt = name;
  popupImageCaption.textContent = name;
}

popupEdit.addEventListener('submit', popupEditSave);

popupAdd.addEventListener('submit', addNewCard);

// рендер начальных карточек
initialCards.forEach((item) => {
  addCard(cardList, createCard(item.name, item.link))
})