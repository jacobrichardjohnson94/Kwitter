import {
  CREATE_USER_REQUEST,
  CREATE_USER_RESPONSE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESPONSE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_RESPONSE,
} from '../actions/user.js';

const initialCreateUserState = {
  fetching: false,
  userCreated: false,
};

const initialAuthUserState = {
  fetching: false,
};

export function createUserReducer(state = initialCreateUserState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CREATE_USER_RESPONSE:
      return {
        userCreated: true,
        fetching: false,
      };
    default:
      return state;
  }
}

export function loginUserReducer(state = initialAuthUserState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loggedIn: false,
        fetching: true,
      };
    case LOGIN_USER_RESPONSE:
      return {
        ...state,
        loggedInUser: {
          id: action.id,
          token: action.token,
        },
        loggedIn: true,
        fetching: false,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loggedIn: true,
        fetching: true,
      };
    case LOGOUT_USER_RESPONSE:
      return {
        ...state,
        loggedInUser: {},
        loggedIn: false,
        message: action.message,
        fetching: false,
      };

    default:
      return state;
  }
}
