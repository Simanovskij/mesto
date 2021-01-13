export const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.button_type_edit');
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
export const popupImage = document.querySelector('.popup_type_image');
export const popupAdd = document.querySelector('.popup_type_add');
export const addForm = popupAdd.querySelector('.popup__form');
export const addButton = document.querySelector('.button_type_add');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
}

export const initialCards = [{
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