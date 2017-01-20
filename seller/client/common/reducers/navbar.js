import types from '../constants/actionTypes'

const initialState = {
    show: true
}

function navbar(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_NAVBAR:
            return {
                ...state,
                ...action.navbar
            }
        default:
            return state
    }
}

export default navbar
