import types from '../constants/actionTypes'

const initialState = {
    username: '',
    password: '',
    nickname: '',
    mobile: '',
    email: '',
    address: '',
    identity: ''
}

function user(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_USER:
            return {
                ...state,
                ...action.user
            }
        case 'INIT':
            return initialState
        default:
            return state
    }
}

export default user
