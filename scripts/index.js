const popupEdit = document.querySelector('.popup_type_edit');
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
const popupClose = () => { 
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup_opened'); 
}

// открытие popup
const popupOpen = (popup) => {
  popup.classList.add('popup_opened'); 
}

// сохранение введённых полей и закрытие popupEdit
const popupEditSave = (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(); 
}

popupEdit.addEventListener('submit', popupEditSave);


// слушатель кнопок
document.addEventListener('click', evt => {
  const target = evt.target;
  if (target.classList.contains('button_type_edit')) {
    inputName.value = userName.textContent;
    inputFeature.value = userFeature.textContent;   
    popupOpen(popupEdit);                                       // открытие popupEdit
  } 
  else if (target.classList.contains('button_type_close')) { 
    popupClose();                                               // закрытие popup
  }
  else if (target.classList.contains('button_type_like')) {
    evt.target.style.background ='url(./images/like_black.svg)'; // окрашивание лайков
  };
})

