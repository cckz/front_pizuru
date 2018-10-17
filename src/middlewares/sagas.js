import { call, put, takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, TOKEN_RECEIVED, TOKEN_REQUEST, TOKEN_FAILURE} from '../constants';
import {select, all} from 'redux-saga/effects'
import {isAccessTokenExpired, refreshToken} from "../reducers";

const fetchJSON = (url, options = {}) =>
    new Promise((resolve, reject) => {
        return fetch(url, options)
            .then(response => (response.status !== 200 ? reject(response) : response))
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error));
    });

function* login({ payload: { email, password } }) {
    const options = {
        body: JSON.stringify({ email, password }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        const { access, refresh } = yield call(fetchJSON, '/account/api/auth/token/obtain/', options);
        yield put({ type: AUTH_SUCCESS, payload: {access: access, refresh: refresh}});

    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: AUTH_FAILURE, payload: message });
    }
}

function* checkExpiredWhenInitialize() {
    const state = yield select();
    const token = refreshToken(state)
    if(token && isAccessTokenExpired(state)) {
        yield put({ type: TOKEN_REQUEST, payload: token});
    }
}

function* refresh(token) {
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

function* saga() {
    yield all([
        takeLatest('persist/REHYDRATE', checkExpiredWhenInitialize),
        takeLatest(AUTH_REQUEST, login),
        takeLatest(TOKEN_REQUEST, refresh),
    ]);
};

export default saga;