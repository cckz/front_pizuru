import {select, put, call, take} from 'redux-saga/effects'
import {PROFILE_FAILURE, PROFILE_SUCCESS, TOKEN_REQUEST, TOKEN_FAILURE, TOKEN_RECEIVED} from "../constants";
import {fetchJSON} from "./sagas";
import {refreshToken, isAccessTokenExpired, accessToken} from '../reducers'
import {checkExpiredAccessToken} from "./jwt";

export function* profileGet({payload: {id}}) {
    const state = yield select();
    const token = refreshToken(state)
    if (token && isAccessTokenExpired(state)) {
        yield put({ type: TOKEN_REQUEST, payload: token});
        yield take(TOKEN_RECEIVED, TOKEN_FAILURE);
    }
    console.log(isAccessTokenExpired(state))
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken(state)}`
        }
    };
    try {
        const { email }  = yield call(fetchJSON, '/account/api/current_user/', options);
        console.log(email)
        yield put({ type: PROFILE_SUCCESS});
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