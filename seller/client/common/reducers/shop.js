import types from '../constants/actionTypes'

const initialState = {
    shopName: '',
    schoolName: '',
    shopType: '',
    openTime: ''
}

function shop(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_SHOP:
            return {
                ...state,
                ...action.shop
            }
        default:
            return state
    }
}

export default shop
