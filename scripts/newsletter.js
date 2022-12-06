let emailInput = document.querySelector('.newsletter__input');
let clearButton = document.querySelector('.newsletter__clearButton');

emailInput.addEventListener("input", hideClearButton);
clearButton.addEventListener('click', clearInput);

function hideClearButton() {
	if (emailInput.value) {
		clearButton.classList.remove('newsletter__clearButton_hidden');
	} else {
		clearButton.classList.add('newsletter__clearButton_hidden');
	}
}

function clearInput() {
	emailInput.value = '';
	clearButton.classList.add('newsletter__clearButton_hidden');
}
