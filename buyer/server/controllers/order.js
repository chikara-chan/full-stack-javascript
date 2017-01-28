import Order from '../models/order'

async function submitOrder(ctx) {
    const {items, remark} = ctx.req.body
    let ret

    if (ret) {
        ctx.body = {
            status: true
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}


export default {
    submitOrder
}
