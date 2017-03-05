import types from '../constants/actionTypes'

const initialState = []

function orders(state = initialState, action) {
    switch (action.type) {
        case types.REPLACE_ORDERS:
            return [
                ...action.orders
            ]
        default:
            return state
    }
}

export default orders
