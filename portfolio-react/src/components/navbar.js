import React, {Component} from 'react';

class Navbar extends Component{

render() {

	const sections =['Home', 'About', 'Projects', 'Skills', 'Contact'];
	const navLinks = sections.map( section => {
		
		return(
			<li><a href={"#" + section}> {section} </a></li>
			)

	});

return (
		<nav className ="nav-menu"> 
	        <ul >
	          {navLinks}
	        </ul>
    	</nav>
	)
}
}


export default Navbar;