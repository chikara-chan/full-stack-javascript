import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'
import schools from './schools'

function replaceItems(items) {
    return {
        type: types.REPLACE_ITEMS,
        items
    }
}

function getItems(catId) {
    return (dispatch, getState) => {
        const schoolId = localStorage.getItem('schoolId')

        if (!schoolId) {
            browserHistory.push('/selectSchool')

            return
        }
        utils.ajax({
            url: '/api/item/getItems',
            type: 'get',
            data: {
                catId,
                schoolId
            }
        }).then(res => {
            dispatch(replaceItems(res.entry))
        })
    }
}

function getRecommendItems() {
    return (dispatch, getState) => {
        const schoolId = localStorage.getItem('schoolId')

        if (!schoolId) {
            browserHistory.push('/selectSchool')

            return
        }
        utils.ajax({
            url: '/api/item/getRecommendItems',
            type: 'get',
            data: {
                schoolId
            }
        }).then(res => {
            dispatch(replaceItems(res.entry))
        })
    }
}

export default {
    replaceItems,
    getItems,
    getRecommendItems
}
