export const USER_NAME_TOO_SHORT = 'USER_NAME_TOO_SHORT'
export const USER_NAME_TOO_LONG = 'USER_NAME_TOO_LONG'
export const USER_NAME_FORGOTTEN = 'USER_NAME_FORGOTTEN'
export const DISPLAY_NAME_TOO_SHORT = 'DISPLAY_NAME_TOO_SHORT'
export const DISPLAY_NAME_TOO_LONG = 'DISPLAY_NAME_TOO_LONG'
export const DISPLAY_NAME_FORGOTTEN = 'DISPLAY_NAME_FORGOTTEN'
export const PASSWORD_FORGOTTEN = 'PASSWORD_FORGOTTEN'
export const PASSWORD_TOO_SHORT = 'PASSWORD_TOO_SHORT'
export const VALID_FORM = 'VALID_FORM'

export const usernameTooShort = () => {
    return {
        type: USER_NAME_TOO_SHORT
    }
}

export const usernameTooLong = () => {
    return {
        type: USER_NAME_TOO_LONG
    }
}
export const usernameForgotten = () => {
    return {
        type: USER_NAME_FORGOTTEN
    }
}
export const displayNameTooShort = () => {
    return {
        type: DISPLAY_NAME_TOO_SHORT
    }
}
export const displayNameTooLong = () => {
    return {
        type: DISPLAY_NAME_TOO_LONG
    }
}
export const displayNameForgotten = () => {
    return {
        type: DISPLAY_NAME_FORGOTTEN
    }
}
export const passwordForgotten = () => {
    return {
        type: PASSWORD_FORGOTTEN
    }
}
export const passwordTooShort = () => {
    return {
        type: PASSWORD_TOO_SHORT
    }
}

export const validForm = () => {
    return {
        type: VALID_FORM
    }
}