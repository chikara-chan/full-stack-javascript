import types from '../constants/actionTypes'

const initialState = {
    show: false
}

function modal(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_MODAL:
            return {
                ...state,
                ...action.modal
            }
        default:
            return state
    }
}

export default modal
