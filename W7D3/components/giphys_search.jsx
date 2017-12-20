import React from 'react';
import ReactDOM from 'react-dom';
import GiphysIndex from './giphys_index';
import * as APIUtil from '../util/api_util';
import configureStore from '../store/store';
import { receiveSearchGiphys } from '../actions/giphy_actions';
import Root from './root';

// window.store = store;
// window.fetchSearchGiphys = APIUtil.fetchSearchGiphys;
// window.receiveSearchGiphys = receiveSearchGiphys;

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
