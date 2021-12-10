import { Component } from 'react';
import './Content.css';

const conteudos = [
	{
		conteudo: 'High Order Functions',
		bloco: 8,
		status: 'Aprendido',
	},
	{
		conteudo: 'Composicao de Componentes',
		bloco: 11,
		status: 'Aprendendo',
	},
	{
		conteudo: 'Composicao de Estados',
		bloco: 12,
		status: 'Aprenderei',
	},
	{
		conteudo: 'Redux',
		bloco: 16,
		status: 'Aprenderei',
	},
];

const makeList = (info) => {
	const { conteudo, bloco, status } = info;
	return (
		<li key={conteudo} className='card'>
			<p className='paragraph'> O conteúdo é: {conteudo}</p>
			<p className='paragraph'> Status: {status}</p>
			<p className='paragraph'>Bloco: {bloco}</p>
		</li>
	);
};

class Content extends Component {
	render() {
		return <ol key={'Contéudos'}>{conteudos.map(makeList)}</ol>;
	}
}
export default Content;
