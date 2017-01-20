import types from '../constants/actionTypes'

function updateNavbar(navbar) {
    return {
        type: types.UPDATE_NAVBAR,
        navbar
    }
}

export default {
    updateNavbar
}
