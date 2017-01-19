import crypto from 'crypto'
import User from '../models/user'

async function login(ctx) {
    const {username, password} = ctx.req.body,
        md5 = crypto.createHash('md5'),
        cryptoPassword = md5.update(password).digest('hex')
    let user

    user = await User.findOne({username, password: cryptoPassword})
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

export default {login}
