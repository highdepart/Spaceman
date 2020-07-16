// Grabbing elements for How to Play Button
const openBtn = document.getElementById('howToPlayModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
// Grabbing Element for hidden word
const wordPop = document.getElementById('wordPop');
// Grabbing Element for incorrect Guesses
const wrongGuess = document.querySelectorAll('li');
// Grabbing Element for Reset button
const resetBtn = document.querySelector('#resetBtn');
// Grabbing Element for background picture
const backgroundPic = document.querySelector('.gameBox');
// Grabbing Element for winning Modal box
const winnerModal = document.getElementById('youWonModal');
// Grabbing Element for close button within winning Modal
const closeWinningMod = document.getElementById('closeWinningModal');
// Variable that holds user Guesses
let userGuesses = [];

//Functions for How To Play Button
const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

// Function for closing the winning modal
const closeWinningModal = () => {
	winnerModal.style.display = 'none';
};

// Event Listen for Winning Modal
closeWinningMod.addEventListener('click', closeWinningModal);

//Event Listeners for How to Play Button
openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

// Event Listener for Reset Button
resetBtn.addEventListener('click', resetGame);

let wordBank = [
	'ACUMEN',
	'ABSURD',
	'ACORNS',
	'ALBINO',
	'ATOMIC',
	'HANGER',
	'KNOTS',
	'PAINT',
	'PANTS',
	'HALO',
	'BEAK',
	'RAINBOW',
	'REMATCH',
	'MANGO',
	'MACRO',
];

let randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

// function that takes randomized word and changes into __
function newWordGenerator() {
	wordPop.innerHTML = '';
	for (let i = 0; i < randomWordChoice.length; i++) {
		letter = document.createElement('span');
		letter.innerText = '_____';
		letter.style.color = 'chartreuse';
		letter.classList.add('letter');
		wordPop.appendChild(letter);
	}
}

// Function that displays modal when player wins.
function winningAlert() {
	winnerModal.style.display = 'block';
}

// Function that determines if player won
function checkWin() {
	if (userGuesses.length === randomWordChoice.length) {
		return winningAlert();
	}
}

// Generates the new word on the page
newWordGenerator();

// Grabbing Element for letter guess button
let enterBtn = document.querySelector('#enterGuess');

// Variable for number of wrong guesses within the function playerGuess
let numberOfWrongGuesses = 0;

// Function for letter guess button
function playerGuess(event) {
	event.preventDefault();
	// variable takes the word and splits into single letters
	let randomWordChoiceLetters = randomWordChoice.split('');
	// user input
	let userInput = document.querySelector('.input').value.toUpperCase();
	// variable for all the blank letter spaces.
	let blankSpaces = document.querySelectorAll('.letter');
	clearButton();

	if (userInput === randomWordChoiceLetters[0]) {
		blankSpaces[0].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[1]) {
		blankSpaces[1].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[2]) {
		blankSpaces[2].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[3]) {
		blankSpaces[3].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[4]) {
		blankSpaces[4].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[5]) {
		blankSpaces[5].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[6]) {
		blankSpaces[6].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[7]) {
		blankSpaces[7].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[8]) {
		blankSpaces[8].innerText = userInput;
		userGuesses.push(userInput);
	} else {
		wrongGuess[numberOfWrongGuesses].innerText = userInput;
		numberOfWrongGuesses++;
		updatePic();
	}
	checkWin();
}

// Event listener for Letter Guess button
enterBtn.addEventListener('click', playerGuess);

// Function to reset game
function resetGame() {
	numberOfWrongGuesses = 0;
	wrongGuess.forEach((li) => (li.innerText = ' '));
	backgroundPic.src = 'Spaceman_Slide1-final.jpg';
	randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	newWordGenerator();
	userGuesses = [];
}

// Function that updates background picture of ship.
function updatePic() {
	if (numberOfWrongGuesses == 1) {
		backgroundPic.src = 'Spaceman_Slide2_final.png';
	} else if (numberOfWrongGuesses == 2) {
		backgroundPic.src = 'Spaceman_Slide3_final.jpg';
	} else if (numberOfWrongGuesses == 3) {
		backgroundPic.src = 'Spaceman_Slide4_final.jpg';
	} else if (numberOfWrongGuesses == 4) {
		backgroundPic.src = 'Spaceman_Slide5_final.jpg';
	} else if (numberOfWrongGuesses == 5) {
		backgroundPic.src = 'Spaceman_Slide6_final.jpg';
	} else if (numberOfWrongGuesses == 6) {
		backgroundPic.src = 'Spaceman_Slide7_final.jpg';
	} else if (numberOfWrongGuesses == 7) {
		alert(
			'You lost and should feel bad. You also let everyone down....To make up for it, you should click Start/Reset to lose again!'
		);
	}
}
// Clears the input box for the user
function clearButton() {
	document.getElementById('myInput').value = '';
}
