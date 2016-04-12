import React from 'react';
import ReactDOM from 'react-dom';
//import NavItem from './navitem.js';
import logo from './../assets/fresh-logo.png';

const NavBar = React.createClass({
	render: function(){
		return (
		<div>
			<div className = "logo-container">
				<img src = {logo} />
				<span className = 'nav-logo'>Fresh Jobs</span>
			</div>
			<div className = "navbar-link-container">
				<a href="#">Jobs</a>
				<a href="#">Company</a>
				<a href="#">City</a>
				<a href="#">Why Fresh</a>
				<a href="#">For Employers</a>
			</div>
		</div>
		);
	}
});

export default NavBar;