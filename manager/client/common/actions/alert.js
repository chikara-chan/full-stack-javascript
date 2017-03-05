import types from '../constants/actionTypes'

function updateAlert(alert) {
    return {
        type: types.UPDATE_ALERT,
        alert
    }
}

export default {
    updateAlert
}
