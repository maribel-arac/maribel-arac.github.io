import React from 'react';
import pokemon from '../images/pokeball.jpeg';
import paws from '../images/paws.png';
import seafood from '../images/seafood.png';
import '../css/carouselProjects.css';


const CarouselProjects = () => {
	return (
			<div className="bd-example carousel-size">
			  <h1 className="title">Projects </h1>
			  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			    <ul className="carousel-indicators">
			      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
			      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
			      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
			    </ul>
			    <div className="carousel-inner">
			      <div className="carousel-item active col-lg-12" data-interval="3000">
			      	<a target="_blank" href="https://maribel-arac.github.io/paws-react/#/" >
			        <img src={paws} className="d-block w-100 col-lg-8 img-fluid img-position" alt="paws" /> </a>
			        <div className="carousel-caption  d-md-block col-lg-8 content">
			          <h4 className= "text-center">Paws</h4>
			          <p className="paws-color text-center">Filling a form about your pet, include a picture in order to find it. </p>
			          <p className="paws-color text-center">TOOLS: React.js, Bootstrap, Firebase</p>
			        </div>
			      </div>
			      <div className="carousel-item col-lg-12" data-interval="3000">
			      	<a target="_blank" href="https://maribel-arac.github.io/GDL002-burger-queen/">
			        <img src={seafood} className="d-block w-100 img-fluid col-lg-8" alt="seafood" /> </a>
			        <div className="carousel-caption d-md-block col-lg-8">
			          <h5 className="seafood-color text-center ">Los Cotoyos</h5>
			          <p className="seafood-color text-center">Taking orders from two menus, deleting products and showing client's summary</p>
			          <p className="seafood-color text-center">TOOLS: React.js, Bootstrap, Firebase</p>
			        </div>
			      </div>
			      <div className="carousel-item col-lg-12" data-interval="3000">
			      	<a target="_blank" href="https://maribel-arac.github.io/GDL002-data-lovers/src/" >
			        <img src={pokemon} className="d-block w-100 img-fluid col-lg-8" alt="pokemon" /> </a>
			        <div className="carousel-caption d-md-block">
			          <h5 className="pokemon-color text-center">PokeHack</h5>
			          <p className=" pokemon-color text-center">151 Pokemon sorted alphabetically and get to know their basic information, such as: name, type & weakenesses</p>
			          <p className=" pokemon-color text-center">TOOLS: Javascript, CSS3, HTML5</p>
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