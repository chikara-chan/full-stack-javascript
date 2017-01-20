import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateShop(shop) {
    return {
        type: types.UPDATE_SHOP,
        shop
    }
}

function getShop() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/shop/getShopInfo',
            type: 'get'
        }).then(res => {
            console.log()
            dispatch(updateShop(res.entry))
        })
    }
}

function postShop() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/shop/updateShopInfo',
            data: getState().shop
        }).then(res => {
        })
    }
}

export default {
    updateShop,
    getShop,
    postShop
}
