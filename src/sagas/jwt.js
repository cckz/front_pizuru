import {select, put, call} from 'redux-saga/effects'
import {TOKEN_FAILURE, TOKEN_RECEIVED, TOKEN_REQUEST} from "../constants";
import {fetchJSON} from "./sagas";
import {isAccessTokenExpired, refreshToken} from "../reducers";

export  function* checkExpiredAccessToken() {
    const state = yield select();
    const token = refreshToken(state)
    if (token && isAccessTokenExpired(state)) {
        yield put({ type: TOKEN_REQUEST, payload: token});
    }
}

export function* refresh(token) {
    const options = {
        body: JSON.stringify({ refresh: token.payload }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const { access } = yield call(fetchJSON, '/account/api/auth/token/refresh/', options);
        yield put({ type: TOKEN_RECEIVED, payload: {access: access}});
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: TOKEN_FAILURE, payload: message });
    }
}