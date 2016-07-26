var redux = require('redux');
var reducers = require('./reducers');

// creating a store using the 'createStore' method
var createStore = redux.createStore;

// telling it to use the repositoryReducer to handle any dispatched actions
var store = createStore(reducers.repositoryReducer);

module.exports = store;