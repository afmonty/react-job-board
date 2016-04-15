import Backbone from 'backbone';
import CompanyModel from '../models/company.js';

const CompanyCollection = Backbone.Collection.extend({
	model: CompanyModel,
	url:  'http://small-tiyfe.herokuapp.com/collections/company'
});

export default CompanyCollection;