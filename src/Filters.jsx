import React from 'react';

module.exports = React.createClass({
		updateStrength: function () {
				let value = this.refs.strength.value; 
				this.props.onFilterChange('strength', parseInt(value));
		},
		updateCountry: function () {
				let value = this.refs.country.value; 
				if (value === 'false') value = false;
				this.props.onFilterChange('country', value);
		},
		updateGender: function () {
				let value = this.refs.gender.value; 
				if (value === 'false') value = false;
				this.props.onFilterChange('gender', value);
		},
		render: function () {
				return <div className="row">
					<div className="col-sm-4">
							<label>Strength</label>
							<select ref="strength" onChange={this.updateStrength}>
								<option value="0">Any</option>
								<option value="25">&gt;25</option>
								<option value="50">&gt;50</option>
								<option value="75">&gt;75</option>
							</select>
					</div>
					<div className="col-sm-4">
							<label>Country</label>
							<select ref="country" onChange={this.updateCountry}>
								<option value="false">Any</option>
								<option value="uk">UK</option>
								<option value="usa">USA</option>
							</select>
					</div>
					<div className="col-sm-4">
							<label>Gender</label>
							<select ref="gender" onChange={this.updateGender}>
								<option value="false">Any</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
					</div>
				</div>
		}
});
