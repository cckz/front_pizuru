import * as echo from '../actions/echo'

const authInitialState = {
    message: ""
}
export default (state=authInitialState, action) => {
    switch(action.type) {
        case echo.ECHO_SUCCESS:
            return {
                message: action.payload.message
            }
        default:
            return state
    }
}
export const serverMessage = (state) => state.message