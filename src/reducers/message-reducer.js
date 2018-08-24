import {GET_ALL_MESSAGES_REQUEST, 
        GET_ALL_MESSAGES_RESPONSE, 
        GET_TEN_MESSAGES_REQUEST, 
        GET_TEN_MESSAGES_RESPONSE } 
        from './actions/messages.js';

const initialGetAllMessagesState = {
  fetching: false,
  messages: [],
};
export function getAllMessagesReducer(state = initialGetAllMessagesState, action) {
  switch (action.type) {
    case GET_ALL_MESSAGES_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_ALL_MESSAGES_RESPONSE:
      return {
        messages: action.messages,
        fetching: false,
      };
  }
}

