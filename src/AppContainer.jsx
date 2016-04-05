import React from 'react';
import Counter from './Counter.jsx';
import App from './App.jsx';
import _ from 'lodash';
import { connect } from 'react-redux';

function mapStateToProps(state) {
		return {
				canAction: _.filter(state.profiles, (profile) => profile.checked).length > 0,

				resolvedProfiles: _.filter(state.profiles,
					(profile) => profile.status !== 'unresolved'),

				profiles: _.filter(state.profiles,
					(profile) => 
							profile.status === 'unresolved' && 
							profile.strength > state.filters.strength && 
							(state.filters.gender === false || profile.gender === state.filters.gender)
				)
		};
}

function mapDispatchToProps(dispatch) {
		return {
			'onResolve': () => {
					dispatch({type: 'RESOLVE'});
			},
			'onReject': () => {
					dispatch({type: 'REJECT'});
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
			},
			'onProfileChecked': (key, on) => {
					dispatch({
							type: 'TICK_PROFILE',
							checked: on,
							key: key
					});
			}
		};
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

module.exports = AppContainer;
