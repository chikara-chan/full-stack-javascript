import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceOrder(order) {
    return {
        type: types.REPLACE_ORDER,
        order
    }
}

function getOrder(id) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/getOrder',
            type: 'get',
            data: {
                id
            }
        }).then(res => {
            dispatch(replaceOrder(res.entry))
            browserHistory.push('/orderDetail')
        })
    }
}

function cancelOrder(id) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/cancelOrder',
            data: {
                id
            }
        }).then(res => {
            browserHistory.goBack()
        })
    }
}

function receiveOrder(id) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/receiveOrder',
            data: {
                id
            }
        }).then(res => {
            browserHistory.goBack()
        })
    }
}

function getOrderWithoutRedirect() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/getOrder',
            type: 'get',
            data: {
                id: getState().order.id
            }
        }).then(res => {
            dispatch(replaceOrder(res.entry))
        })
    }
}


export default {
    replaceOrder,
    getOrder,
    getOrderWithoutRedirect,
    cancelOrder,
    receiveOrder
}
