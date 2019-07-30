import React, { Component } from 'react';
import CarouselProjects from '../components/carouselProjects';
import '../css/projects.css';

class Projects extends Component {


	render() {
		return(
			<div id="projects" className="container col-md-12 col-xl-12 col-lg-12">
				<div className="row">
					<div className="col col-md-12 col-xl-12 col-lg-12 paddingBorder ">
						<CarouselProjects />
					</div>
				</div>
			</div>

		);
	}
}

export default Projects;