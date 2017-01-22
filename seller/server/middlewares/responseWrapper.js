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
}

export default responseWrap
