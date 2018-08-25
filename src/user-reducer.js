import {
  CREATE_USER_REQUEST,
  CREATE_USER_RESPONSE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESPONSE,
} from '../actions/user.js';

const initialCreateState = {
  fetching: false,
  userCreated: false,
};

const initialLoginState = {
  loggedInUser: {},
  fetching: false,
  loggedIn: false,
};

export function createUserReducer(state = initialCreateState, action) {
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

export function loginUserReducer(state = initialLoginState, action) {
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
    default:
      return state;
  }
}
