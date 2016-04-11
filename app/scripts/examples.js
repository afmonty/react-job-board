// // import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
// import './../styles/main.scss';
// import React from 'react';
// import ReactDOM from 'react-dom';

// // import a module from another file.
// import tiy from './app.js';

// // Looks like the imported module was a function, because here we're executing it!
// tiy();

// const TestComponent = React.createClass({
// 	render: function() {
// 		return <h1 className = "hello" htmlFor = "??what goes here ">Test~</h1>;  //this is jsx which is html like
// 	}
// });

// ReactDOM.render(<TestComponent />, document.querySelector('main'));

// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import cat from "./../assets/orangecat.jpg";

const ListItem = React.createClass({
	render: function() {
		return (
		<li>
		<img src = {cat} />
		this is a list item</li>
		);
	}
});

const List = React.createClass({
	render: function(){
		let myListItems = [
			<ListItem key="1" />,
			<ListItem key="2" />,
			<ListItem key="3" />,
			<ListItem key="4" />
		];
		return (
			<ul>
			{myListItems}
			</ul>
		);
	}
});

const HelloReactComponent = React.createClass({
    render: function() {
        // return <section></section>
        return React.createElement(
            'h1',
            {className: 'foo'},
            React.createElement(
                'div',
                {},
                'This is a div'
            )
        );


    }
});

ReactDOM.render(
    React.createElement(HelloReactComponent),
    document.querySelector('main'));

ReactDOM.render(<List />, document.querySelector('main'));




