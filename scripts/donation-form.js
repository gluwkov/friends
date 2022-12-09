const donationSumBtns = document.querySelectorAll('.donation-form__button-sum');
const firstSumBtn = document.querySelector('#first-sum');
const secondSumBtn = document.querySelector('#second-sum');
const thirdSumBtn = document.querySelector('#third-sum');

const btnVisaMir = document.querySelector('.donation-form__button-3-logos');
const btnGooglePay = document.querySelector('.donation-form__payment-gpay');
const btnApplePay = document.querySelector('.donation-form__payment-apple');
const subtitleCard = document.querySelector('.donation-form__subtitle_closed');
const cardContainer = document.querySelector('.donation-form__card-container');
const cardUserInfo = document.querySelector('.donation-form__contacts-subsection');

const submitBtn = document.querySelector('.donation-form__submit-button');

const monthlyBtn = document.querySelector('.donation-form__monthly-button');
const daylyBtn = document.querySelector('.donation-form__dayly-button');

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

// Переключение кнопок со способом оплаты, появление и скрытие блока оплаты
btnVisaMir.addEventListener('click', () => {
	btnVisaMir.classList.toggle('donation-form__payment-visa_active');
	subtitleCard.style.display = 'block';
	cardContainer.style.display = 'block';
	cardUserInfo.style.display = 'grid';
	btnGooglePay.classList.remove('donation-form__payment-gpay_active');
	btnApplePay.classList.remove('donation-form__payment-apple_active');
})

btnGooglePay.addEventListener('click', () => {
	btnGooglePay.classList.toggle('donation-form__payment-gpay_active');
	subtitleCard.style.display = 'none';
	cardContainer.style.display = 'none';
	cardUserInfo.style.display = 'none';
	btnApplePay.classList.remove('donation-form__payment-apple_active');
	btnVisaMir.classList.remove('donation-form__payment-visa_active');
})

btnApplePay.addEventListener('click', () => {
	btnApplePay.classList.toggle('donation-form__payment-apple_active');
	subtitleCard.style.display = 'none';
	cardContainer.style.display = 'none';
	cardUserInfo.style.display = 'none';
	btnVisaMir.classList.remove('donation-form__payment-visa_active');
	btnGooglePay.classList.remove('donation-form__payment-gpay_active');
})

// Изменение сумм платежа при клике на кнопку "Ежемесячные"
monthlyBtn.addEventListener('click', () => {
	firstSumBtn.textContent = "1000";
	firstSumBtn.style.background = '#FFF';
	firstSumBtn.style.color = '#000';
	secondSumBtn.textContent = "5000";
	thirdSumBtn.textContent = "10000";
})

daylyBtn.addEventListener('click', () => {
	firstSumBtn.textContent = "5000";
	firstSumBtn.style.background = '#82607D';
	firstSumBtn.style.color = '#FFF';
	secondSumBtn.textContent = "10000";
	thirdSumBtn.textContent = "50000";
})
