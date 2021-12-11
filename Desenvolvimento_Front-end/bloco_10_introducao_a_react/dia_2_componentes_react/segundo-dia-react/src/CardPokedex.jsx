import React from 'react';

class CardPokedex extends React.Component {
	render() {
		const {
			image,
			name,
			type,
			averageWeight: { value, measurementUnit },
		} = this.props.pokemon;

		return (
			<section className='card'>
				<div className='info'>
					<p>{name}</p>
					<p>{type}</p>
					<p>
						Average {value} {measurementUnit}
					</p>
				</div>
				<div className='image'>
					<img src={image} alt='foto pokemon' />
				</div>
			</section>
		);
	}
}

export default CardPokedex;
