import { push } from 'connected-react-router';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE';
export const GET_ALL_USER_INFO_REQUEST = 'GET_ALL_USER_INFO_REQUEST';
export const GET_ALL_USER_INFO_RESPONSE = 'GET_ALL_USER_INFO_RESPONSE';
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_RESPONSE = 'LOGOUT_USER_RESPONSE';
export const UPDATE_USER_PASSWORD_REQUEST = 'UPDATE_USER_PASSWORD_REQUEST ';
export const UPDATE_USER_PASSWORD_RESPONSE = 'UPDATE_USER_PASSWORD_RESPONSE ';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_RESPONSE = 'DELETE_USER_RESPONSE';

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
        console.log(data);
        return data;
      })
      .then(data => {
        dispatch(getAllUserInfoAsync(data.token, data.id));
        return data;
      })
      .then(() => {
        dispatch(push('/'));
      });
  };
}

export function getAllUserInfoAsync(token, id) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  return dispatch => {
    dispatch(getAllUserInfoRequest());

    fetch(API_URL + 'users/' + id, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(getAllUserInfoReceived(data.user));
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
        dispatch(createUserReceived(data));
        dispatch(push('/login'));
        return data;
      });
  };
}

export function updateUserPasswordAsync(newPassword, token) {
  const options = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPassword),
  };
  return dispatch => {
    dispatch(updateUserPasswordRequest());
    fetch(API_URL + 'users', options).then(data => {
      dispatch(updateUserPasswordReceived(data));
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
const updateUserPasswordRequest = () => {
  return {
    type: UPDATE_USER_PASSWORD_REQUEST,
  };
};
const updateUserPasswordReceived = data => {
  return {
    type: UPDATE_USER_PASSWORD_RESPONSE,
    id: data.id,
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
