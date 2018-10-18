import {AUTH_REQUEST, LOGOUT, TOKEN_REQUEST} from '../constants'

export const login = (email, password) => ({
    type: AUTH_REQUEST,
    payload: { email, password }
});

export const token = (token) => ({
    type: TOKEN_REQUEST,
    payload: token
});


export const logout = () => {
    return {
        type: LOGOUT
    }
}



