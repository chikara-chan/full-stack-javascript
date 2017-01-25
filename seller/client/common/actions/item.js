import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateItem(item) {
    return {
        type: types.UPDATE_ITEM,
        item
    }
}

function getItem() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/item/getItemInfo',
            type: 'get'
        }).then(res => {
            dispatch(updateItem(res.entry))
        })
    }
}

function postAddItem() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/item/addItem',
            data: getState().item
        }).then(res => {
            browserHistory.goBack()
        })
    }
}

function postItemPic(pic) {
    return (dispatch, getState) => {
        const formData = new FormData()

        Object.keys(pic).forEach(key => {
            formData.append(key, pic[key])
        })
        utils.ajax({
            url: '/api/common/upload',
            data: formData
        }).then(res => {
            dispatch(updateItem({
                pic: res.entry
            }))
        })
    }
}

export default {
    updateItem,
    getItem,
    postAddItem,
    postItemPic
}
