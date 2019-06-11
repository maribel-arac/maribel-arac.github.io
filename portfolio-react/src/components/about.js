import React, { Component } from 'react';
import Brand from '../images/brand.png';

class About extends Component {


	render() {
		return(
			<div className="container col-md-12">
				<div className="row">
					<div className="col col-md-6">
						<img className="image" src={Brand}/>
					</div>
					<div className="col col-md-6">
						<h1>About me </h1>
						<p> I used to teach English and French </p>
					</div>
				</div>

			</div>

		);
	}
}

export default About;