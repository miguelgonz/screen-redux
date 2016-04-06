const expect = require('chai').expect;
const reducer = require('../src/reducer');

describe('Reducer', () => {

	const defaultState = {
					filters: {
						gender: false, country: false, strength: 0
					},
					profiles: [{
							key: 0,
							status: 'unresolved',
							name: 'John Smith',
							gender: 'male',
							strength: 5,
							checked: false
					}]
				}

		it('can add a profile', () => {
				var newState = reducer(defaultState, {type: 'ADD_PROFILE'});
				expect(newState.profiles.length).to.equal(2);
		});

		it('can check a profile', () => {
				var newState = reducer(defaultState, {type: 'TICK_PROFILE', key: 0, checked: true});
				expect(newState.profiles[0].checked).to.equal(true);
		});

		it('can reject a checked profile', () => {
				var newState = reducer(defaultState, {type: 'TICK_PROFILE', key: 0, checked: true});
				newState = reducer(newState, {type: 'REJECT'});
				expect(newState.profiles[0].status).to.equal('rejected');
		});

		it('can resolve a checked profile', () => {
				var newState = reducer(defaultState, {type: 'TICK_PROFILE', key: 0, checked: true});
				newState = reducer(newState, {type: 'RESOLVE'});
				expect(newState.profiles[0].status).to.equal('resolved');
		});

		it('can change filters', () => {
				var newState = reducer(defaultState, {type: 'CHANGE_FILTER', filter: 'gender', value: 'someValue'});
				expect(newState.filters.gender).to.equal('someValue');
		});
});

