import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import FilterBox from './filterbox.js';
import JobItem from './jobitem.js';
//import cat from "./../assets/orangecat.jpg";



ReactDOM.render(
    React.createElement(NavBar),
    document.querySelector('header'));

ReactDOM.render(
    React.createElement(FilterBox),
    document.querySelector('.filter-form'));

ReactDOM.render(
    React.createElement(JobItem),
    document.querySelector('.job-row'));


