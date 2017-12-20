import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import GiphysIndex from './components/giphys_index';
import * as APIUtil from './util/api_util';
import { receiveSearchGiphys } from './actions/giphy_actions';

// window.store = store;
// window.fetchSearchGiphys = APIUtil.fetchSearchGiphys;
// window.receiveSearchGiphys = receiveSearchGiphys;

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
