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

function postLogout() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/user/logout',
        }).then(res => {
            browserHistory.push('/login')
        })
    }
}

function postUser() {
    return (dispatch, getState) => {
        console.log(getState().user.avatarFile)
        utils.ajax({
            url: '/api/user/updateUserInfo',
            'Content-Type': 'multipart/form-data',
            data: {
                // avatarFile: getState().user.avatarFile,
                a: '2'
            }
        }).then(res => {
        })
    }
}

function getUser() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/user/getUserInfo',
            type: 'get'
        }).then(res => {
            dispatch(updateUser(res.entry))
        })
    }
}

export default {
    updateUser,
    postLogin,
    postLogout,
    postUser,
    getUser
}
