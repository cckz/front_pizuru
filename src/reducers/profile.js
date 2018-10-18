import {PROFILE_SUCCESS} from '../constants'

const initialState = {
    profileInfo: {}
}
export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case PROFILE_SUCCESS:
            return {...state, profileInfo: payload}
        default:
            return state
    }
}