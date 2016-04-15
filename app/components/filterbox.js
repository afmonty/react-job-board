import React from 'react';
import ReactDOM from 'react-dom';




const FilterBox = React.createClass({
	render: function(){
		return (
			<div>
				<div className = "search-keyword">
				<h3 class = "search">Key Words</h3>
				<input type="text"/>
			</div>
			<div className = "search-location">
				<h3 class = "search">Location</h3>
				<input type="text"/>
			</div>
			<button>Search</button>
			</div>
		);
	}
});
export default FilterBox;