import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import crypto from 'crypto'
import {Types} from 'mongoose'
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
    const {id} = ctx.session.user
    let user

    user = await User.findOne({id}).lean()
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
    const userInfo = ctx.req.body.fields,
        {avatarFile} = ctx.req.body.files,
        {id} = ctx.session.user
    let ret, data, year, month, day, date, ext, dest

    utils.deleteKeys(userInfo, 'username password avatar')
    if (avatarFile) {
        data = fs.readFileSync(avatarFile.path)
        date = new Date()
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()
        ext = avatarFile.name.slice(avatarFile.name.lastIndexOf('.'))
        dest = path.resolve(__dirname, `../../public/assets/${year}/${month}/${day}/${new Types.ObjectId()}${ext}`)
        mkdirp.sync(path.dirname(dest))
        fs.writeFileSync(dest, data)
        fs.unlinkSync(avatarFile.path)
        userInfo.avatar = dest.slice(dest.indexOf('/assets'))
    }
    ret = await User.update({id}, userInfo)
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    } else if (avatarFile) {
        ctx.body = {
            entry: {
                avatar: userInfo.avatar
            }
        }
    }
}

export default {
    login,
    logout,
    updateUserInfo,
    getUserInfo
}
