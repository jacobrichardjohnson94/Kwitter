import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createUserReducer, loginUserReducer } from './reducers/user-reducer.js';
import thunk from 'redux-thunk';
import { getMessagesReducer } from './reducers/message-reducer.js';
import { getAllUsersReducer } from './reducers/fetch-all-users-reducer.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  createUser: createUserReducer,
  loginUser: loginUserReducer,
  getMessages: getMessagesReducer,
  getAllUsers: getAllUsersReducer,
});

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  connectRouter(history)(persistedReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
export let persistor = persistStore(store);
