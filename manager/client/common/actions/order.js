import {browserHistory} from 'react-router'
import {message} from 'antd'
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
        })
    }
}

function rejectOrder(id) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/rejectOrder',
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

function sendOrder(id) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/sendOrder',
            data: {
                id
            }
        }).then(res => {
            browserHistory.goBack()
        })
    }
}

function setOrder(id, status) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/setOrder',
            data: {
                id,
                status
            }
        }).then(res => {
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
    rejectOrder,
    receiveOrder,
    sendOrder,
    setOrder
}
