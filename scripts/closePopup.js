const closeButtons = document.querySelectorAll('.popup__close');

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

closeButtons.forEach((button) => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => closePopup(popup));
});
