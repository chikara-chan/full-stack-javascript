import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateUsers(users) {
    return {
        type: types.REPLACE_USERS,
        users
    }
}

function getUsers(data) {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/user/getUsers',
            type: 'get',
            data
        }).then(res => {
            dispatch(updateUsers(res.entry))
        })
    }
}

export default {
    updateUsers,
    getUsers
}
