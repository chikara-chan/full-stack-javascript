import {Types} from 'mongoose'
import Order from '../models/order'
import Shop from '../models/shop'
import User from '../models/user'
import utils from '../lib/utils'

async function getOrders(ctx) {
    let order, users,
        data = {}

    if (ctx.query.nickname || ctx.query.mobile) {
        users = await User
            .find(utils.filterNullKeys({
                nickname: ctx.query.nickname,
                mobile: ctx.query.mobile
            }))
            .lean()

        data.buyer = users ? {$in: users.map(user => user._id)} : new Types.ObjectId()
    }
    if (ctx.query.id) {
        data._id = ctx.query.id
    }
    if (ctx.query.timeStart || ctx.query.timeEnd) {
        data.create = utils.filterNullKeys({
            $gt: ctx.query.timeStart,
            $lt: ctx.query.timeEnd
        })
    }

    try {
        order = await Order
            .find(data)
            .populate({
                path:'item buyer seller shop',
                options: { lean: true }
            })
            .lean()
            .sort('-create')
        utils.deleteKeys(order.buyer, 'username password')
        utils.deleteKeys(order.seller, 'username password')
    } catch (e) {
        order = []
    }
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

async function setOrder(ctx) {
    const {id, status} = ctx.req.body
    let ret

    ret = await Order.update({_id: id}, {status})
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

export default {
    getOrders,
    getOrder,
    rejectOrder,
    receiveOrder,
    sendOrder,
    setOrder
}
