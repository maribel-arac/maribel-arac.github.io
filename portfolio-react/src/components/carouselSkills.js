import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import pokemon from '../images/pokemon.jpg';
import paws from '../images/paws.jpg';
import './carouselProjects.css';

const properties = {
	duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
const CarouselSkills = () => {
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
			</Slide> 

		</div>
		)
}

export default CarouselSkills;