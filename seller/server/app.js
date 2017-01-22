import Koa from 'koa'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
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
app.use(bodyParser({

    formidable:{uploadDir: './uploads'},    //This is where the files would come
    multipart: true,
    urlencoded: true
}))
app.use(async (ctx, next) => {
    ctx.req.body = ctx.request.body
    await next()
})
app.use(json())
app.use(logger())

export default app
