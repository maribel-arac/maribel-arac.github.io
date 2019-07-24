import React, { Component } from 'react';
import '../css/skills.css';

class Skills extends Component {


	render() {
		return(
			<div id="skills" className="container col-md-12 skillsBoarder">
				<div className="col-md-12 text-center">
					<p className="size">Skills</p>
				</div>
					<div className="row justify-content-center ">
							<div className="card col-md-4 text-center bg-transparent" >
							  <div className="card-header text">
							    SOFT
							  </div>
							  <ul className="list-group list-group-flush ">
							    <li className="list-group-item bg-transparent"><i className="fas fa-bezier-curve"></i> Team work</li>
							    <li className="list-group-item bg-transparent"> <i className="far fa-calendar-alt"></i> Organization</li>
							    <li className="list-group-item bg-transparent"><i className="far fa-comments"></i> Problem solving</li>
							    <li className="list-group-item bg-transparent"><i className="far fa-calendar-check"></i> Planning</li>
							    <li className="list-group-item bg-transparent"><i className="fas fa-arrows-alt-h"></i> Flexibility</li>
							    <li className="list-group-item bg-transparent"><i className="fab fa-angellist"></i> Adaptability</li>
							    <li className="list-group-item bg-transparent"><i className="fas fa-book"></i> Self-learner</li>
							  </ul>
							</div>

							<div className="card col-md-4  text-center bg-transparent" >
							  <div className="card-header text">
							    TECHNICAL
							  </div>
							  <ul className="list-group list-group-flush ">
							    <li className="list-group-item bg-transparent"><i className="devicon-javascript-plain"></i> Javascript</li>
							    <li className="list-group-item bg-transparent"><i className="devicon-react-original"></i> React.js</li>
							    <li className="list-group-item bg-transparent"><i className="devicon-github-plain"></i> Github</li>
							    <li className="list-group-item bg-transparent"><i className="devicon-html5-plain"></i> HTML5</li>
							    <li className="list-group-item bg-transparent"><i className="devicon-css3-plain"></i> CSS3</li>
							    <li className="list-group-item bg-transparent"><i className="devicon-git-plain"></i> Git</li>
							    <li className="list-group-item bg-transparent"><i className="devicon-bootstrap-plain"> </i>Bootstrap</li>
							  </ul>
							</div>
					</div>

			</div>

		);
	}
}







export default Skills;