import {PROFILE_GET_SUCCESS,
        PROFILE_POST_SUCCESS,
        PROFILE_ADD_WORKER_SUCCESS,
        PROFILE_DELETE_WORKER_SUCCESS
} from '../constants'

const profileInitialState = {
    email: undefined,
    userInformation: {},
    workers: {}
}
export default (state = profileInitialState, action) => {
    const {type, payload} = action
    switch(type) {
        case PROFILE_GET_SUCCESS:
            return {...state, email: payload.email, userInformation: payload.profile[0]}
        case PROFILE_POST_SUCCESS:
            return {...state, userInformation: payload}
        case PROFILE_ADD_WORKER_SUCCESS:
            ////!!!!!
            return {...state, workers: state.workers.concat(payload)}
        case PROFILE_DELETE_WORKER_SUCCESS:
            console.log(payload)
            const {workers} = state.userInformation
            const updInfDelete = {...state.userInformation, workers: workers.filter(worker => worker.id !== payload.id)}
            return {...state, userInformation: updInfDelete}
        default:
            return state
    }
}