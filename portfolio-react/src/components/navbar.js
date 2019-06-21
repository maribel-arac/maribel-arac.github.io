import React, {Component} from 'react';
import '../css/navbar.css';

class Navbar extends Component{

render() {

return (
		<nav className ="nav-menu sticky-top"> 
		<div>
	        <ul >
	          <li><a href="#home">Home</a></li>
	          <li><a href="#about">About</a></li>
	          <li><a href="#projects">Projects</a></li>
	          <li><a href="#skills">Skills</a></li>
	          <li><a href="#contact">Contact</a></li>
	        </ul>
	    </div>
    	</nav>
	)
}
}


export default Navbar;