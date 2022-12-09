const donationSumBtns = document.querySelectorAll('.donation-form__button-sum');
const firstSumBtn = document.querySelector('#first-sum');
const secondSumBtn = document.querySelector('#second-sum');
const thirdSumBtn = document.querySelector('#third-sum');

const monthlyBtn = document.querySelector('.donation-form__monthly-button');
const daylyBtn = document.querySelector('.donation-form__dayly-button');

const supportSubmitBtn = document.querySelector('.support-partner__form-button');

// Переключение кнопок с суммами перевода
donationSumBtns.forEach((donationSumBtn) => {
	donationSumBtn.addEventListener('click', () => {
		donationSumBtn.classList.toggle('donation-form__button_active');
	});
})

firstSumBtn.addEventListener('click', () => {
	secondSumBtn.classList.remove('donation-form__button_active');
	thirdSumBtn.classList.remove('donation-form__button_active');
});

secondSumBtn.addEventListener('click', () => {
	firstSumBtn.classList.remove('donation-form__button_active');
	thirdSumBtn.classList.remove('donation-form__button_active');
});

thirdSumBtn.addEventListener('click', () => {
	firstSumBtn.classList.remove('donation-form__button_active');
	secondSumBtn.classList.remove('donation-form__button_active');
});

// Изменение сумм платежа при клике на кнопку "Ежемесячные"
monthlyBtn.addEventListener('click', () => {
	firstSumBtn.textContent = "1000";
	secondSumBtn.textContent = "5000";
	thirdSumBtn.textContent = "10000";
})

daylyBtn.addEventListener('click', () => {
	firstSumBtn.textContent = "5000";
	secondSumBtn.textContent = "10000";
	thirdSumBtn.textContent = "50000";
})

// Перeход на страницу "Помочь фонду" при клике на кнопку сабмит в форме с "Главной" страницы
supportSubmitBtn.addEventListener('click', () => {
	window.location.href = "./help.html";
});
