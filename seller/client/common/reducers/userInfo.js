import types from '../constants/actionTypes'

const initialState = {
    username: '',
    password: ''
}

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_USER_INFO:
            return {
                ...state,
                ...action.userInfo
            }
        default:
            return state
    }
}
