import React from 'react';
import ProgressBar from './ProgressBar.jsx';

module.exports = React.createClass({
		toggle: function () {
				this.refs.checkbox.checked = !this.refs.checkbox.checked;
				this.props.onCheckToggle(this.props.profile.key, this.refs.checkbox.checked);
		},
		render: function () {
				const profile = this.props.profile;

				let className = '';
				let progressBar = '';
				if (profile.status === 'resolved') {
						className = 'success';
				}
				if (profile.status === 'rejected') {
						className = 'danger';
				}
				let checkbox = '';
				if (typeof this.props.onCheckToggle === 'function') {
						checkbox = <input checked={profile.checked} type="checkbox" ref="checkbox"/>
				}

				return <tr className={className} onClick={this.toggle}>
						<td>
							{checkbox} {profile.name}
						</td>
						<td>{profile.gender}</td>
						<td><ProgressBar value={profile.strength} /></td>
				</tr>;
		}
});
