import types from '../constants/actionTypes'

const initialState = {
    show: false
}

function alert(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_ALERT:
            return {
                ...state,
                ...action.alert
            }
        default:
            return state
    }
}

export default alert
