import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateUser(user) {
    return {
        type: types.UPDATE_USER,
        user
    }
}

function postLogin() {
    return (dispatch, getState) => {
        const {username, password} = getState().user

        utils.ajax({
            url: '/api/user/login',
            data: {
                username,
                password
            }
        }).then(res => {
            browserHistory.goBack()
        })
    }
}

export default {
    updateUser,
    postLogin
}
