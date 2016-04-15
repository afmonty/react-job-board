import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../assets/fresh-logo.png';

const JobItem = React.createClass({
	render: function() {
		return (
		<div>
		<span className = 'posted-date'>yesterday</span>
		<h2 className = "job-title">Software Front End Engineer</h2>
		<div>
			<span className = 'job-location'>NSONE New York, NY</span>
			<p className = 'job-description'>Senior Front End Engineer. Solve hard problems with a team of Infrastructure pros. NSONE is based in New York...</p>
		</div>
		<div className = "job-keyword-list">angularjs</div>
		<div className = "job-keyword-list">d3.js</div>
		<div className = "job-keyword-list">javascript</div>
		<div className = "job-keyword-list">ui</div>
		<div className = "job-keyword-list">css</div>
		</div>
		);
	}
});

export default JobItem;