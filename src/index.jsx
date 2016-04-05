import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer.js'

var AppContainer = require('./AppContainer.jsx');
var container = document.getElementById('main');

let store = createStore(reducer);

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	container
);


