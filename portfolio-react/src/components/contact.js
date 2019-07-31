import React, { Component } from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import '../css/contact.css';

class Contact extends Component {


	render() {
		return(
			<div  id="contact" className="container  col-lg-12 contactBorder">
				<div className="row">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 ">
						<h1 className="contact col-6 col-sm-6 col-md-6 col-lg-6">Contact </h1>
						<p className="content "> Have a question or want work together?</p>
					</div>
                        <div className="col  col-sm-6 col-md-4 col-lg-4">
                            <a target="_blank" href="https://github.com/maribel-arac">
                               <img src={github} className="logo-btn im-fluid" /> </a>
                                <h3 className="text-center">GitHub</h3>
                            
                            <a target="_blank" href="https://www.linkedin.com/in/maribel-araiza-cañedo/">
                                <img src={linkedin} className="logo-btn img-fluid" /> </a>
                                <h3 className="text-center">Linkedin</h3>
                        </div>
                </div>

			</div>

		);
	}
}

export default Contact;