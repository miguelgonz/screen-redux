import React from 'react';
import ProgressBar from './ProgressBar.jsx';

module.exports = React.createClass({
		render: function () {
				var profiles = this.props.data.map(function (profile) {
						return <tr key={profile.key}>
							<td>{profile.name}</td>
							<td>
								<ProgressBar value={profile.strength} />
							</td>
						</tr>;
				});

				return <table className="profiles table table-striped table-bordered">
					<thead>
						<tr>
							<td>Name</td>
							<td>Strength</td>
						</tr>
					</thead>
					<tbody>
						{profiles}
					</tbody>
				</table>;
		}
});
