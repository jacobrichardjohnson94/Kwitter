import {USER_NAME_TOO_SHORT,
    USER_NAME_TOO_LONG,
    USER_NAME_FORGOTTEN,
    DISPLAY_NAME_TOO_SHORT,
    DISPLAY_NAME_TOO_LONG,
    DISPLAY_NAME_FORGOTTEN,
    PASSWORD_FORGOTTEN,
    PASSWORD_TOO_SHORT,
    VALID_FORM
} from '../actions/create-user-errors.js'

const initialFormState = {
    usernameTooShort: false,
    usernameTooLong: false,
    usernameForgotten: false,
    usernameErrMsg: '',

    displayNameTooShort: false,
    displayNameTooLong: false,
    displayNameForgotten: false,
    displayNameErrMsg: '',

    passwordForgotten: false,
    passwordTooShort: false,
    passwordErrMsg: '',

    validForm: false
}

export function userCreateErrorsReducer (state = initialFormState, action) {
    switch (action.type) {
        case USER_NAME_TOO_SHORT:
         return {
             ...state,
             usernameTooShort: true,
             usernameErrMsg: 'Username must be between 5-15 characters long'
        }
        case USER_NAME_TOO_LONG:
         return {
             ...state,
             usernameTooLong: true,
             usernameErrMsg: 'Username must be between 5-15 characters long'
         }
        case USER_NAME_FORGOTTEN:
         return {
             ...state,
             usernameForgotten: true,
             usernameErrMsg: 'Username must be between 5-15 characters long'
         }
        case DISPLAY_NAME_TOO_SHORT:
         return {
             ...state,
             displayNameTooShort: true,
             displayNameErrMsg: 'Display name must be between 5-15 characters long'
         }
        case DISPLAY_NAME_TOO_LONG:
         return {
             ...state, 
             displayNameTooLong: true,
             displayNameErrMsg: 'Display name must be between 5-15 characters long'
         }
        case DISPLAY_NAME_FORGOTTEN: 
         return {
             ...state,
             displayNameForgotten: true,
             displayNameErrMsg: 'Display name must be between 5-15 characters long'
         }
        case PASSWORD_FORGOTTEN:
         return {
             ...state,
             passwordForgotten: true,
             passwordErrMsg: 'Password must be longer than 5 characters'
         }
        case PASSWORD_TOO_SHORT:
         return {
             ...state,
             passwordTooShort: true,
             passwordErrMsg: 'Password must be longer than 5 characters'
         }
        case VALID_FORM:
         return {
             ...state,
             validForm: true
         }
        default:
        return state
    }
}