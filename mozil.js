let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'mozz.png') {
		myImage.setAttribute('src', 'firefox2..png');
	} else {
		myImage.setAttribute('src', 'mozz.png');
	}
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Пожалуйста введите свое имя');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to Mozilla,' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to Mozilla,' + storedName;
}

myButton.onclick = function() {
	setUserName();
};
