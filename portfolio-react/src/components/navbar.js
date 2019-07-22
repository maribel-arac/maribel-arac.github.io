import React, {Component} from 'react';
import '../css/navbar.css';

class Navbar extends Component{

render() {

return (
	
		<nav className ="navbar-nav navbar-dark text sticky-top  navbar navbar-expand-md">
		<p className="name">Maribel</p>
				<button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		    		<span className="navbar-toggler-icon"></span>
		  		</button> 
				<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
					<ul class="navbar-nav ">
					  <li class=" nav-item">
					    <a class="nav-link" href="#home">Home</a>
					  </li>
					  <li class=" nav-item">
					    <a class="nav-link" href="#about">About</a>
					  </li>
					  <li class="  nav-item">
					    <a class="nav-link" href="#projects">Projects</a>
					  </li>
					  <li class=" nav-item">
					    <a class="nav-link" href="#skills">Skills</a>
					  </li>
					  <li class=" nav-item">
					    <a class="nav-link" href="#contact">Contact</a>
					  </li>
					</ul>
			    </div>
	    </nav>
	)
}
}


export default Navbar;