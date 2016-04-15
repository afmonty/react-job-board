import Backbone from 'backbone';


const CompanyModel = Backbone.Model.extend({
	defaults: {
		cname: '',
		clocation: '',
		clogo: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/company',
	idAttribute: '_id'
});

export default CompanyModel;