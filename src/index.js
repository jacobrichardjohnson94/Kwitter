import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createUserReducer, loginUserReducer } from './reducer.js';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ createUser: createUserReducer, loginUser: loginUserReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
