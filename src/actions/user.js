const AUTH_REGISTER = 'AUTH_REGISTER';
const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_LOGOUT = 'AUTH_LOGOUT';
const LIKE_MESSAGE = 'LIKE_MESSAGE';
const UNLIKE_MESSAGE = 'UNLIKE_MESSAGE';
const CREATE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE';
const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';
const GET_SPECIFIC_MESSAGE = 'GET_SPECIFIC_MESSAGE';
const DELETE_SPECIFIC_MESSAGE = 'DELETE_SPECIFIC_MESSAGE';
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE';
const API_URL = 'https://kwitter-api.herokuapp.com/';

export function loginUserAsync(loginInfo) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  };

  return dispatch => {
    dispatch(loginUserRequest());

    fetch(API_URL + 'auth/login', options)
      .then(res => res.json())
      .then(data => {
        console.log('req login data: ', data);
        dispatch(loginUserReceived(data));
        console.log('recieved login data: ', data);
        return data;
      });
  };
}

export function createUserAsync(newUser) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  };

  return dispatch => {
    dispatch(createUserRequest());

    fetch(API_URL + 'auth/register', options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(createUserReceived(data));
        return data;
      });
  };
}

const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

const createUserReceived = data => {
  return {
    type: CREATE_USER_RESPONSE,
    username: data.username,
    displayName: data.displayName,
  };
};

const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

const loginUserReceived = data => {
  return {
    type: LOGIN_USER_RESPONSE,
    id: data.id,
    token: data.token,
    loggedIn: true,
  };
};

export const getUserInfo = () => {
  return {
    type: GET_USER,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
