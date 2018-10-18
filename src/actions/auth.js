import { AUTH_REQUEST, LOGOUT, PROFILE_REQUEST } from '../constants'

export const login = (email, password) => ({
    type: AUTH_REQUEST,
    payload: { email, password }
});

export const requestProfile = (id) => ({
    type: PROFILE_REQUEST,
    payload: { id }
});

export const logout = () => {
    return {
        type: LOGOUT
    }
}



