// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const makeMyJoke = (data) => {
	const hTwo = document.getElementById('jokeContainer');
	hTwo.innerText = data.joke;
};

const fetchJoke = () => {
	const myObject = {
		method: 'GET',
		headers: { Accept: 'application/json' },
	};
	fetch(API_URL, myObject)
		.then((response) => response.json())
		.then((data) => makeMyJoke(data));
};

window.onload = () => fetchJoke();
