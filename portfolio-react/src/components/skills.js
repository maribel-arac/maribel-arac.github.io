import React, { Component } from 'react';
import CarouselSkills from '../components/carouselSkills';

class Skills extends Component {


	render() {
		return(
			<div className="container col-md-12">
				<div className="row">
					<div className="col col-md-6">
						<CarouselSkills />
					</div>
					<div className="col col-md-6">
						<h1>Skills </h1>
						<p> I learnt about technical and soft skills </p>
					</div>
				</div>

			</div>

		);
	}
}

export default Skills;