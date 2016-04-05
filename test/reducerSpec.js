const expect = require('chai').expect;
const reducer = require('../src/reducer');

describe('Reducer', () => {
		it('can add a profile', () => {
				var state = {
						profiles: []
				};
				var newState = reducer(state, {type: 'ADD_PROFILE'});

				expect(newState.profiles.length).to.equal(1);
		});
});

