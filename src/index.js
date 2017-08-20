import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import rootReducer from './reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxPromise)));

ReactDOM.render(
  //Provides the store to its child components
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));
