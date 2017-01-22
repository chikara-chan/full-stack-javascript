import crypto from 'crypto'
import parse from 'co-busboy'
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

    user = await User.findOne({id}, '-username -password').lean()
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
console.log(ctx.request.body)
    utils.deleteKeys(userInfo, 'username password avatar')
    ret = await User.update({id}, {userInfo})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

function* a(next) {
  // the body isn't multipart, so busboy can't parse it
  if (!this.request.is('multipart/*')) return yield next

  var parts = parse(this)
  var part
  while (part = yield parts) {
    if (part.length) {
      // arrays are busboy fields
      console.log('key: ' + part[0])
      console.log('value: ' + part[1])
    } else {
      // otherwise, it's a stream
      part.pipe(fs.createWriteStream('some file.txt'))
    }
  }
  console.log('and we are done parsing the form!')
}

export default {
    login,
    logout,
    updateUserInfo,
    getUserInfo
}
