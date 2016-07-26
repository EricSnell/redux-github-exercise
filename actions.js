/* Actions are represented by simple objects which have a 'type' property (a string that represents the type of action you're carrying out). Actions are dispatched when your app wants to change it's state, and then are handled by a Reducer. */

var ADD_REPOSITORY = 'ADD_REPOSITORY';
// Action that adds a repository to the list
var addRepository = function(repository) {
	return {
		type: ADD_REPOSITORY,
		repository: repository
	}
};

var RATE_REPOSITORY = 'RATE_REPOSITORY';
// Action that gives a repository a rating
var rateRepository = function(repository, rating) {
	return {
		type: RATE_REPOSITORY,
		repository: repository,
		rating: rating
	}
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;