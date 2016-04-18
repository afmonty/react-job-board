into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import JobItem from './jobitem';
import jobs from './../collections/jobCollection';


const JobList = React.createClass({
	var work = jobs.map(function(jobObject, index, array) {
    	return <JobItem jobTitle={jobObject.jtitle} 
    				company={jobObject.jcompany}
    				location={jobObject.jlocation}
    				desc={jobObject.jdesc}
    				keyword={jobObject.keyword} />;
		})
	ReactDOM.render(
    <div>
        {work}
    </div>,
    document.querySelector('main')
);
})









