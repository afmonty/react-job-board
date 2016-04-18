
import Backbone from 'backbone';


const JobModel = Backbone.Model.extend({
	defaults: {
		jcompany: '',
		jlocation: '',
		jtitle: '',
		jdesc: '',
		jdate: '',
		keywords: []
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/jobs',
	idAttribute: '_id'
});

export default JobModel;