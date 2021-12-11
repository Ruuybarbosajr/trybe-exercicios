import { Component } from 'react';
import Image from '../fixação-props/Image';

class UserProfile extends Component {
	render() {
		return (
			<section>
				<p>{this.props.user.name}</p>
				<p>{this.props.user.email}</p>
				<Image source={this.props.user.avatar} alternativeText='User avatar' />
			</section>
		);
	}
}

export default UserProfile;
