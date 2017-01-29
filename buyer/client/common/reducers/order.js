import types from '../constants/actionTypes'

const initialState = {
}

function order(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_ORDER:
            return {
                ...action.order
            }
        default:
            return state
    }
}

export default order
