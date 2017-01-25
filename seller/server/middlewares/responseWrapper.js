import {Types} from 'mongoose'

async function responseWrap(ctx, next) {
    try {
        await next()
    } catch (e) {
        console.error(e)
        ctx.body = {
            status: false
        }
    }
    ctx.body = {
        entry: null,
        status: true,
        message: (!ctx.body || ctx.body.status === undefined || ctx.body.status === true) ? '处理成功' : '处理失败',
        responseCode: 0,
        timestamp: Date.now(),
        ...ctx.body
    }
    if (ctx.body && ctx.body.entry && typeof ctx.body.entry === 'object') {
        ctx.body.entry = switchId(ctx.body.entry)
    }
}

function switchId(entry) {
    let rets, newKey

    if (entry instanceof Array) {
        rets = []
        entry.forEach(item => {
            rets.push(switchId(item))
        })

        return rets
    } else if (typeof entry === 'object' && !(entry instanceof Types.ObjectId)) {
        rets = {}
        Object.keys(entry).forEach(key => {
            newKey = key === '_id' && !entry.id ? 'id' : key
            rets[newKey] = switchId(entry[key])
        })

        return rets
    } else {
        return entry
    }
}

export default responseWrap
