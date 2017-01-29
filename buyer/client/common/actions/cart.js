import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'
import schools from './schools'
import order from './order'

function updateCheckedNumber(item, number) {
    return {
        type: types.UPDATE_CART,
        item,
        number
    }
}

function addToCart(addItem) {
    return (dispatch, getState) => {
        const items = getState().cart.items

        items.some(item =>
            item.id === addItem.id
        ) ?
        items.forEach(item => {
            if (item.id === addItem.id) {
                if (addItem.quantity > item.checkedNumber) {
                    dispatch(updateCheckedNumber(item, item.checkedNumber + 1))
                }
            }
        }) :
        addItem.quantity !== 0 &&
        dispatch(updateCheckedNumber(addItem, 1))
    }
}

function updateCart(cart) {
    return {
        type: types.UPDATE_CART_REMARK,
        cart
    }
}

function postCart(addItem) {
    return (dispatch, getState) => {
        const {cart} = getState()

        utils.ajax({
            url: '/api/order/submitOrder',
            data: cart
        }).then(res => {
            dispatch(order.replaceOrder(res.entry))
            browserHistory.push('/orderDetail')
        })
    }
}

export default {
    updateCheckedNumber,
    addToCart,
    postCart,
    updateCart
}
