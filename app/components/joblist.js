
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import JobItem from './jobitem';
import jobs from './../collections/jobCollection';


const JobList = React.createClass({
	getInitialState: function(){
		return {
			jobs: jobs
		};
	},

	componentDidMount: function () {
		this.state.jobs.on('update', () => {
			this.setState({
				jobs: this.state.jobs
			});
		});
		this.state.jobs.fetch();
	},

	componentWillUnmount: function() {
		this.state.jobs.off('update');
	},
	
	render: function () {
		let work = this.state.jobs.map(function(val, index, array) {
    		return <JobItem jtitle={val.get('jtitle')} 
	    				jcompany={val.get('jcompany')}
	    				jlocation={val.get('jlocation')}
	    				jdesc={val.get('jdesc')}
	    				keyword={val.get('keyword')} />;
		});
		
		return <div>{work}</div>
	}
	
});

export default JobList;







