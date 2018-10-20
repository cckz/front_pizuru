import {PROFILE_GET_SUCCESS, PROFILE_POST_SUCCESS} from '../constants'

const profileInitialState = {
    email: undefined,
    userInformation: {}
}
export default (state = profileInitialState, action) => {
    const {type, payload} = action
    switch(type) {
        case PROFILE_GET_SUCCESS:
            return {...state, email: payload.email, userInformation: payload.to_user[0]}
        case PROFILE_POST_SUCCESS:
            return {...state, userInformation: payload}
        default:
            return state
    }
}