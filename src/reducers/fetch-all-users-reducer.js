import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_RESPONSE } from '../actions/fetch-all-users.js';

const initialUserListState = {
  fetching: true,
  userList: [],
};

export function getAllUsersReducer(state = initialUserListState, action) {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_ALL_USERS_RESPONSE:
      return {
        fetching: false,
        userList: action.userList,
      };
    default:
      return state;
  }
}
