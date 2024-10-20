const profileOpenPopupButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup__active');
}

function closePopup() {
  popup.classList.remove('popup__active');
}

profileOpenPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
