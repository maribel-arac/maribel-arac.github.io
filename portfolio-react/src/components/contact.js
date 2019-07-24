import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {


	render() {
		return(
			<div  id="contact" className="container col-md-12 contactBorder">
				<div className="row">
					<div className="col col-md-6">
						<h1 className="contact">Contact </h1>
						<p className="content"> Are you interested to work with me? Check out my social networks </p>
					</div>
                        <div className="col col-md-6">
                            <a className="bg-transparent style-btn no-gutters" target="_blank" href="https://github.com/maribel-arac">
                                <img src="https://image.flaticon.com/icons/png/512/25/25657.png" class="img-fluid" alt="Responsive Github" />
                                <h3 className="text-center text">GitHub</h3>
                            </a>
                            <a className="bg-transparent style-btn no-gutters" target="_blank" href="https://www.linkedin.com/in/maribel-araiza-cañedo/">
                                <img src="https://image.flaticon.com/icons/png/512/61/61109.png" className="img-fluid" alt="Responsive Linkedin" />
                                <h3 className="text-center text">Linkedin</h3>
                            </a>
                        </div>
                    </div>

			</div>

		);
	}
}

export default Contact;