import names from './data/names.js';
import _ from 'lodash';

const initialState = {
		counter: 0,
		filtersStates: {
				gender: false,
				country: false,
				minStrength: false
		},
		profiles: [
			{
					status: 'resolved',
					name: 'Osama bin laden',
					strength: 60
			}
		]
};

module.exports = function(state = initialState, action) {
		console.log('action', action);
		let newState = Object.assign({}, state);

		switch (action.type) {
			case 'ADD_PROFILE':
				const profile = {
					key: state.profiles.length +1,
					name: _.sample(names.first) + ' ' + _.sample(names.surnames),
					strength: Math.floor(Math.random()*99)
				};
				newState.profiles.push(profile);	
				break;
			case 'RESOLVE':
			case 'TICK_PERSON':
			case 'CHANGE_FILTER':
				newState = reducerFilter(state, action);
				break;
		}

		return newState;
};
