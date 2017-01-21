import types from '../constants/actionTypes'

const initialState = {
    username: '',
    password: '',
    nickname: '',
    mobile: '',
    email: '',
    identity: ''
}

function user(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_USER:
            return {
                ...state,
                ...action.user
            }
        default:
            return state
    }
}

export default user