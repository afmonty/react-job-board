
import React from 'react';
import ReactDOM from 'react-dom';
import JobCollection from './../collections/jobCollection.js'




const JobPost = React.createClass({
	getInitialState: function(){
		return {
			jobs: JobCollection
		};
	},
	submitJobPost: function(e) {
		e.preventDefault();
		this.state.jobs.create({
			jtitle: this.refs['job-title-input'].value,
			jcompany: this.refs['job-comp-input'].value,
			jlocation: this.refs['job-loc-input'].value,
			jdesc:  this.refs['job-desc-input'].value
		});
		
	},
	
	render: function(){
		return (
			<form className ='job-post-form' onSubmit = {this.submitJobPost}>
				<h2 className = "post-header">Post Your Job</h2>
				<h3 className = "post-job-title">Job Title</h3>
				<input type="text" ref = "job-title-input"/>
				<h3 className = "post-comp-name">Company Name</h3>
				<input type = "text" ref = "job-comp-input"/>
				<h3 className = "post-job-loc">Location</h3>
				<input type="text" ref = "job-loc-input"/>
				<h3 className = "post-job-desc">Job Description</h3>
				<input type = "text" ref = "job-desc-input"/>
				<button type = "submit">Submit Job</button>
			</form>
		);
	}
});

export default JobPost;
