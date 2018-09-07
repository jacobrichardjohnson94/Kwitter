import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_RESPONSE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESPONSE,
  LOGIN_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_RESPONSE,
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_RESPONSE,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_RESPONSE,
} from '../actions/user.js';

const initialCreateUserState = {
  fetching: false,
  userCreated: false,
  errResMessage: '',
};

const initialAuthUserState = {
  loggedInUser: {},
  fetching: false,
  loginError: '',
};

export function createUserReducer(state = initialCreateUserState, action) {
  switch (action.type) {
    case CREATE_USER_ERROR:
      return {
        ...state,
        fetching: false,
        errResMessage: action.errorMessage,
      };
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
    case LOGIN_USER_ERROR:

    return {
      ...state,
      fetching: false,
      loginError: 'Invalid username or password'
    }

      return {
        ...state,
        fetching: false,
        loginError: 'Invalid username or password',
      };

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
    case GET_ALL_USER_INFO_REQUEST: {
      return {
        ...state,
        fetching: true,
      };
    }
    case GET_ALL_USER_INFO_RESPONSE: {
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          username: action.username,
          id: action.id,
          displayName: action.displayName,
          passwordHash: action.passwordHash,
          createdAt: action.createdAt,
          updatedAt: action.updatedAt,
          messages: action.messages,
          about: action.about,
        },
        fetching: false,
      };
    }
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
    case UPDATE_USER_PASSWORD_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case UPDATE_USER_PASSWORD_RESPONSE:
      return {
        ...state,
        fetching: false,
        userPasswordUpdated: action.id,
      };

    default:
      return state;
  }
}
