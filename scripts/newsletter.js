const emailInput = document.querySelector('.newsletter__input');
const clearButton = document.querySelector('.newsletter__clearButton');
const placeholder = document.querySelector('.newsletter__placeholder-container');

emailInput.addEventListener('input', hideItems);
placeholder.addEventListener('input', hideItems);
clearButton.addEventListener('click', clearInput);

function hideItems() {
	if (emailInput.value) {
		clearButton.classList.remove('newsletter__clearButton_hidden');
		placeholder.classList.add('newsletter__placeholder-container_hidden');
	} else {
		clearButton.classList.add('newsletter__clearButton_hidden');
		placeholder.classList.remove('newsletter__placeholder-container_hidden');
	}
}

function clearInput() {
	emailInput.value = '';
	clearButton.classList.add('newsletter__clearButton_hidden');
	placeholder.classList.remove('newsletter__placeholder-container_hidden');
}
