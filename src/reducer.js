import { CREATE_USER_REQUEST, CREATE_USER_RESPONSE } from './actions/user.js';

const initialState = {
  loggedInUser: {},
  fetching: false,
};

export function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CREATE_USER_RESPONSE:
      return {
        loggedInUser: {
          username: action.username,
          displayname: action.displayname,
        },
        fetching: false,
      };
    default:
      return state;
  }
}
