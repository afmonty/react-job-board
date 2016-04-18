import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../assets/fresh-logo.png';

const JobItem = React.createClass({
	render: function() {
		return (
		<div>
		<span className = 'posted-date'>{this.props.jdate}</span>
		<h2 className = "job-title">{this.props.jtitle}</h2>
		<div>
			<span className = 'job-location'>{this.props.jlocation}</span>
			<p className = 'job-description'>{this.props.desc}</p>
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