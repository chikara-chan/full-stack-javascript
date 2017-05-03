import Order from '../models/order'
import Shop from '../models/shop'
import utils from '../lib/utils'

async function getOrders(ctx) {
    const {_id} = ctx.session.user,
        {status} = ctx.query
    let order

    order = await Order.find({seller: _id, status: { $in: status}}).populate({path:'item buyer seller shop', options: {lean: true}}).lean()
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

async function rejectOrder(ctx) {
    const {id} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status: 201})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

async function receiveOrder(ctx) {
    const {id} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status: 101})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

async function sendOrder(ctx) {
    const {id} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status: 102})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

async function confirmOrderRefund(ctx) {
    const {id} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status: 202})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

async function rejectOrderRefund(ctx) {
    const {id} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status: 104})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

export default {
    getOrders,
    getOrder,
    rejectOrder,
    receiveOrder,
    sendOrder,
    confirmOrderRefund,
    rejectOrderRefund
}
