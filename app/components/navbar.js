import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../assets/fresh-logo.png';
import {Link} from 'react-router';

const NavBar = React.createClass({
	render: function(){
		return (
		<div>
			<div className = "logo-container">
				<img src = {logo} />
				<Link className='nav-logo'to="/">Fresh Jobs</Link>
			</div>
			<div className = "navbar-link-container">
				<a href="#">Jobs</a>
				<a href="#">Company</a>
				<a href="#">City</a>
				<a href="#">Why Fresh</a>
				 <Link className="navbar-link" to="jobpost">For Employers</Link>
			</div>
		</div>
		);
	}
});

export default NavBar;

