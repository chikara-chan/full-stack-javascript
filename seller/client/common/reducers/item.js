import types from '../constants/actionTypes'

const initialState = {
    itemName: '',
    brand: '',
    price: '',
    quantity: '',
    property: '',
    unit: '',
    pic: '/assets/item-default.png',
    desc: '',
    cat: {
        catName: ''
    }
}

function item(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_ITEM:
            return {
                ...state,
                ...action.item
            }
        default:
            return state
    }
}

export default item
