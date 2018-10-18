import {PROFILE_REQUEST} from '../constants'

export const profile = (id) => ({
    type: PROFILE_REQUEST
})

export const requestProfile = (id) => ({
    type: PROFILE_REQUEST,
    payload: { id }
});
