import React from 'react';
import Counter from './Counter.jsx';
import App from './App.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state) {
		return {
				profiles: state.profiles.slice()
		};
}

function mapDispatchToProps(dispatch) {
		return {
			'onClick': () => {
					dispatch({type: 'bump'});
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
