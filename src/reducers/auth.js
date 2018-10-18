import jwtDecode from 'jwt-decode'
import { AUTH_SUCCESS, AUTH_FAILURE,
    TOKEN_RECEIVED, TOKEN_FAILURE,
    LOGOUT } from '../constants'

const initialState = {
    access: undefined,
    refresh: undefined,
    errors: {},
}

export default (state = initialState, action) => {
    const {type, payload} = action
    console.log(action)
    switch(type) {
        case AUTH_SUCCESS:
            return {
                access: {
                    token: payload.access,
                    ...jwtDecode(payload.access)
                },
                refresh: {
                    token: payload.refresh,
                    ...jwtDecode(payload.refresh)
                },
                errors: {}
            }
        case TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: payload.access,
                    ...jwtDecode(payload.access)
                }
            }
        case LOGOUT:
            return {
                access: undefined,
                refresh: undefined,
            }
        case AUTH_FAILURE:
        case TOKEN_FAILURE:
            return {
                access: undefined,
                refresh: undefined,
                errors:
                payload.response ||
                {'non_field_errors': payload.statusText},
            }
        default:
            return state
    }
}

export function accessToken(state) {
    console.log(state.access.token, '-098')
    if (state.access) {
        return state.access.token
    }
}

export function refreshToken(state) {
    if (state.refresh) {
        return state.refresh.token
    }
}

export function isAccessTokenExpired(state) {
    if (state.access && state.access.exp) {
        return 1000 * state.access.exp - (new Date()).getTime() < 5000
    }
    return true
}

export function isRefreshTokenExpired(state) {
    if (state.refresh && state.refresh.exp) {
        return 1000 * state.refresh.exp - (new Date()).getTime() < 5000
    }
    return true
}

export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
}

export function errors(state) {
    return state.errors
}

export function getUserId(state) {
    return state.refresh.user_id
}