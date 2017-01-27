import crypto from 'crypto'
import User from '../models/user'
import utils from '../lib/utils'

async function login(ctx) {
    const {username, password} = ctx.req.body,
        md5 = crypto.createHash('md5'),
        cryptoPassword = md5.update(password).digest('hex')
    let user

    user = await User.findOne({username, password: cryptoPassword, level: 1}).lean()
    if (user) {
        ctx.body = {
            message: '登录成功'
        }
        ctx.session.user = user
    } else {
        ctx.body = {
            status: false,
            message: '登录失败'
        }
    }
}

async function logout(ctx) {
    ctx.session = null
    ctx.body = {
        message: '注销成功'
    }
}

async function getUserInfo(ctx) {
    const {_id} = ctx.session.user
    let user

    user = await User.findOne({_id}).lean()
    utils.deleteKeys(user, 'username password')
    if (user) {
        ctx.body = {
            entry: user
        }
    } else {
        ctx.body = {
            status: false,
        }
    }
}

async function updateUserInfo(ctx) {
    const userInfo = ctx.req.body,
        {_id} = ctx.session.user
    let ret, data, year, month, day, date, ext, dest

    utils.deleteKeys(userInfo, 'username password')
    ret = await User.update({_id}, userInfo)
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

export default {
    login,
    logout,
    updateUserInfo,
    getUserInfo
}
