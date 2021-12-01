const urlApi = `https://api.coincap.io/v2/assets`;

const makeMyHtml = (data) => {
	const ol = document.querySelector('ol');
	const li = document.createElement('li');
	li.innerText = `${data.name} (${data.symbol}): ${data.priceUsd}`;
	ol.appendChild(li);
};

const getDataApi = () => {
	fetch(urlApi)
		.then((response) => response.json())
		.then((data) => data.data)
		.then((element) =>
			element.filter(({ rank }) => rank <= 10).map(makeMyHtml)
		);
};


window.onload = () => getDataApi();
// window.onload = async () => console.log(await getDataApi());
// arrData
