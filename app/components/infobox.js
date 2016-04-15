import React from 'react';
import ReactDOM from 'react-dom';


const InfoBox = React.createClass({
	render: function() {
		return (
		<div className = 'info-box'>
		<h1 className = 'info-title'>Looking for a job?</h1>
		<span className = "info-create-a-profile">Create a Fresh Job profile and <strong>let employers come to you</strong></span>
		<div className = 'info-list-container'>
			<ul>
				<li className = 'info-list'>Employers search our databse and contact you</li>
				<li className = 'info-list'>Import easily from LinkedIn</li>
				<li className = 'info-list'>Link to Stack Overflow, GitHub, CodePlex and more</li>
			</ul>
		</div>
		<button className = "info-button">Create a Profile</button>
		</div>
		);
	}
});

export default InfoBox;