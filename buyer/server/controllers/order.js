import Order from '../models/order'
import Shop from '../models/shop'
import utils from '../lib/utils'

async function submitOrder(ctx) {
    const {items, remark} = ctx.req.body,
        {_id} = ctx.session.user
    let order, amount, count, shop, item

    amount = items.reduce((total, item) => {
        return total + item.checkedNumber * item.price
    }, 0)
    count = items.reduce((total, item) => {
        return total + item.checkedNumber
    }, 0)
    item = items.reduce((arr, item) => {
        while (item.checkedNumber--) {
            arr = [...arr, item.id]
        }
        return arr
    }, [])
    shop = await Shop.findOne({_id: items[0].shop}).populate({path:'user', options: {lean: true}}).lean()
    order = await Order.create({
        amount,
        count,
        status: 100,
        remark,
        item: item,
        buyer: _id,
        seller: shop.user._id,
        shop: shop._id
    })
    order = await Order.findOne({_id: order._id}).populate({path:'item buyer seller shop', options: {lean: true}}).lean()
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

    order = await Order.find({buyer: _id, status: { $in: status}}).populate({path:'item buyer seller shop', options: {lean: true}}).lean()
    utils.deleteKeys(order.buyer, 'username password')
    utils.deleteKeys(order.seller, 'username password')
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

async function getOrder(ctx) {
    const {id} = ctx.query
    let order,
        item = [],
        ids = {}

    order = await Order.findOne({_id: id}).populate({path:'item buyer seller shop', options: {lean: true}}).lean()
    utils.deleteKeys(order.buyer, 'username password')
    utils.deleteKeys(order.seller, 'username password')
    order.item.forEach(itm => {
        if (!ids[itm._id]) {
            ids[itm._id] = {...itm, checkedNumber: 1}
        } else {
            ids[itm._id] = {...itm, checkedNumber: ids[itm._id].checkedNumber + 1}
        }
    })
    Object.keys(ids).forEach(key => {
        item.push(ids[key])
    })
    order.item = item
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

async function cancelOrder(ctx) {
    const {id} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status: 200})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

export default {
    submitOrder,
    getOrders,
    getOrder,
    cancelOrder
}
