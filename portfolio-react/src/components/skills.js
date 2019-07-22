import React, { Component } from 'react';
import '../css/skills.css';

class Skills extends Component {


	render() {
		return(
			<div id="skills" className="container col-md-12 skillsBoarder">
				<div className="col-md-12 text-center">
					<h1>Skills</h1>
				</div>
					<div className="row justify-content-center ">
							<div class="card col-md-4 text-center bg-transparent" >
							  <div class="card-header">
							    SOFT
							  </div>
							  <ul class="list-group list-group-flush ">
							    <li class="list-group-item bg-transparent">Team work</li>
							    <li class="list-group-item bg-transparent">Organization</li>
							    <li class="list-group-item bg-transparent">Problem solving</li>
							    <li class="list-group-item bg-transparent">Planning</li>
							    <li class="list-group-item bg-transparent">Flexibility</li>
							    <li class="list-group-item bg-transparent">Adaptability</li>
							    <li class="list-group-item bg-transparent">Self-learner</li>
							  </ul>
							</div>

							<div class="card col-md-4 text-center bg-transparent" >
							  <div class="card-header">
							    TECHNICAL
							  </div>
							  <ul class="list-group list-group-flush ">
							    <li class="list-group-item bg-transparent">Javascript</li>
							    <li class="list-group-item bg-transparent">React.js</li>
							    <li class="list-group-item bg-transparent">Git/Github</li>
							    <li class="list-group-item bg-transparent">Firebase</li>
							    <li class="list-group-item bg-transparent">Figma</li>
							    <li class="list-group-item bg-transparent">Scrum</li>
							    <li class="list-group-item bg-transparent">Bootstrap</li>
							  </ul>
							</div>
					</div>

			</div>

		);
	}
}

export default Skills;