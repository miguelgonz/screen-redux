import React from 'react';
import Counter from './Counter.jsx';
import App from './App.jsx';
import _ from 'lodash';
import { connect } from 'react-redux';

function mapStateToProps(state) {
		return {
				canAction: _.filter(state.profiles, (profile) => profile.checked ),
				profiles: _.filter(_.filter(state.profiles,
					(profile) => profile.strength > state.filters.strength), 
					(profile) => state.filters.gender === false || profile.gender === state.filters.gender)

		};
}

function mapDispatchToProps(dispatch) {
		return {
			'onClick': () => {
					dispatch({type: 'bump'});
			},
			'onFilterChange': (filter, value) => {
					dispatch({
						type: 'CHANGE_FILTER',
						filter: filter,
						value: value
					});
			},
			'onAddProfile': () => {
					dispatch({
							type: 'ADD_PROFILE',
					});
			}
		};
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

module.exports = AppContainer;
