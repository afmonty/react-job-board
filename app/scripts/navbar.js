import React from 'react';
import ReactDOM from 'react-dom';
//import NavItem from './navitem.js';
import logo from './../assets/fresh-logo.png';
const NavBar = React.createClass({
	render: function(){
		return (
		<div>
			<img src = {logo} />
			<a href="#">Jobs</a>
			<a href="#">Company</a>
			<a href="#">City</a>
			<a href="#">Why Fresh</a>
			<a href="#">For Employers</a>
		</div>
		);
	}
});
export default NavBar;