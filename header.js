// Открытие и закрытие модального окна навигационного меню в хедере

const headerNavBtnEl = document.querySelector('.header__nav-button');
const modalNavEl = document.querySelector('.modal-nav');
const modalNavCloseBtnEl = document.querySelector('.modal-nav__close-button');
const modal = document.querySelector('.modal');

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
