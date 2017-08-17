import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
//import reduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const store = applyMiddleware(createStore);

ReactDOM.render(

  //Provides the store to its child components
  <Provider store={store(reducers)}>
  <App />
  </Provider>,
  document.getElementById('root'));
