var names  = require('./data/names.js');
var _ = require('lodash');

const genders = ['male', 'female'];

function getRandomPerson(key) {
		return {
			key: key,
			status: 'unresolved',
			name: _.sample(names.first) + ' ' + _.sample(names.surnames),
			gender: _.sample(genders),
			strength: _.random(10,99),
			checked: false
		};
}

const initialState = {
		filters: {
				gender: false,
				country: false,
				strength: 0
		},
		profiles: [getRandomPerson(0)]
};

module.exports = function(state, action) {
		if (!state) {
				state = initialState;
		}
		var newState = _.cloneDeep(state);

		switch (action.type) {
			case 'ADD_PROFILE':
				newState.profiles.push(getRandomPerson(state.profiles.length + 1));	
				newState.profiles = _.sortBy(newState.profiles, (p) => -p.strength)
				break;
			case 'REJECT':
			case 'RESOLVE':
				newState.profiles = _.map(newState.profiles, (profile) => {
						if (profile.checked) {
							profile.status = action.type === 'REJECT' ? 'rejected' : 'resolved';
							profile.checked = false;
						}
						return profile;
				});
				break;
			case 'TICK_PROFILE':
				_.forEach(newState.profiles, (profile, index) => {
						if (profile.key === action.key) {
							newState.profiles[index].checked = !!action.checked;
							return false;
						}
				});
				break;
			case 'CHANGE_FILTER':
				if (newState.filters.hasOwnProperty(action.filter)) {
					newState.filters[action.filter] = action.value;
				}
				break;
		}

		return newState;
};

