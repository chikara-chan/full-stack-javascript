import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceItems(items) {
    return {
        type: types.REPLACE_ITEMS,
        items
    }
}

function getItems(catId) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/item/getItems',
            type: 'get',
            data: {catId}
        }).then(res => {
            dispatch(replaceItems(res.entry))
        })
    }
}

export default {
    replaceItems,
    getItems
}
