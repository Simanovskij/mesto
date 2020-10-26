let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_type_edit');
let editBtn = document.querySelector('.button_type_edit');
let closeBtn = document.querySelector('.button_type_close');
let saveBtn = popup.querySelector('.button_type_save');
let usrName = document.querySelector('.profile__name');
let usrFeature = document.querySelector('.profile__feature');
let inputName = popupEdit.querySelector('.popup__input_type_name');
let inputFeature = popupEdit.querySelector('.popup__input_type_feature'); 

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupEditOpen() {
  inputName.value = usrName.textContent;
  inputFeature.value = usrFeature.textContent;
  popupEdit.classList.add('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  usrName.textContent = inputName.value;
  usrFeature.textContent = inputFeature.value;
  popupClose();
}

editBtn.addEventListener('click', popupEditOpen);
closeBtn.addEventListener('click', popupClose);
popupEdit.addEventListener('submit', formSubmitHandler);
popupClose();