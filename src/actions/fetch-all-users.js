import { fetchAllMessagesAsync } from './messages';

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_RESPONSE = 'GET_ALL_USERS_RESPONSE';

const USER_API_URL = 'https://kwitter-api.herokuapp.com/users';

export function fetchAllUsersAsync() {
  return dispatch => {
    dispatch(getAllUsersRequest());
    fetch(USER_API_URL)
      .then(res => res.json())
      .then(data => {
        dispatch(getAllUsersResponse(data));
        console.log(data)
        return data;
      })
      .then(() => {
        dispatch(fetchAllMessagesAsync());
      });
  };
}

const getAllUsersRequest = () => {
  return {
    type: GET_ALL_USERS_REQUEST,
  };
};

const getAllUsersResponse = data => {
  return {
    type: GET_ALL_USERS_RESPONSE,
    userList: data,
  };
};
