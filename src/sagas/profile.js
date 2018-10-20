import {select, put, call, takeLatest, all} from 'redux-saga/effects'
import {
    PROFILE_FAILURE,
    PROFILE_SUCCESS,
    PROFILE_REQUEST,
    PROFILE_POST_REQUEST,
    PROFILE_POST_SUCCESS,
    PROFILE_POST_FAILURE,
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
        yield put({ type: PROFILE_SUCCESS, payload: profile });
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: PROFILE_FAILURE, payload: message });
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


export function* profileSaga() {
    yield all([
        takeLatest(PROFILE_REQUEST, profileGet),
        takeLatest(PROFILE_POST_REQUEST, profilePost),
    ]);
};