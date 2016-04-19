import Backbone from 'backbone';
import JobModel from '../models/jobs.js';

const JobCollection = Backbone.Collection.extend({
	model: JobModel,
	url:  'http://small-tiyfe.herokuapp.com/collections/jobs'
});

export default new JobCollection();






