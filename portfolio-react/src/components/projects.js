import React, { Component } from 'react';
import CarouselProjects from '../components/carouselProjects';
import '../css/projects.css';

class Projects extends Component {


	render() {
		return(
			<div id="projects" className="container col-xl-12 projectsBoarder ">
				<div className="row">
					<div className="col col-md-6 col-xl-12 col-sm-2 content">
						<h1 className="text-margin">Projects </h1>
						<p className="text-margin text-size">You can have a look at some of my projects which I used different tools and covered various topics </p>
					</div>
					<div className="col col-md-6 col-xl-12">
						<CarouselProjects />
					</div>
				</div>

			</div>

		);
	}
}

export default Projects;