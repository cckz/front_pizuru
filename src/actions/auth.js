import { AUTH_REQUEST, LOGOUT } from '../constants'

export const login = (email, password) => ({
    type: AUTH_REQUEST,
    payload: { email, password }
});

export const logout = () => {
    return {
        type: LOGOUT
    }
}



