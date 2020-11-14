const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add');
const userName = document.querySelector('.profile__name');
const userFeature = document.querySelector('.profile__feature');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
const newCardName = popupAdd.querySelector('.popup__input_type_place-name');
const newCardLink = popupAdd.querySelector('.popup__input_type_link');

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
const addCards = (card) => {
  const cardElement = document.querySelector('.card_template').content.cloneNode(true);
  const cardsList = document.querySelector('.cards-list');
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__name').textContent = card.name

  cardsList.prepend(cardElement);
}

initialCards.forEach((card) => {
  addCards(card);
})

const popupToggle = (popup) => { 
  popup.classList.toggle('popup_opened'); 
 }

// сохранение введённых полей и закрытие popupEdit
const popupEditSave = (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupToggle(popupEdit); 
}

popupEdit.addEventListener('submit', popupEditSave);

// добавление новой карточки
const addNewCard = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: newCardName.value,
    link: newCardLink.value,
  };

  addCards(newCard);
  popupToggle(popupAdd);
}

popupAdd.addEventListener('submit', addNewCard);


// слушатель кнопок
document.addEventListener('click', evt => {
  const target = evt.target;
  if (target.classList.contains('button_type_edit')) {
    inputName.value = userName.textContent;
    inputFeature.value = userFeature.textContent;   
    popupToggle(popupEdit);                                       // открытие popupEdit
  } 
  else if (target.classList.contains('button_type_like')) {
    evt.target.style.background ='url(./images/like_black.svg)';  // окрашивание лайков
  }
  else if (target.classList.contains('button_type_delete')) {
    evt.target.closest('.card').remove();                         // удаление карточек
  }
  else if (target.classList.contains('button_type_close-edit')) {
    popupToggle(popupEdit);                                       // закрытие popupEdit
  }
  else if (target.classList.contains('button_type_close-image')) {
    popupToggle(popupImage);                                      // закрытие popupImage
  }
  else if (target.classList.contains('button_type_add')) {
    popupToggle(popupAdd);                                        // открытие popupAdd
  }
  else if (target.classList.contains('button_type_close-add')) {
    popupToggle(popupAdd);                                        // закрытие popupAdd
  }
  else if (target.classList.contains('card__image')) {
    popupToggle(popupImage);
    const card = evt.target.closest('.card');
    const cardImage = card.querySelector('.card__image').src;
    const cardName = card.querySelector('.card__name').textContent;
    popupImage.querySelector('.popup__fig-image').src = cardImage; 
    popupImage.querySelector('.popup__fig-caption').textContent = cardName;       // разворачивание карточки           
  }
})


