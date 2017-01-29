import Order from '../models/order'
import Shop from '../models/shop'

async function submitOrder(ctx) {
    const {items, remark} = ctx.req.body,
        {_id} = ctx.session.user
    let order, amount, count, shop

    amount = items.reduce((total, item) => {
        return total + item.checkedNumber * item.price
    }, 0)
    count = items.reduce((total, item) => {
        return total + item.checkedNumber
    }, 0)
    shop = await Shop.findOne({_id: items[0].shop}).populate({path:'user', options: {lean: true}}).lean()
    order = await Order.create({
        amount,
        count,
        status: 100,
        remark,
        item: items.map(item => item.id),
        buyer: _id,
        seller: shop.user._id
    })
    order = await Order.findOne({_id: order._id}).populate({path:'item', options: {lean: true}}).lean()
    if (order) {
        ctx.body = {
            entry: order
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

async function getOrders(ctx) {
    const {_id} = ctx.session.user,
        {status} = ctx.query
    let order

    order = await Order.find({buyer: _id, status: { $in: status}}).populate({path:'item buyer seller', options: {lean: true}}).lean()
    if (order) {
        ctx.body = {
            entry: order
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    submitOrder,
    getOrders
}
