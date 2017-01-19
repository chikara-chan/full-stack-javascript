import types from '../constants/actionTypes'

function showAlert(status = true, message, callback, time = 1000) {
    return {
        type: types.SHOW_ALERT,
        status,
        message,
        callback,
        time
    }
}

function hideAlert() {
    return {type: types.HIDE_ALERT}
}

export default {
    showAlert,
    hideAlert
}
