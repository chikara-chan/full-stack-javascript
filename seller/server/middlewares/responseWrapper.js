async function responseWrap(ctx, next) {
    await next()
    ctx.body = {
        entry: null,
        status: true,
        message: ctx.body.status === undefined ? '处理成功' : '处理失败',
        responseCode: 0,
        timestamp: Date.now(),
        ...ctx.body
    }
}

export default responseWrap
