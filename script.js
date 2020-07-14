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
console.log(backgroundPic);

//Functions for How To Play Button
const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

//Event Listeners for How to Play Button
openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

// Event Listener for Reset Button
resetBtn.addEventListener('click', resetGame);

let wordBank = ['BIKE', 'HELMET', 'DOG'];

// Randomizes the selection from the wordBank
const randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

// For loop to randomize word and add it to the page
for (let i = 0; i < randomWordChoice.length; i++) {
	letter = document.createElement('span');
	letter.innerText = '_____';
	letter.style.color = 'white';
	letter.classList.add('letter');
	wordPop.appendChild(letter);
}

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

	if (userInput === randomWordChoiceLetters[0]) {
		blankSpaces[0].innerText = userInput;
	} else if (userInput === randomWordChoiceLetters[1]) {
		blankSpaces[1].innerText = userInput;
	} else if (userInput === randomWordChoiceLetters[2]) {
		blankSpaces[2].innerText = userInput;
	} else if (userInput === randomWordChoiceLetters[3]) {
		blankSpaces[3].innerText = userInput;
	} else if (userInput === randomWordChoiceLetters[4]) {
		blankSpaces[4].innerText = userInput;
	} else if (userInput === randomWordChoiceLetters[5]) {
		blankSpaces[5].innerText = userInput;
	} else if (userInput === randomWordChoiceLetters[6]) {
		blankSpaces[6].innerText = userInput;
	} else {
		wrongGuess[numberOfWrongGuesses].innerText = userInput;
		numberOfWrongGuesses++;
		updatePic();
	}
}

// Event listener for Letter Guess button
enterBtn.addEventListener('click', playerGuess);

function resetGame() {
	wrongGuess.forEach((li) => (li.innerText = ' '));
	backgroundPic.src = 'Spaceman_Slide1-final.jpg';
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
	} else {
		backgroundPic.src = 'Spaceman_Slide1-final.jpg';
	}
}
