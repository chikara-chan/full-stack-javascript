import crypto from 'crypto'
import User from '../models/user'

async function login(ctx) {
    const {username, password} = ctx.req.body,
        md5 = crypto.createHash('md5'),
        cryptoPassword = md5.update(password).digest('hex')
    let user

    user = await User.findOne({username, password: cryptoPassword}, '-_id')
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

async function getUserInfo(ctx) {
    const {id} = ctx.session.user
    let user

    user = await User.findOne({id}, '-_id -username -password')
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
        {id} = ctx.session.user
    let ret

    delete userInfo.username
    delete userInfo.password
    ret = await User.update({id}, userInfo)
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

export default {
    login,
    updateUserInfo,
    getUserInfo
}
