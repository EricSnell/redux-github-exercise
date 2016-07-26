var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');
var Repository = require('./repository');

var RepositoryList = React.createClass({
	addRepository: function() {
		var repositoryName = this.refs.repoName.value;
		this.props.dispatch(actions.addRepository(repositoryName));
	},

	render: function() {
		console.log(this.props);
		var repositories = this.props.repositories.map(function(repository) {
			return <Repository repository={repository} key={repository.name} />;
		});
		return (
			<div className="repository-list">
				{repositories}
				<input type="text" ref="repoName" />
				<button type="button" onClick={this.addRepository}>
					Add repository
				</button>
			</div>
		);
	}
});

//'mapStateToProps' describes how the different parts of the state should be inserted into the props of the component. In this case we say that the 'repositories' props should contain the entire state. 
var mapStateToProps = function(state, props) {
	return {
		repositories: state
	};
};

//The 'connect' function creates a factory that when called returns a container component wrapping the 'RepositoryList' component.
var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Container;