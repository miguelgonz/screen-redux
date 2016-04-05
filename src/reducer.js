import names from './data/names.js';
import _ from 'lodash';

const initialState = {
		counter: 0,
		filters: {
				gender: false,
				country: false,
				strength: 0
		},
		profiles: [
			{
					key: 0,
					status: 'resolved',
					name: 'Osama bin laden',
					gender: 'male',
					strength: 60
			}
		]
};

module.exports = function(state = initialState, action) {
		let newState = Object.assign({}, state);

		switch (action.type) {
			case 'ADD_PROFILE':
				const profile = {
					key: state.profiles.length + 1,
					status: 'unresolved',
					name: _.sample(names.first) + ' ' + _.sample(names.surnames),
					gender: Math.random() > .5 ? 'male' : 'female',
					strength: Math.floor(Math.random()*90) +10 
				};
				newState.profiles.push(profile);	
				break;

			case 'RESOLVE':
			case 'TICK_PERSON':
			case 'CHANGE_FILTER':
				if (newState.filters.hasOwnProperty(action.filter)) {
					newState.filters[action.filter] = action.value;
				}
				break;
		}

		return newState;
};
