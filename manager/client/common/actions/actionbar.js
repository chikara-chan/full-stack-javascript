import types from '../constants/actionTypes'

function updateActionbar(actionbar) {
    return {
        type: types.UPDATE_ACTIONBAR,
        actionbar
    }
}

export default {
    updateActionbar
}
