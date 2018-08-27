import { push } from 'connected-react-router';

const GET_USER = 'GET_USER';

const DELETE_USER = 'DELETE_USER';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE';
export const GET_ALL_USER_INFO_REQUEST = 'GET_ALL_USER_INFO_REQUEST';
export const GET_ALL_USER_INFO_RESPONSE = 'GET_ALL_USER_INFO_RESPONSE';
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_RESPONSE = 'LOGOUT_USER_RESPONSE';
const API_URL = 'https://kwitter-api.herokuapp.com/';

export function logoutUserAsync() {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return dispatch => {
    dispatch(logoutUserRequest());

    fetch(API_URL + 'auth/logout', options)
      .then(res => res.json())
      .then(data => {
        dispatch(logoutUserReceived(data));
        console.log('recieved logout data: ', data);

        return data;
      });
  };
}
export function loginUserAsync(loginInfo) {
  const initialOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  };

  return dispatch => {
    dispatch(loginUserRequest());

    fetch(API_URL + 'auth/login', initialOptions)
      .then(res => res.json())
      .then(data => {
        dispatch(loginUserReceived(data));
        return data;
      })
      .then(data => {
        dispatch(getAllUserInfoAsync(data.id));
        return data;
      });
  };
}

export function getAllUserInfoAsync(id) {
  return dispatch => {
    dispatch(getAllUserInfoRequest());

    fetch(API_URL + 'users')
      .then(res => res.json())
      .then(data => {
        const user = data.users.find(a => a.id === id);

        dispatch(getAllUserInfoReceived(user));
        return user;
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
        dispatch(createUserReceived(data));
        dispatch(push('/login'));
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

const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST,
  };
};

const logoutUserReceived = data => {
  return {
    type: LOGOUT_USER_RESPONSE,
    message: data.message,
    loggedIn: false,
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

export const getAllUserInfoRequest = () => {
  return {
    type: GET_ALL_USER_INFO_REQUEST,
  };
};
export const getAllUserInfoReceived = data => {
  return {
    type: GET_ALL_USER_INFO_RESPONSE,
    username: data.username,
    id: data.id,
    displayName: data.displayName,
    passwordHash: data.passwordHash,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    messages: data.messages,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
