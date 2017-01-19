import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateUserInfo(userInfo) {
    return {
        type: types.UPDATE_USER_INFO,
        userInfo
    }
}

function submitLogin() {
    return (dispatch, getState) => {
        const {username, password} = getState().userInfo

        utils.ajax({
            url: '/api/user/login',
            data: {
                username,
                password
            }
        }).then(res => {
            browserHistory.push('/')
        })
    }
}

export default {
    updateUserInfo,
    submitLogin
}
