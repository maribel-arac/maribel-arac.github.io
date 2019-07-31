import React, { Component } from 'react';
import CarouselProjects from '../components/carouselProjects';
import '../css/projects.css';

class Projects extends Component {


	render() {
		return(
			<div id="projects" className="container col-8 col-sm-8 col-md-8 col-lg-8">
				<div className="row">
					<div className="col paddingBorder ">
						<CarouselProjects />
					</div>
				</div>
			</div>

		);
	}
}

export default Projects;