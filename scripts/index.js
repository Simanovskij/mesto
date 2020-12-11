const popupEdit = document.querySelector('.popup_type_edit');
const editForm = popupEdit.querySelector('.popup__form');
const editButton = document.querySelector('.button_type_edit');
const userName = document.querySelector('.profile__name');
const userFeature = document.querySelector('.profile__feature');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
export const popupImage = document.querySelector('.popup_type_image');
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
const editFormValidation = new FormValidator(validationConfig, editForm, true);
const addFormValidation = new FormValidator(validationConfig, addForm, true);
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

import { Card } from './Card.js';
import { FormValidator } from './Validate.js';

// открытие popup и добавление слушателей
export const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    closeEsc(evt, popup);
  })
  popup.addEventListener('click', (evt) => {
    closeBackground(evt, popup);
  })
}

// редактирование popupEdit
const popupEditSave = (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(popupEdit);
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

// закрытие popup
const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => {
    closeEsc(evt, popup);
    closeBackground(evt, popup);
  })
}

// создание карточки
const createCard = (name, link) => {
  const cardElement = new Card(name, link, '.card-template').generateCard();
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

// открытие popupAdd 
addButton.addEventListener('click', () => {
  popupOpen(popupAdd);
  addFormValidation.enableValidation();
})

// открытие popupEdit
editButton.addEventListener('click', () => {
  inputName.value = userName.textContent;
  inputFeature.value = userFeature.textContent;
  popupOpen(popupEdit);
  editFormValidation.enableValidation();
});

popupEdit.addEventListener('submit', popupEditSave);

popupAdd.addEventListener('submit', addNewCard);

// рендер начальных карточек
initialCards.forEach((item) => {
  addCard(cardList, createCard(item.name, item.link))
})