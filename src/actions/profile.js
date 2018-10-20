import {PROFILE_REQUEST, PROFILE_POST_REQUEST} from '../constants'

export const saveDataProfile = (profile) => ({
    type: PROFILE_POST_REQUEST,
    payload: { profile }
})

export const requestProfile = () => ({
    type: PROFILE_REQUEST,
});
