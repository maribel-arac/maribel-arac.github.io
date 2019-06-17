import React, {Component} from 'react';
import '../css/navbar.css';

class Navbar extends Component{

render() {

	const sections =['Home', 'About', 'Projects', 'Skills', 'Contact'];
	const navLinks = sections.map( section => {
		
		return(
			<li><a href={"#" + section}> {section} </a></li>
			)

	});

return (
		<nav className ="nav-menu sticky-top"> 
		<div>
	        <ul >
	          {navLinks}
	        </ul>
	    </div>
    	</nav>
	)
}
}


export default Navbar;