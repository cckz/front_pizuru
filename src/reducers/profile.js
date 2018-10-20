import {PROFILE_SUCCESS, PROFILE_POST_SUCCESS} from '../constants'

const profileInitialState = {
    id: undefined,
    email: undefined,
    userInformation: {}
}
export default (state = profileInitialState, action) => {
    const {type, payload} = action
    switch(type) {
        case PROFILE_SUCCESS:
            return {...state, id: payload.id, email: payload.email, userInformation: payload.to_user[0]}
        case PROFILE_POST_SUCCESS:
            return {...state, userInformation: payload}
        default:
            return state
    }
}