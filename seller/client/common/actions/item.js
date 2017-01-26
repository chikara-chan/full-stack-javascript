import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateItem(item) {
    return {
        type: types.UPDATE_ITEM,
        item
    }
}

function replaceItem(item) {
    return {
        type: types.REPLACE_ITEM,
        item
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

function postEditItem() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/item/editItem',
            data: getState().item
        }).then(res => {
            browserHistory.goBack()
        })
    }
}

function postRemoveItem() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/item/removeItem',
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
    replaceItem,
    postAddItem,
    postRemoveItem,
    postItemPic,
    postEditItem
}
