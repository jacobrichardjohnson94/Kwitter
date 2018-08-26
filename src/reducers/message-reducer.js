import {GET_ALL_MESSAGES_REQUEST, 
        GET_ALL_MESSAGES_RESPONSE, 
        GET_TEN_MESSAGES_REQUEST, 
        GET_TEN_MESSAGES_RESPONSE } 
        from './actions/messages.js';

const initialMessagesState = {
  fetching: false,
  messages: [],
};


export function getMessagesReducer(state = initialMessagesState, action) {
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
    case GET_TEN_MESSAGES_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_TEN_MESSAGES_RESPONSE:
      return {
        messages: action.messages,
        fetching: false
      };
  }
}



