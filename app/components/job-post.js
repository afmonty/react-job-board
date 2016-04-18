
import React from 'react';
import ReactDOM from 'react-dom';




const JobPost = React.createClass({
	render: function(){
		return (
			<div>
				<div className = "jobpost-box">
				<h2 className = "post-header">Post Your Job</h2>
				<h3 className = "post-job-title">Job Title</h3>
				<input type="text"/>
				<h3 className = "post-comp-name">Company Name</h3>
				<input type = "text"/>
				<h3 className = "post-job-loc">Location</h3>
				<input type="text"/>
				<h3 className
			</div>
			<button>Search</button>
			</div>
		);
	}
});
export default JobPost;