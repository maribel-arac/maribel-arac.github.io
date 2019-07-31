import React, { Component } from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import '../css/contact.css';

class Contact extends Component {


	render() {
		return(
			<div  id="contact" className="container  col-lg-12 contactBorder">
				<div className="row">
					<div className="col-8 col-sm-8 col-md-8 col-lg-8 align-content-center mx-auto">
						<h1 className="contact col-12 col-sm-12 col-md-12 col-lg-12 text-center">Contact </h1>
						<p className="content col-12 col-sm-12 col-md-12 col-lg-12 text-center "> Have a question or want work together?</p>
					</div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 align-self-center mx-auto">
                            <a target="_blank" className="col-6 col-sm-6 col-md-6 col-lg-6 text-center" href="https://github.com/maribel-arac">
                               <img src={github} className="logo-git im-fluid mx-auto" /> </a>
                               
                            
                            <a target="_blank" className="col-6 col-sm-6 col-md-6 col-lg-6 text-center" href="https://www.linkedin.com/in/maribel-araiza-cañedo/">
                                <img src={linkedin} className="logo-link img-fluid mx-auto" /> </a>
                                
                        </div>
                </div>

			</div>

		);
	}
}

export default Contact;