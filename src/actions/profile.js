import { withAuth } from '../reducers'

import {PROFILE_FAILURE, PROFILE_REQUEST, PROFILE_SUCCESS} from '../constants'

export const profile = (profileInfo) => ({
    type: PROFILE_REQUEST
})
