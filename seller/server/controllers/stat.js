import Order from '../models/order'
import Shop from '../models/shop'
import utils from '../lib/utils'

async function getStats(ctx) {
    const {_id} = ctx.session.user
    let orders, total, amount, sales, ret = []

    orders = await Order.find({seller: _id, create: {$gt: new Date() - 1000 * 60 * 60 * 24}})
        .populate({path:'item', options: {lean: true}})
        .lean()
    total = orders.length
    amount = orders.reduce((total, order) => total + order.amount, 0)
    sales = orders.reduce((total, order) => total + order.item.length, 0)

    ret.push({
        total,
        amount,
        sales
    })

    orders = await Order.find({seller: _id, create: {$gt: new Date() - 1000 * 60 * 60 * 24 * 7}})
        .populate({path:'item', options: {lean: true}})
        .lean()
    total = orders.length
    amount = orders.reduce((total, order) => total + order.amount, 0)
    sales = orders.reduce((total, order) => total + order.item.length, 0)

    ret.push({
        total,
        amount,
        sales
    })

    orders = await Order.find({seller: _id, create: {$gt: new Date() - 1000 * 60 * 60 * 24 * 30}})
        .populate({path:'item', options: {lean: true}})
        .lean()
    total = orders.length
    amount = orders.reduce((total, order) => total + order.amount, 0)
    sales = orders.reduce((total, order) => total + order.item.length, 0)

    ret.push({
        total,
        amount,
        sales
    })
    if (ret) {
        ctx.body = {
            entry: ret
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    getStats,
}
