import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {


	render() {
		return(
			<div  id="contact" className="container col-xl-12 contactBorder">
				<div className="row">
					<div className="col col-md-6 col-xl-12">
						<h1 className="contact">Contact </h1>
						<p className="content"> Are you interested to work with me? Check out my social networks </p>
					</div>
                        <div className="col col-md-6 col-xl-12">
                            <a className="bg-transparent" target="_blank" href="https://github.com/maribel-arac">
                               <i className="fab fa-github center"></i>
                                <h3 className="text-center text">GitHub</h3>
                            </a>
                            <a className="bg-transparent" target="_blank" href="https://www.linkedin.com/in/maribel-araiza-cañedo/">
                                <i className="fab fa-linkedin-in center"></i>
                                <h3 className="text-center text">Linkedin</h3>
                            </a>
                        </div>
                    </div>

			</div>

		);
	}
}

export default Contact;