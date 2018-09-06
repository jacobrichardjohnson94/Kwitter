export const GET_ALL_MESSAGES_REQUEST = 'GET_ALL_MESSAGES_REQUEST';
export const GET_ALL_MESSAGES_RESPONSE = 'GET_ALL_MESSAGES_RESPONSE';
export const GET_TEN_MESSAGES_REQUEST = 'GET_ALL_MESSAGES_REQUEST';
export const GET_TEN_MESSAGES_RESPONSE = 'GET_ALL_MESSAGES_RESPONSE';
export const LIKE_MESSAGE = 'LIKE_MESSAGE';
export const LIKED_MESSAGE_RESPONSE = 'LIKE_MESSAGE_RESPONSE';
const MESSAGE_API_URL = 'https://kwitter-api.herokuapp.com/messages';
const LIKE_API_URL = 'https://kwitter-api.herokuapp.com/likes'

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

export function likedMessage(id, token, messagesToChange){
  let messageId = id
  const initialOpts = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({messageId})
  }
  return dispatch => {
  console.log(initialOpts)
  console.log(messageId)
  fetch(LIKE_API_URL, initialOpts)
    .then(res=>res.json())
    .then(data => {
      console.log(messagesToChange.map(message => {
        if(message.id === messageId) {
          console.log('before',message.likes)
          let newLikesArray = message.likes
          newLikesArray.push(data.like)
          console.log(newLikesArray)
          console.log('after',message.likes)
          return(dispatch(likedMessageResponse(data, messageId,newLikesArray)))
        } else return
      }))
      console.log('hit', data)
    })
  }
}

const likedMessageResponse = (data) => {
  return {
    type: LIKED_MESSAGE_RESPONSE,
    payload: data
  }
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
