/*Reducers respond to actions they receive and modify the state. It is just a function that takes two arguments (the current state, an action). The function should return the changed state. The reducer is run every time a new action is dispatched, updating the state accordingly.*/

var actions = require('./actions');
var initialRepositoryState = [];
// In the Reducer we check to see what type the action has
var repositoryReducer = function(state, action) {
	state = state || initialRepositoryState;
	if (action.type === actions.ADD_REPOSITORY) {
		// append new object to the state using the array concat method
		return state.concat({
			name: action.repository,
			rating: null
		});
	}
	else if (action.type === actions.RATE_REPOSITORY) {
		// Find the index of the matching repository
		var index = -1;
		for (var i = 0; i < state.length; i++) {
			// set object as variable
			var repository = state[i];
			// if matching repository names, set index to position and break
			if (repository.name === action.repository) {
				index = i;
				break;
			}
		}
		// if no match was found, throw error
		if (index === -1) {
			throw new Error('Could not find repository');
		}
		// create array with everything before the repos position
		var before = state.slice(0, i);	
		// create array with everything after the repos position
		var after = state.slice(i + 1);
		// create new object, targeting an empty object combining the repository and a rating property
		var newRepository = Object.assign({}, repository, {rating: action.rating});
		// put the array back together using concat, including the updated object and return
		return before.concat(newRepository, after);
	}

	return state;
};

exports.repositoryReducer = repositoryReducer;