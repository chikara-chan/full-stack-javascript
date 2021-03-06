import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceItems(items) {
    return {
        type: types.REPLACE_ITEMS,
        items
    }
}

function getItems(data) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/item/getItems',
            type: 'get',
            data
        }).then(res => {
            dispatch(replaceItems(res.entry))
        })
    }
}

export default {
    replaceItems,
    getItems
}
