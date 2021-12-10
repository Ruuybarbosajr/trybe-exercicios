import './App.css';

const Task = (value, index) => {
	return <li key={index}>{value}</li>;
};

function App() {
	return (
		<ol key={'alguma coisa'}>
			{[
				'acordar',
				'ir na academia',
				'almoçar',
				'estudar',
				'tomar cafe',
				'ver televisão',
			].map((elemento, index) => Task(elemento, index))}
		</ol>
	);
}

export default App;
