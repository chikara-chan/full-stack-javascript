import types from '../constants/actionTypes'

const initialState = {
    items: [],
    amount: 0,
    count: 0,
    remark: ''
}

function cart(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_CART:
            const items =
                (state.items.some(item =>
                    item.id === action.item.id
                ) ?
                state.items.map(item =>
                    item.id === action.item.id ? {...item,
                        checkedNumber: action.number
                    } : item
                ) :
                [...state.items, {
                    ...action.item,
                    checkedNumber: action.number
                }]).filter(item =>
                    item.checkedNumber !== 0
                ),
                amount = items.reduce((total, item) => {
                    return total + item.checkedNumber * item.price
                }, 0),
                count = items.reduce((total, item) => {
                    return total + item.checkedNumber
                }, 0)

            return {
                items,
                amount,
                count
            }
        case types.UPDATE_CART_REMARK:
            return {
                ...state,
                remark: action.cart.remark
            }
        default:
            return state
    }
}

export default cart
