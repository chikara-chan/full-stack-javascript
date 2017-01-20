async function checkLogin(ctx, next) {
    const {user} = ctx.session

    if (!user) {
        ctx.body = {
            status: false,
            responseCode: -1,
        }
    } else {
        await next()
    }
}

export default checkLogin
