export const GET_ALL_MESSAGES_REQUEST = 'GET_ALL_MESSAGES_REQUEST';
export const GET_ALL_MESSAGES_RESPONSE = 'GET_ALL_MESSAGES_RESPONSE';
export const GET_TEN_MESSAGES_REQUEST = 'GET_ALL_MESSAGES_REQUEST';
export const GET_TEN_MESSAGES_RESPONSE = 'GET_ALL_MESSAGES_RESPONSE';

const MESSAGE_API_URL = 'https://kwitter-api.herokuapp.com/messages';

export function fetchAllMessagesAsync() {
  return dispatch => {
    dispatch(getAllMessagesRequest());

    fetch(MESSAGE_API_URL)
      .then(res => res.json())
      .then(data => {
        dispatch(getAllMessagesResponse(data.messages));
        return data.messages;
      });
  };
}

const getAllMessagesRequest = () => {
  return {
    type: GET_ALL_MESSAGES_REQUEST,
  };
};

const getAllMessagesResponse = data => {
  return {
    type: GET_ALL_MESSAGES_RESPONSE,
    messages: data
  };
};
