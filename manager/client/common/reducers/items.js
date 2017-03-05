import types from '../constants/actionTypes'

const initialState = []

function items(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_ITEMS:
            return [
                ...action.items
            ]
        default:
            return state
    }
}

export default items
