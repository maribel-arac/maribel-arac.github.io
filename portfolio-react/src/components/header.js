import React, {Component} from 'react';
import Background from '../images/back-img.jpg';
import './header.css';



const myStyles = {
	backgroundImage: `url(${Background})`,
	height: '50vh',
	backgroundSize: 'cover'
}

class Header extends Component {


	render(){

		
		return (
			<header style={myStyles}>
				<h1>{this.props.title}</h1>
				<p>Frontend developer</p>
			</header>

			);


	}
};

export default Header;