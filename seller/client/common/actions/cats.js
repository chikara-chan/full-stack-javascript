import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceCats(cats) {
    return {
        type: types.REPLACE_CATS,
        cats
    }
}

function getCats() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/cat/getCatInfo',
            type: 'get'
        }).then(res => {
            dispatch(replaceCats(res.entry))
        })
    }
}

export default {
    replaceCats,
    getCats
}
