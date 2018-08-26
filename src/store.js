import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createUserReducer, loginUserReducer } from './reducers/user-reducer.js';
import thunk from 'redux-thunk';
import { getTenMessagesReducer, getAllMessagesReducer, getMessagesReducer } from './reducers/message-reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ createUser: createUserReducer, loginUser: loginUserReducer, getMessages: getMessagesReducer});

export const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
