import { RSAA } from 'redux-api-middleware';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
        TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE,
        LOGOUT } from '../constants'

export const login = (username, password) => ({
    [RSAA]: {
        endpoint: '/account/api/auth/token/obtain/',
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
        ]
    }
})

export const refreshAccessToken = (token) => ({
    [RSAA]: {
        endpoint: '/account/api/auth/token/refresh/',
        method: 'POST',
        body: JSON.stringify({refresh: token}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
        ]
    }
})

export function logout(data) {
    return {
        type: LOGOUT
    }
}
