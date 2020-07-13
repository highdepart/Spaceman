// Grabbing elements for How to Play Button
const openBtn = document.getElementById('howToPlayModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
// Element for hidden word
const wordPop = document.getElementById('wordPop');
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

let wordBank = ['bike'];
// function to breakdown array (wordBank) into single characters

// Randomizes the selection from the wordBank
const randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

// For loop to randomize word and add it to the page
for (let i = 0; i < randomWordChoice.length; i++) {
	letter = document.createElement('span');
	letter.innerText = '_____';
	letter.classList.add('letter');
	wordPop.appendChild(letter);
	console.log(randomWordChoice);
}

// Grabbing Element for letter guess button
let enterBtn = document.querySelector('#enterGuess');
// Function for letter guess button
function playerGuess(event) {
	event.preventDefault();
	let randomWordChoiceLetters = randomWordChoice.split('');
	console.log(randomWordChoiceLetters[0]);
	let userInput = document.querySelector('.input').value;
	if (userInput === randomWordChoiceLetters[0]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[1]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[2]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[3]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[4]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[5]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[6]) {
		console.log('hello there mike');
	} else if (userInput === randomWordChoiceLetters[7]) {
		console.log('hello there mike');
	} else {
		console.log('hello there bob');
	}
}
// Event listener for Letter Guess button
enterBtn.addEventListener('click', playerGuess);
