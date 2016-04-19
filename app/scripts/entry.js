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
import router from './../components/react-router.js';

//import cat from "./../assets/orangecat.jpg";

ReactDOM.render(
	router,
	document.querySelector('main'));

// ReactDOM.render(
//     React.createElement(NavBar),
//     document.querySelector('header'));

// ReactDOM.render(
//     React.createElement(FilterBox),
//     document.querySelector('.filter-form'));

// ReactDOM.render(
//     React.createElement(JobList),
//     document.querySelector('.job-row'));

// ReactDOM.render(
//     React.createElement(InfoBox),
//     document.querySelector('.info-box-container'));

// ReactDOM.render(
//     React.createElement(CompanyBox),
//     document.querySelector('.company-info-container'));

 
