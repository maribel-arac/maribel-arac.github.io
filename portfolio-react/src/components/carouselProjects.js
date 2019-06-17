import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import pokemon from '../images/pokeball.jpeg';
import paws from '../images/paws.jpg';
import seafood from '../images/seafood.jpg';
import './carouselProjects.css';

const properties = {
	duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
const CarouselProjects = () => {
	return (
		<div className="containerSlide">
			<Slide {...properties}>
				<div className="each-slide">
					<div>
						<img src={pokemon} alt="pokemon" />
					</div>
				</div>
				<div className="each-slide">
					<div>
						<img src={paws} alt="paws" />
					</div>
				</div>
				<div className="each-slide">
					<div>
						<img src={seafood} alt="seafood" />
					</div>
				</div>
			</Slide> 

		</div>
		)
}

export default CarouselProjects;