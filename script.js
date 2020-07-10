// Grabbing elements for How to Play
const openBtn = document.getElementById('howToPlayModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

//Functions for How To Play
const openModal = () => {
	modal.style.display = 'block';
};

const closeModal = () => {
	modal.style.display = 'none';
};

//Event Listeners for How to Play
openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);