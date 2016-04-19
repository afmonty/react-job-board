import Backbone from 'backbone';


const UserModel = Backbone.Model.extend({
	defaults: {
		uname: '',
		ucity:'',
		uskills: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/users',
	idAttribute: '_id'
});

export default UserModel;