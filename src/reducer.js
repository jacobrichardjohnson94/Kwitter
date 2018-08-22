import {CREATE_USER_REQUEST, CREATE_USER_RECEIVED} from './actions.jsx'

const initialState = {
    loggedInUser: {},
    fetching: false
}

export default function createUserReducer( state = initialState, action) {
    switch(action.type) {
        case CREATE_USER_REQUEST:
            return {
                ...state, 
                fetching: true
            }
        case CREATE_USER_RECEIVED:
            return {
                loggedInUser: {
                    username: action.username,
                    displayname: action.displayname
                }
            }
        default:
            return state
    }
}