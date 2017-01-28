import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceSchools(schools) {
    return {
        type: types.REPLACE_SCHOOLS,
        schools
    }
}

function getSchools() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/school/getSchoolInfo',
            type: 'get'
        }).then(res => {
            dispatch(replaceSchools(res.entry))
        })
    }
}

function saveSchool(school) {
    return (dispatch, getState) => {
        localStorage.setItem('schoolId', school.id)
        localStorage.setItem('schoolName', school.schoolName)
    }
}

export default {
    replaceSchools,
    getSchools,
    saveSchool
}
