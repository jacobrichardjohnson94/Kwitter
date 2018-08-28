import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createUserReducer, loginUserReducer } from './reducers/user-reducer.js';
import { userCreateErrorsReducer } from './reducers/user-create-error-reducer.js'
import thunk from 'redux-thunk';
import { getMessagesReducer } from './reducers/message-reducer.js';
import { getAllUsersReducer } from './reducers/fetch-all-users-reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ createUser: createUserReducer, loginUser: loginUserReducer, getMessages: getMessagesReducer, getAllUsers: getAllUsersReducer, createUserErrors: userCreateErrorsReducer });

export const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
