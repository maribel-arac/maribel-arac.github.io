import React from 'react';
import pokemon from '../images/pokeball.jpeg';
import paws from '../images/paws.png';
import seafood from '../images/seafood.jpg';
import '../css/carouselProjects.css';


const CarouselProjects = () => {
	return (
			<div className="bd-example carousel">
			  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			    <ol className="carousel-indicators">
			      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
			      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
			      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
			    </ol>
			    <div className="carousel-inner">
			      <div className="carousel-item active">
			        <img src={paws} className="d-block w-100 paws" alt="paws" />
			        <div className="carousel-caption d-none d-md-block">
			          <h5>Paws</h5>
			          <p>Social network about lost pets. Filling a form in order to find your pet</p>
			          <p>TOOLS: React.js, Bootstrap, Firebase</p>
			        </div>
			      </div>
			      <div className="carousel-item">
			        <img src={seafood} className="d-block w-100 seafood" alt="seafood" />
			        <div className="carousel-caption d-none d-md-block">
			          <h5>Mariscos Selectos Perico</h5>
			          <p>Choosing from two menus, taking orders and deleting products</p>
			          <p>TOOLS: Firebase, React.js, bootstrap</p>
			        </div>
			      </div>
			      <div className="carousel-item">
			        <img src={pokemon} className="d-block w-100" alt="pokemon" />
			        <div className="carousel-caption d-none d-md-block">
			          <h5>PokeHack</h5>
			          <p>151 Pokemon filtered and sorted alphabetically and get to know their basic information, such as: name, type and weakenesses</p>
			          <p>TOOLS: Javascript, CSS3, HTML5</p>
			        </div>
			      </div>
			    </div>
			    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
			      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
			      <span className="carousel-control-next-icon" aria-hidden="true"></span>
			      <span className="sr-only">Next</span>
			    </a>
			  </div>
		</div>





		)
}

export default CarouselProjects;