const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.button_type_close');
const userName = document.querySelector('.profile__name');
const userFeature = document.querySelector('.profile__feature');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputFeature = popupEdit.querySelector('.popup__input_type_feature'); 

const initialCards = [
  {
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

// рендер начальных карточек
const renderCards = (place) => {
  const cardElement = document.querySelector('.card_template').content.cloneNode(true);
  const cardsList = document.querySelector('.cards-list');
  cardElement.querySelector('.card__image').src = place.link;
  cardElement.querySelector('.card__image').alt = place.name;
  cardElement.querySelector('.card__name').textContent = place.name

  cardsList.append(cardElement);
}

initialCards.forEach((place) => {
  renderCards(place);
})

// закрытие popup 
function popupClose() { 
  popup.classList.remove('popup_opened'); 
}

// открытие popupEdit
function popupEditOpen() {
  inputName.value = userName.textContent;
  inputFeature.value = userFeature.textContent;
  popupEdit.classList.add('popup_opened'); 
}

// сохранение введённых полей и закрытие popupEdit
function popupEditSave (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(); 
}

popupEdit.addEventListener('submit', popupEditSave);

document.addEventListener('click', evt => {
  const target = evt.target;
  if (target.classList.contains('button_type_edit')) {
    popupEditOpen();
  } else if (target.classList.contains('button_type_close')) {
    popupClose();
  }
})

