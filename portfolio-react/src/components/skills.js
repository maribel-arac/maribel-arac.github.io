import React, { Component } from 'react';
import CarouselSkills from '../components/carouselSkills';
import '../css/skills.css';

class Skills extends Component {


	render() {
		return(
			<div id="skills" className="container col-md-12 skillsBoarder">
				<div className="row">
					<div className="col col-md-6">
						<CarouselSkills />
					</div>
					<div className="col col-md-6">
						<h1>Skills </h1>
						<p> I have been learning about technical and soft skills </p>
					</div>
				</div>

			</div>

		);
	}
}

export default Skills;