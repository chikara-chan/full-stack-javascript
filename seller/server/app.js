import os from 'os'
import Koa from 'koa'
import json from 'koa-json'
import body from 'koa-body'
import logger from 'koa-logger'
import session from 'koa-generic-session'
import MongoStore from 'koa-generic-session-mongo'
import compress from 'koa-compress'
import convert from 'koa-convert'
import config from './config'

const app = new Koa()

app.keys = ['this is a fucking secret']
app.use(convert(session({
    store: new MongoStore({
        url: `mongodb://${config.host}:${config.port}/${config.db}`
    })
})))
app.use(compress())
app.use(body({
    formidable:{uploadDir: os.tmpdir()},
    multipart: true
}))
app.use(async (ctx, next) => {
    ctx.req.body = ctx.request.body
    await next()
})
app.use(logger())

export default app
