import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../components/navbar.js';
import JobPost from './../components/job-post.js';


export default React.createClass({
	render: function() {
		return(
			<div>
			<header><NavBar/></header>
			<div className = 'job-post-container'><JobPost/></div>
			</div>
		);
	}
});