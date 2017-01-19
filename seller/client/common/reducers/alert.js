import types from '../constants/actionTypes'

const initialState = {
    show: false
}

function alert(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_ALERT:
            return {
                show: true,
                status: action.status,
                message: action.message,
                callback: action.callback,
                time: action.time
            }
        case types.HIDE_ALERT:
            return {
                show: false
            }
        default:
            return state
    }
}

export default alert
