import React from 'react';
import Profiles from './Profiles.jsx';
import Button from './Button.jsx';
import Filters from './Filters.jsx';

module.exports = React.createClass({
	render: function () {
			const actionDisabled = !this.props.canAction;
			return <div className="app">
				<div className="btn-group">
						<Button disabled={actionDisabled} icon="ok" type="success" onClick={this.props.onResolve} label="Resolve" />
						<Button disabled={actionDisabled} icon="remove" type="danger" onClick={this.props.onReject} label="Reject" />
						<Button icon="plus" onClick={this.props.onAddProfile} label="Add Profile" />
				</div>

				<Filters onFilterChange={this.props.onFilterChange} />

				<h2>Unresolved</h2>
				<Profiles onProfileChecked={this.props.onProfileChecked} data={this.props.profiles} />

				<h2>Resolved</h2>
				<Profiles data={this.props.resolvedProfiles} />
			</div>;
	}
});

