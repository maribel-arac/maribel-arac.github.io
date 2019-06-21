import React, {Component} from 'react';
import Background from '../images/bg-image.JPG';
import '../css/header.css';



const myStyles = {
	backgroundImage: `url(${Background})`,
	height: '60vh',
	backgroundSize: 'cover'
}

class Header extends Component {


	render(){

		
		return (
			<header id="home" style={myStyles}>
				<h1>{this.props.title}</h1>
				<p>Frontend developer & Scrum Master Certified</p>
			</header>

			);


	}
};

export default Header;