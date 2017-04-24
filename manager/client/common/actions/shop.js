import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'
import schools from './schools'

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

function signupShop(data) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/shop/signupShop',
            data
        }).then(res => {
            utils.ajax({
                url: '/api/school/getSchools',
                type: 'get',
            }).then(res => {
                dispatch({
                    type: types.REPLACE_SCHOOLS,
                    schools: res.entry
                })
            })
        })
    }
}

export default {
    updateShop,
    getShop,
    postShop,
    signupShop
}
