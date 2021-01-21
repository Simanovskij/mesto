const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.button_type_edit');
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
const popupAdd = document.querySelector('.popup_type_add');
export const addForm = popupAdd.querySelector('.popup__form');
export const addButton = document.querySelector('.button_type_add');
const popupAvatar = document.querySelector('.popup_type_edit-avatar');
export const avatarForm = popupAvatar.querySelector('.popup__form');
export const editAvatarButton = document.querySelector('.profile__edit-avatar');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__error'
}