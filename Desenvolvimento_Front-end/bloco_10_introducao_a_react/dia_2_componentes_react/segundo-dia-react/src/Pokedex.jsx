import React from 'react';
import CardPokedex from './CardPokedex';

class Pokedex extends React.Component {
	render() {
		const { arrPokemons } = this.props;
		return (
			<section className='container'>
				{arrPokemons.map((pokemon, index) => (
					<CardPokedex key={index} pokemon={pokemon} />
				))}
			</section>
		);
	}
}

export default Pokedex;
