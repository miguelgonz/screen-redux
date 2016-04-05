import React from 'react';
import Profiles from './Profiles.jsx';
import Button from './Button.jsx';
import Filters from './Filters.jsx';

module.exports = React.createClass({
	componentWillReceiveProps: function (nextProps) {
		console.log(nextProps);
	},
	render: function () {
			return <div className="app">
				<div className="btn-group">
						<Button icon="ok" type="success" onClick={this.props.onClick} label="Resolve" />
						<Button icon="plus" onClick={this.props.onAddProfile} label="Add Profile" />
				</div>

				<Filters onFilterChange={this.props.onFilterChange} />

				<Profiles data={this.props.profiles} />
			</div>;
	}
});

