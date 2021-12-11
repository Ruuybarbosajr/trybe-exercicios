import { Component } from 'react';

class Image extends Component {
	render() {
		return <img src={this.props.source} alt={this.props.alternativeText}></img>;
	}
}

export default Image;

// nome do componente criado acima é Image.
// a tag image carregando dois atributos src e alt
// onde esses atributos ganham valor através do this.props.'nome-da-variável'
