import {select, put, call, takeLatest, all} from 'redux-saga/effects'
import {
    PROFILE_GET_FAILURE,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_REQUEST,
    PROFILE_POST_REQUEST,
    PROFILE_POST_SUCCESS,
    PROFILE_POST_FAILURE,
    PROFILE_ADD_WORKER_REQUEST,
    PROFILE_ADD_WORKER_SUCCESS,
    PROFILE_ADD_WORKER_FAILURE,
} from "../constants";

import {fetchJSON} from "./sagas";
import {accessToken} from '../reducers'
import {checkExpiredAccessToken} from "./jwt";


function* profileGet() {
    yield call(checkExpiredAccessToken)
    const state = yield select();

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken(state)}`
        }
    };
    try {
        const profile = yield call(fetchJSON, '/account/api/profile/', options);
        yield put({ type: PROFILE_GET_SUCCESS, payload: profile });
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: PROFILE_GET_FAILURE, payload: message });
    }
}

function* profilePost({payload: { profile }}) {
    yield call(checkExpiredAccessToken)
    const state = yield select();
    const options = {
        method: 'POST',
        body: JSON.stringify({...state.profile.userInformation, ...profile}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken(state)}`
        }
    };
    try {
        const updateProfile  = yield call(fetchJSON, '/account/api/profile/', options);
        yield put({ type: PROFILE_POST_SUCCESS, payload: updateProfile });
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: PROFILE_POST_FAILURE, payload: message });
    }
}

function* addWorkerToProfile({payload: { newWorkerData }}) {
    yield call(checkExpiredAccessToken)
    const state = yield select();
    const options = {
        method: 'POST',
        body: JSON.stringify({...newWorkerData, "to_profile": state.profile.userInformation.id}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken(state)}`
        }
    };
    try {
        const newWorker  = yield call(fetchJSON, '/account/api/profile/add_worker/', options);
        yield put({ type: PROFILE_ADD_WORKER_SUCCESS, payload: newWorker });
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: PROFILE_ADD_WORKER_FAILURE, payload: message });
    }
}

export function* profileSaga() {
    yield all([
        takeLatest(PROFILE_GET_REQUEST, profileGet),
        takeLatest(PROFILE_POST_REQUEST, profilePost),
        takeLatest(PROFILE_ADD_WORKER_REQUEST, addWorkerToProfile),
    ]);
};