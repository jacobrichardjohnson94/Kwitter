import { push } from 'connected-react-router';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE';
export const GET_ALL_USER_INFO_REQUEST = 'GET_ALL_USER_INFO_REQUEST';
export const GET_ALL_USER_INFO_RESPONSE = 'GET_ALL_USER_INFO_RESPONSE';
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_RESPONSE = 'LOGOUT_USER_RESPONSE';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const UPDATE_USER_PASSWORD_REQUEST = 'UPDATE_USER_PASSWORD_REQUEST ';
export const UPDATE_USER_PASSWORD_RESPONSE = 'UPDATE_USER_PASSWORD_RESPONSE ';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_RESPONSE = 'DELETE_USER_RESPONSE';

const API_URL = 'https://stark-brook-53416.herokuapp.com/';

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
    let loginErr = false;
    dispatch(loginUserRequest());
    
    fetch(API_URL + 'auth/login', initialOptions)
    .then(res => res.json())
      .then(data => {
        if (data.success === false) {
          dispatch(loginUserError());
          loginErr = true;
          return loginErr
        } else {
          dispatch(loginUserReceived(data));
          return data;
        }
      })
      .then(data => {
        if (loginErr === false) {
          dispatch(getAllUserInfoAsync(data.token, data.id));
          return data;
        } else {
          console.log('error');
        }
      })
      .then(data => {
        if (loginErr === false) {
          dispatch(push('/'));
        } else {
          return;
        }
      })
  };
}

export function loginUserError() {
  return {
    type: LOGIN_USER_ERROR,
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
        const user = data.user;
        console.log(data.user)
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
        if (data.errors) {
          const errResponse = data.errors[0].message;
          dispatch(createUserError(errResponse));
          return console.log(errResponse);
        } else {
          dispatch(createUserReceived(data));
          dispatch(push('/login'));
          return data;
        }
      });
  };
}

const createUserError = errResponse => {
  return {
    type: CREATE_USER_ERROR,
    errorMessage: errResponse,
  };
};
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
    about: data.about
  };
};
