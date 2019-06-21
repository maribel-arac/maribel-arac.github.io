import React, { Component } from 'react';
import CarouselProjects from '../components/carouselProjects';
import '../css/projects.css';

class Projects extends Component {


	render() {
		return(
			<div id="projects" className="container col-md-12">
				<div className="row">
					<div className="col col-md-6 content">
						<h1>Projects </h1>
						<p> Some of them were created with JS, React and bootstrap </p>
					</div>
					<div className="col col-md-6">
						<CarouselProjects />
					</div>
				</div>

			</div>

		);
	}
}

export default Projects;