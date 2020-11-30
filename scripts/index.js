const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add');
const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');
const userName = document.querySelector('.profile__name');
const userFeature = document.querySelector('.profile__feature');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
const newCardName = popupAdd.querySelector('.popup__input_type_place-name');
const newCardLink = popupAdd.querySelector('.popup__input_type_link');
const cardList = document.querySelector('.cards-list');

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

  const inputs = popup.querySelectorAll('.popup__input');
  const form = popup.querySelector('.popup__form');
  inputs.forEach((input) => {
    hideError(form, input, validationConfig);
  })
}

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

// редактирование popupEdit
const popupEditSave = (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(popupEdit);
}

// создание карточки
const createCard = (name, link) => {
  const cardElement = document.querySelector('.card_template').content.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__name');
  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;

  const deleteButton = cardElement.querySelector('.button_type_delete');
  deleteButton.addEventListener('click', (evt) => {
    removeCard(evt.target);
  })

  const likeButton = cardElement.querySelector('.button_type_like');
  likeButton.addEventListener('click', (evt) => {
    toggleLikeButton(evt.target);
  })

  cardImage.addEventListener('click', () => {
    popupOpen(popupImage);
    prewiewOpen(name, link);
  })

  return cardElement;
}

// добавление карточек
const addCard = (container, cardElement) => {
  container.prepend(cardElement);
}

// добавление новой карточки из формы
const addNewCard = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: newCardName.value,
    link: newCardLink.value,
  };

  addCard(cardList, createCard(newCard.name, newCard.link));
  popupClose(popupAdd);

  evt.target.reset();
}

// лайк карточки
const toggleLikeButton = (button) => {
  button.classList.toggle('button_type_like-black');
}

// удаление карточки
const removeCard = (button) => {
  button.closest('.card').remove();
}

// создание превью карточки
const prewiewOpen = (name, link) => {
  const popupImageFig = popupImage.querySelector('.popup__fig-image');
  const popupImageCaption = popupImage.querySelector('.popup__fig-caption');
  popupImageFig.src = link;
  popupImageFig.alt = name;
  popupImageCaption.textContent = name;
}

// открытие popupEdit
editButton.addEventListener('click', () => {
  inputName.value = userName.textContent;
  inputFeature.value = userFeature.textContent;
  popupOpen(popupEdit);
});

// открытие popupAdd 
addButton.addEventListener('click', () => {
  popupOpen(popupAdd);
})

popupEdit.addEventListener('submit', popupEditSave);

popupAdd.addEventListener('submit', addNewCard);

// рендер начальных карточек
initialCards.forEach((item) => {
  addCard(cardList, createCard(item.name, item.link))
})