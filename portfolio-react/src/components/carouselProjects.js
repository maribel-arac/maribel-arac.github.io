import React from 'react';
import pokemon from '../images/pokeball.jpeg';
import paws from '../images/paws.png';
import seafood from '../images/seafood.jpg';
import '../css/carouselProjects.css';


const CarouselProjects = () => {
	return (
			<div className="bd-example carousel-size">
			  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			    <ol className="carousel-indicators">
			      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
			      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
			      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
			    </ol>
			    <div className="carousel-inner">
			      <div className="carousel-item active">
			        <img src={paws} className="d-block w-100" alt="paws" />
			        <div className="carousel-caption d-none d-md-block">
			          <h4 className= "paws-color">Paws</h4>
			          <p className="paws-color">Social network about lost pets. Filling a form about your pet and also include a picture in order to find it. </p>
			          <p className="paws-color">TOOLS: React.js, Bootstrap, Firebase</p>
			        </div>
			      </div>
			      <div className="carousel-item">
			        <img src={seafood} className="d-block w-100" alt="seafood" />
			        <div className="carousel-caption d-none d-md-block">
			          <h5 className="seafood-color">Mariscos Selectos Perico</h5>
			          <p className="seafood-color">Choosing from two menus, taking orders and deleting products</p>
			          <p className="seafood-color">TOOLS: Firebase, React.js, bootstrap</p>
			        </div>
			      </div>
			      <div className="carousel-item">
			        <img src={pokemon} className="d-block w-100" alt="pokemon" />
			        <div className="carousel-caption d-none d-md-block">
			          <h5>PokeHack</h5>
			          <p>151 Pokemon sorted alphabetically and get to know their basic information, such as: name, type & weakenesses</p>
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