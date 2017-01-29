import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceOrders(orders) {
    return {
        type: types.REPLACE_ORDERS,
        orders
    }
}

function getOrders(status) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/order/getOrders',
            type: 'get',
            data: {
                status
            }
        }).then(res => {
            dispatch(replaceOrders(res.entry))
        })
    }
}

export default {
    replaceOrders,
    getOrders
}
