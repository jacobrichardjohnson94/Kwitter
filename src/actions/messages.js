export const GET_ALL_MESSAGES_REQUEST = 'GET_ALL_MESSAGES_REQUEST';
export const GET_ALL_MESSAGES_RESPONSE = 'GET_ALL_MESSAGES_RESPONSE';
export const GET_TEN_MESSAGES_REQUEST = 'GET_ALL_MESSAGES_REQUEST';
export const GET_TEN_MESSAGES_RESPONSE = 'GET_ALL_MESSAGES_RESPONSE';

const MESSAGE_API_URL = 'https://kwitter-api.herokuapp.com/messages';

// export function fetchTenMessagesAsync() {
//     return dispatch => {
//         dispatch(getTenMessagesRequest())

//         fetch(`${MESSAGE_API_URL}?limit=10`)
//             .then(res => res.json())
//             .then(data => {
//                 dispatch(getTenMessagesResponse(data))
//                 return data
//             })
//     }

// }

export function fetchAllMessagesAsync() {
  return dispatch => {
    dispatch(getAllMessagesRequest());

    fetch(MESSAGE_API_URL)
      .then(res => res.json())
      .then(data => {
        dispatch(getAllMessagesResponse(data));
        return data;
      });
  };
}

// const getTenMessagesRequest = () => {
//     return {
//         type: GET_TEN_MESSAGES_REQUEST
//     }
// }

// const getTenMessagesResponse = (data) => {
//     return {
//         type: GET_TEN_MESSAGES_RESPONSE,
//         messages: data.messages
//     }
// }

const getAllMessagesRequest = () => {
  return {
    type: GET_ALL_MESSAGES_REQUEST,
  };
};

const getAllMessagesResponse = data => {
  return {
    type: GET_ALL_MESSAGES_RESPONSE,
    messages: data.messages.sort((a, b) => a.id < b.id),
  };
};
