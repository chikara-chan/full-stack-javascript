import types from '../constants/actionTypes'

const initialState = {}

function stats(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_STATS:
            return action.stats
        default:
            return state
    }
}

export default stats
