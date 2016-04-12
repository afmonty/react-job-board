import React from 'react';
import ReactDOM from 'react-dom';
import weBelieve from "./../assets/we-believe.jpg";
import featured from "./../assets/max-play-logo.jpg";

const CompanyBox = React.createClass({
	render: function() {
		return (
		<div className = 'company-box'>
			<h1 className = 'company-title'>Company Information</h1>
			<div className = 'company-image-container'>
				<img src = {weBelieve} className = "we-believe"/>
			</div>
			<div className = 'company-featured'>
				<img src = {featured} className = "featured-image"/>
			</div>
			<div className = 'featured-logo'>
				<h1>MaxPlay</h1>
				<h2>Austin, TX</h2>
			</div>
		</div>
		);
	}
});

export default CompanyBox;