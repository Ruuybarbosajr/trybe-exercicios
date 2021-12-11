// import Greeting from './fixação-props/Greeting';
// import './App.css';
// import Image from './fixação-props/Image';
// function App() {
// 	return (
// 		<>
// 			<Greeting name='Ruy' lastName='Barbosa Jr.' />
// 			<Image
// 				source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
// 				alternativeText='Cute cat staring'
// 			/>
// 		</>
// 	);
// }

// export default App;
// src/App.js
// import React from 'react';
// import Album from './fixação-componentes/Album';

// class App extends React.Component {
// 	render() {
// 		// Declaração do objeto contendo informações do album01
// 		const album01 = {
// 			image:
// 				'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
// 			title: 'Mylo Xyloto',
// 			releaseDate: {
// 				year: '2011',
// 				month: '10',
// 				day: '24',
// 			},
// 			others: {
// 				recordCompany: 'Capitol, Parlophone',
// 				formats: 'CD, digital',
// 			},
// 		};

// 		// Declaração do objeto contendo informações do album02
// 		const album02 = {
// 			image:
// 				'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
// 			title: 'Ghost Stories',
// 			releaseDate: {
// 				year: '2014',
// 				month: '05',
// 				day: '16',
// 			},
// 			others: {
// 				recordCompany: 'Parlophone',
// 				formats: 'CD, digital',
// 			},
// 		};

// 		// Retorno do que será renderizado
// 		return (
// 			<section>
// 				<Album album={album01} />
// 				<Album album={album02} />
// 			</section>
// 		);
// 	}
// }

// export default App;
// arquivo App.js, criado pelo create-react-app, modificado
// import React from 'react';
// import './App.css';
// import UserProfile from './fixação-componentes/UserProfile';

// class App extends React.Component {
// 	render() {
// 		const users = [
// 			{
// 				id: 102,
// 				name: 'João',
// 				email: 'joao@gmail.com',
// 				avatar:
// 					'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
// 			},

// 			{
// 				id: 77,
// 				name: 'Amélia',
// 				email: 'amelia@gmail.com',
// 				avatar:
// 					'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
// 			},
// 		];

// 		return (
// 			<div className='App'>
// 				{users.map((user, index) => (
// 					<UserProfile key={index} user={user} />
// 				))}
// 			</div>
// 		);
// 	}
// }

// export default App;
// arquivo App.js, criado pelo create-react-app, modificado
// import React from 'react';
// import './App.css';
// import Order from './fixação-componentes/Order';

// class App extends React.Component {
// 	render() {
// 		const headphone = {
// 			id: 102,
// 			user: 'cena@gmail.com',
// 			product: 'Razer Headphone',
// 			price: {
// 				value: 99.99,
// 				currency: 'dollars',
// 			},
// 		};

// 		const energyDrink = {
// 			id: 77,
// 			user: 'cena@gmail.com',
// 			product: 'Monster 500mL',
// 			price: {
// 				value: 9.99,
// 				currency: 'dollars',
// 			},
// 		};

// 		return (
// 			<div className='App'>
// 				<h1> Orders recently created </h1>
// 				<Order order={headphone} />
// 				<Order order={energyDrink} />
// 			</div>
// 		);
// 	}
// }

// export default App
// import './App.css';
// import List from './List';

// function App() {
// 	const arr = [1, 8, 5, 9, 2, 7, 5];
// 	return <List conteudo={arr} />;
// }

// export default App;
import Title from './Title';
import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';

function App() {
	return (
		<>
			<Title title='Pokedex' />
			<Pokedex arrPokemons={pokemons} />
		</>
	);
}

export default App;
