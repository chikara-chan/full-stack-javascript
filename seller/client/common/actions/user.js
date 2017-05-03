import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function updateUser(user) {
    return {
        type: types.UPDATE_USER,
        user
    }
}

function initUser(user) {
    return {
        type: 'INIT'
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
        utils.ajax({
            url: '/api/user/updateUserInfo',
            data: getState().user
        }).then(res => {
            dispatch(updateUser(res.entry))
        })
    }
}

function postUserAvatar(avatar) {
    return (dispatch, getState) => {
        const formData = new FormData()

        Object.keys(avatar).forEach(key => {
            formData.append(key, avatar[key])
        })
        utils.ajax({
            url: '/api/common/upload',
            data: formData
        }).then(res => {
            dispatch(updateUser({
                avatar: res.entry
            }))
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
    initUser,
    postUserAvatar,
    getUser
}
