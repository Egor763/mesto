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
const popupProfileForm = popup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileProffesion = document.querySelector('.profile__proffesion');
const inputName = popupProfileForm.querySelector('#input__name');
const inputProffesion = popupProfileForm.querySelector('#input__proffesion');
const inputImage = popupAddCard.querySelector('#input__link');
const inputTitle = popupAddCard.querySelector('#input__name');
const list = document.querySelector('.cards__container');
const template = document.querySelector('#card').content;
const addCardButton = document.querySelector('.profile__add-card');
const basketButton = document.querySelector('.card__basket');
const popupAddCardSubmit = popupAddCard.querySelector('.form__button');
const cardImage = document.querySelector('.card__image');
const cardName = document.querySelector('.card__title');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');

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

function closePopup() {
  popupProfile.classList.remove('popup__active');
  popupAddCard.classList.remove('popup__add-card-active');
}

function addProfileData(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileProffesion.textContent = inputProffesion.value;
  closePopupProfile();
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

function addCard(event) {
  event.preventDefault();

  const obj = {
    image: inputImage.value,
    name: inputTitle.value,
  };

  renderCard(obj);

  closePopup();
}

profileOpenPopupButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAddCard);
closePopupProfileButton.addEventListener('click', closePopup);
closePopupAddCardButton.addEventListener('click', closePopup);
popupProfileSubmit.addEventListener('click', addProfileData);
popupAddCardSubmit.addEventListener('click', addCard);

render();
