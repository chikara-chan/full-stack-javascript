import types from '../constants/actionTypes'

function updateModal(modal) {
    return {
        type: types.UPDATE_MODAL,
        modal
    }
}

export default {
    updateModal
}
