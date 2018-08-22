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
const API_URL = 'https://kwitter-api.herokuapp.com/';

export function createUserAsync(newUser) {
  return dispatch => {
    console.log('why god why');
    dispatch(createUserRequest());

    fetch(API_URL + 'auth/register', newUser)
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
