import types from '../constants/actionTypes'

const initialState = []

function users(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_USERS:
            return action.users
        default:
            return state
    }
}

export default users
