import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer.js'

const AppContainer = require('./AppContainer.jsx');
const container = document.getElementById('main');

const store = createStore(reducer);

store.subscribe(() => {
		console.log('New state', store.getState());
});

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	container
);


