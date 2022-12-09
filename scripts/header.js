// Открытие и закрытие модального окна навигационного меню в хедере
const headerNavBtnEl = document.querySelector('.header__nav-button');
const modalNavEl = document.querySelector('.modal-nav');
const modalNavCloseBtnEl = document.querySelector('.modal-nav__close-button');
const modal = document.querySelector('.modal');

const footerHelpBtnEl = document.querySelector('.footer__help-button');
const headerHelpBtnEl = document.querySelector('.header__help-button');

const logoHeaderEl = document.querySelector('.logo__container');
const logoFooterEl = document.querySelector('.footer__logo-box');

function openModal(modal) {
	modal.classList.add('modal_opened');
}

function closeModal(modal) {
	modal.classList.remove('modal_opened');
}

headerNavBtnEl.addEventListener('click', () => {
	openModal(modalNavEl);
});

modalNavCloseBtnEl.addEventListener('click', () => {
	closeModal(modalNavEl);
});

// Переход на страницу "Помочь фонду" при клике на кнопку "Помочь фонду"
headerHelpBtnEl.addEventListener('click', () => {
	window.location.href = './help.html';
});

// Переход на страницу "Помочь фонду" при клике на кнопку "Помочь фонду" в футере
footerHelpBtnEl.addEventListener('click', () => {
	window.location.href = './help.html';
});

// Переход на главную страницу при клике на логотип в хедере
logoHeaderEl.addEventListener('click', () => {
	window.location.href = './index.html';
});

// Переход на главную страницу при клике на логотип в футере
logoFooterEl.addEventListener('click', () => {
	window.location.href = './index.html';
});
