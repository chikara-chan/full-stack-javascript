import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceOrder(order) {
    return {
        type: types.REPLACE_ORDER,
        order
    }
}

export default {
    replaceOrder
}
