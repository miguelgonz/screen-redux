import React from 'react';

module.exports = React.createClass({
		render: function () {
				return <div className="row">
					<div className="col-sm-4">
							<label>Strength</label>
							<select onChange={this.updateFilter}>
								<option value="false">Any</option>
								<option value="25">&gt;25</option>
								<option value="50">&gt;50</option>
								<option value="75">&gt;75</option>
							</select>
					</div>
					<div className="col-sm-4">
							<label>Country</label>
							<select onChange={this.updateFilter}>
								<option value="false">Any</option>
								<option value="uk">UK</option>
								<option value="usa">USA</option>
							</select>
					</div>
					<div className="col-sm-4">
							<label>Gender</label>
							<select onChange={this.updateFilter}>
								<option value="false">Any</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
					</div>
				</div>
		}
});
