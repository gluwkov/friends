// Форма обратной связи
const nameFeedbackInput = document.querySelector('#feedback-name');
const mailFeedbackInput = document.querySelector('#feedback-mail');
const textFeedbackInput = document.querySelector('#feedback-text');
const feedbackCheckbox = document.querySelector('#feedback-checkbox');
const feedbackBtnEl = document.querySelector('.feedback__button');
const feedbackFormEl = document.querySelector('.feedback__form');
const popupEl = document.querySelector('.popup');
const closePopupEl = document.querySelector('.popup__close');

// Функция открытия попапа
function openPopup(popup) {
	popup.classList.add('popup_opened');
}

// Заполнение формы обратной связи и открытие попапа при клике на кнопку submit
function changeBackground() {
	if (nameFeedbackInput.value !== '' && mailFeedbackInput.value !== '' && textFeedbackInput.value !== '' && feedbackCheckbox.checked === true) {
		feedbackBtnEl.style.background = '#528CBE';
		feedbackBtnEl.style.color = '#FFF';
		feedbackBtnEl.addEventListener('mouseover', () => {
			feedbackBtnEl.style.background = '#487FAE';
		});
		feedbackBtnEl.addEventListener('mouseout', () => {
			feedbackBtnEl.style.background = '#528CBE';
		});
		feedbackBtnEl.addEventListener('click', () => {
			openPopup(popupEl);
		});
	} else {
		feedbackBtnEl.style.background = '#F8F8F8';
		feedbackBtnEl.style.color = '#000';
		feedbackBtnEl.addEventListener('mouseover', () => {
			feedbackBtnEl.style.background = '#F1F5F9';
		});
		feedbackBtnEl.addEventListener('mouseout', () => {
			feedbackBtnEl.style.background = '#F8F8F8';
		});
	}
}

nameFeedbackInput.addEventListener('input', changeBackground);
mailFeedbackInput.addEventListener('input', changeBackground);
textFeedbackInput.addEventListener('input', changeBackground);
feedbackCheckbox.addEventListener('input', changeBackground);

// Обработчик «отправки» формы
function handleFeedbackFormSubmit(evt) {
	evt.preventDefault();
}
feedbackFormEl.addEventListener('submit', handleFeedbackFormSubmit);


// Функция закрытия попапа
function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

// Функция очистки полей формы
function clearForm() {
	if (nameFeedbackInput.value !== '' && mailFeedbackInput.value !== '' && textFeedbackInput.value !== '' && feedbackCheckbox.checked === true) {
		nameFeedbackInput.value = '';
		mailFeedbackInput.value = '';
		textFeedbackInput.value = '';
		feedbackCheckbox.checked = false;
	}
}

// Закрытие попапа и очистка полей формы при клике на крестик
closePopupEl.addEventListener('click', () => {
	closePopup(popupEl);
	clearForm();
});


