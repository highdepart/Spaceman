// Grabbing elements for How to Play Button
const openBtn = document.getElementById('howToPlayModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
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

// Grabbing Element for letter guess button
let enterBtn = document.querySelector('#enterGuess');
// Function for letter guess button
function playerGuess(event) {
	event.preventDefault();
	let userInput = document.querySelector('.input').value;
	if (userInput === 'e') {
		console.log('hello there mike');
	} else {
		console.log('hello there bob');
	}
}
// Event listener for Letter Guess button
enterBtn.addEventListener('click', playerGuess);
//
//
//
//
//
let wordBank = ['bike', 'dog', 'cat', 'bed', 'house'];
// function to breakdown array (wordBank) into single characters

console.log(wordBank);
const random = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(random);

for (let i = 0; i < random.length; i++) {
	const letter = document.createElement('span');
	letter.innerText = '_';
	letter.classList.add('letter');
	wordPop.appendChild(letter);
	console.log(wordBank);
}

// const words = {
// 	word1: "Bike",
// 	word2: "Dog",
// 	word3: "cat",
// 	wordGuess: function playerGuess (guess) {
// 		if (guess === this.word1 || guess === this.word2) {
// 			let splitWord = guess.split("")
// 			console.log(splitWord);
// 		}

// 	}

// };
// words.wordGuess("Dog");
