const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.button_type_close');
let userName = document.querySelector('.profile__name');
let userFeature = document.querySelector('.profile__feature');
let inputName = popupEdit.querySelector('.popup__input_type_name');
let inputFeature = popupEdit.querySelector('.popup__input_type_feature'); 

function popupClose() { 
  popup.classList.remove('popup_opened'); // закрытие popup 
}

function popupEditSwitch() {
  inputName.value = userName.textContent;
  inputFeature.value = userFeature.textContent;
  popupEdit.classList.toggle('popup_opened'); // открытие и закрытие popupEdit
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(); // сохранение введённых полей и закрытие popupEdit (имя функции сохранено в угоду брифу)
}

editButton.addEventListener('click', popupEditSwitch);
closeButton.addEventListener('click', popupEditSwitch);
popupEdit.addEventListener('submit', formSubmitHandler);