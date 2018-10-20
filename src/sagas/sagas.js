import { all } from 'redux-saga/effects';
import {loginSaga} from './login'
import {jwtSaga} from "./jwt";
import {profileSaga} from "./profile";

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
        loginSaga(),
        jwtSaga(),
        profileSaga()
    ]);
};

export default saga;