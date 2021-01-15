const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.button_type_edit');
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
const popupAdd = document.querySelector('.popup_type_add');
export const addForm = popupAdd.querySelector('.popup__form');
export const addButton = document.querySelector('.button_type_add');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__error'
}

import Goa from '../images/goa.jpg';
import Kazan from '../images/kazan.jpg';
import Pereslavl from '../images/pereslavl.jpg';
import Dzerjinsk from '../images/dzer.jpg';
import Panaji from '../images/panaji.jpg';
import Posad from '../images/sergiev.jpg';


export const initialCards = [{
    name: 'Гоа',
    link: Goa
  },
  {
    name: 'Казань',
    link: Kazan
  },
  {
    name: 'Переславль',
    link: Pereslavl
  },
  {
    name: 'Дзержинск',
    link: Dzerjinsk
  },
  {
    name: 'Панаджи',
    link: Panaji
  },
  {
    name: 'Сергиев Посад',
    link: Posad
  }
];