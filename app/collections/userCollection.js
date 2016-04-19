import Backbone from 'backbone';
import UserModel from '../models/user.js';

const UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url:  'http://small-tiyfe.herokuapp.com/collections/users'
});

export default new UserCollection();