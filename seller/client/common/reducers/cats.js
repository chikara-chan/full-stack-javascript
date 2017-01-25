import types from '../constants/actionTypes'

const initialState = []

function cats(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_CATS:
            return [
                ...action.cats
            ]
        default:
            return state
    }
}

export default cats
