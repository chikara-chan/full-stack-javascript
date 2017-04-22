import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceOrders(orders) {
    return {
        type: types.REPLACE_ORDERS,
        orders
    }
}

function getOrders(data) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/getOrders',
            type: 'get',
            data
        }).then(res => {
            dispatch(replaceOrders(res.entry))
        })
    }
}

export default {
    replaceOrders,
    getOrders
}
