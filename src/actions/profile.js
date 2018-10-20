import {PROFILE_GET_REQUEST,
        PROFILE_POST_REQUEST,
        PROFILE_ADD_WORKER_REQUEST
} from '../constants'

export const saveDataProfile = (profile) => ({
    type: PROFILE_POST_REQUEST,
    payload: { profile }
})

export const addWorkers = (newWorkerData) => ({
    type: PROFILE_ADD_WORKER_REQUEST,
    payload: { newWorkerData }
})

export const requestProfile = () => ({
    type: PROFILE_GET_REQUEST,
});
