import types from '../constants/actionTypes'

const initialState = []

function schools(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_SCHOOLS:
            return [
                ...action.schools
            ]
        default:
            return state
    }
}

export default schools
