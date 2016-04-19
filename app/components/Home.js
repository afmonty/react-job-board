import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../components/navbar.js';
import FilterBox from './../components/filterbox.js';
import JobItem from './../components/jobitem.js';
import InfoBox from './../components/infobox.js';
import CompanyBox from './../components/companybox.js';
import JobPost from './../components/job-post.js';
import JobList from './../components/joblist.js';

export default React.createClass({
	render: function() {
		return(
			<div>
			<header><NavBar/></header>
			<form className = "filter-form"><FilterBox/></form>
			<div className = 'job-row'><JobList/></div>
			</div>
		);
	}
});

