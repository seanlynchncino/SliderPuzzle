let openButtonId;

const NUMBER_OF_BUTTONS = 16;
const NUMBER_OF_ROWS = Math.sqrt(NUMBER_OF_BUTTONS);
const SIZE_OF_BUTTON = 50;

function setSelected(currentButtonId) {
	let currentButtonIndex = getButtonIndexFromId(currentButtonId);
	if (isValidButton(currentButtonIndex)) {
		let currentElement = document.getElementById(currentButtonId);
		let openElement = document.getElementById(openButtonId);
		openElement.style.backgroundImage = currentElement.style.backgroundImage;
		openElement.style.backgroundPosition = currentElement.style.backgroundPosition;
		currentElement.style.backgroundImage = "none";
		openButtonId = currentButtonId;
	}
}

function getButtonIndexFromId(buttonId) {
	console.log(buttonId);
	return parseInt(buttonId.replace('button', ''));
}

function getDifferenceInColumns(buttonIndex, openButtonIndex) {
	return Math.abs(getColumn(buttonIndex) - getColumn(openButtonIndex));
}

function getDifferenceInRows(buttonIndex, openButtonIndex) {
	return Math.abs(getRow(buttonIndex) - getRow(openButtonIndex));
}

function isValidButton(buttonIndex) {
	let openButtonIndex = getButtonIndexFromId(openButtonId);
	if (getDifferenceInColumns(buttonIndex, openButtonIndex) <= 1 && getDifferenceInRows(buttonIndex,
		openButtonIndex) === 0) {
		return true;
	} else {
		return getDifferenceInColumns(buttonIndex, openButtonIndex) === 0 && getDifferenceInRows(
			buttonIndex, openButtonIndex) <= 1
	}
}

function getBackgroundPosition(buttonIndex) {
	return '' + getHorizontalPosition(buttonIndex) + 'px ' + getVerticalPosition(buttonIndex) + 'px';
}

function getHorizontalPosition(buttonIndex) {
	return -1 * SIZE_OF_BUTTON * getColumn(buttonIndex);
}

function getVerticalPosition(buttonIndex) {
	return -1 * SIZE_OF_BUTTON * getRow(buttonIndex);
}

function getRow(buttonIndex) {
	return Math.floor(buttonIndex / NUMBER_OF_ROWS);
}

function getColumn(buttonIndex) {
	return buttonIndex % NUMBER_OF_ROWS;
}

function getRandomButtonId() {
	return 'button' + Math.floor(Math.random() * NUMBER_OF_BUTTONS);
}

function setFirstOpenButton() {
	openButtonId = getRandomButtonId();
	setSelected(openButtonId);
}

function initializeButtons() {
	for (let buttonIndex = 0; buttonIndex < NUMBER_OF_BUTTONS; buttonIndex++) {
		let currentButton = document.getElementById('button' + buttonIndex);
		currentButton.style.backgroundPosition = getBackgroundPosition(buttonIndex);
		currentButton.onclick = function() {
			let currentButtonId = 'button' + buttonIndex;
			setSelected(currentButtonId);
		};
	}
}

function startGame() {
	initializeButtons();
	setFirstOpenButton();
}

startGame();


