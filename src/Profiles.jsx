import React from 'react';
import Profile from './Profile.jsx';

module.exports = React.createClass({
		onProfileChecked: function (profileId, checked) {
				this.props.onProfileChecked(profileId, checked);
		},
		render: function () {
				let checkAction = false;
				if (typeof this.props.onProfileChecked === 'function') {
						checkAction = this.onProfileChecked;
				}

				var profiles = this.props.data.map(function (profile) {
						return <Profile onCheckToggle={checkAction} key={profile.key} profile={profile}/>
				}.bind(this));

				let content = <div className="alert alert-warning">Sorry, there is nothing here</div>
				if (profiles.length) {
						content = <table className="profiles table table-striped table-bordered">
							<thead>
								<tr>
									<td>Name</td>
									<td>Gender</td>
									<td>Strength</td>
								</tr>
							</thead>
							<tbody>
								{profiles}
							</tbody>
						</table>
				}

				return <div>
						<h2>{this.props.title}</h2>
						{content}
					</div>
		}
});
