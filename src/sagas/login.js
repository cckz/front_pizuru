import { call, put } from 'redux-saga/effects';
import { fetchJSON } from './sagas'
import {AUTH_FAILURE, AUTH_SUCCESS} from "../constants";


export function* login({ payload: { email, password } }) {
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