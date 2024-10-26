// import { cards } from './consts';

const profileOpenPopupButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupAddCard = document.querySelector('.popup__add-card');

const closePopupProfileButton = popupProfile.querySelector(
  '.popup__close-button'
);
const closePopupAddCardButton = popupAddCard.querySelector(
  '.popup__close-button'
);
const popupProfileSubmit = popupProfile.querySelector('.form__button');
const popupForm = popup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileProffesion = document.querySelector('.profile__proffesion');
const inputName = popupForm.querySelector('#input__name');
const inputProffesion = popupForm.querySelector('#input__proffesion');
const list = document.querySelector('.cards__container');
const template = document.querySelector('#card').content;
const addCardButton = document.querySelector('.profile__add-card');
const basketButton = document.querySelector('.card__basket');
const popupAddCardSubmit = popupAddCard.querySelector('.form__button');

console.log(basketButton);

function render() {
  cards.forEach(renderCard);
}

function renderCard({ name, image }) {
  const newCard = template.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__image').src = image;
  newCard.querySelector('.card__title').textContent = name;
  list.appendChild(newCard);

  addListenerCard(newCard);

  return newCard;
}

function addListenerCard(card) {
  card.querySelector('.card__basket').addEventListener('click', deleteCard);
}

function openPopupProfile() {
  popupProfile.classList.add('popup__active');
}

function openPopupAddCard() {
  popupAddCard.classList.add('popup__add-card-active');
}

function closePopupProfile() {
  popupProfile.classList.remove('popup__active');
}

function closePopupAddCard() {
  popupAddCard.classList.remove('popup__add-card-active');
}

function addProfileData(event) {
  event.preventDefault();
  console.log('j');
}

function deleteCard() {
  console.log('g');
}

function addCard(event) {
  event.preventDefault();
  console.log('p');
}

profileOpenPopupButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAddCard);
closePopupProfileButton.addEventListener('click', closePopupProfile);
closePopupAddCardButton.addEventListener('click', closePopupAddCard);
popupProfileSubmit.addEventListener('click', addProfileData);
popupAddCardSubmit.addEventListener('click', addCard);

render();
