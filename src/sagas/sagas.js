import { all, takeLatest, fork } from 'redux-saga/effects';
import { AUTH_REQUEST, TOKEN_REQUEST, PROFILE_REQUEST} from '../constants';
import {login} from './login'
import {refresh, checkExpiredAccessToken} from "./jwt";
import {profileGet} from "./profile";

export const fetchJSON = (url, options = {}) =>
    new Promise((resolve, reject) => {
        return fetch(url, options)
            .then(response => (response.status !== 200 ? reject(response) : response))
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error));
    });

function* saga() {
    yield all([
        fork(takeLatest, 'persist/REHYDRATE', checkExpiredAccessToken),
        takeLatest(AUTH_REQUEST, login),
        takeLatest(TOKEN_REQUEST, refresh),
        takeLatest(PROFILE_REQUEST, profileGet),
    ]);
};

export default saga;