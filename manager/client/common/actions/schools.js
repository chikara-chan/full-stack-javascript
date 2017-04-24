import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateSchools(schools) {
    return {
        type: types.REPLACE_SCHOOLS,
        schools
    }
}

function getSchools() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/school/getSchools',
            type: 'get',
        }).then(res => {
            dispatch(updateSchools(res.entry))
        })
    }
}

export default {
    getSchools
}
