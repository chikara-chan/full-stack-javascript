import Shop from '../models/shop'
import Item from '../models/item'

async function addItem(ctx) {
    const {_id} = ctx.session.user,
        item = ctx.req.body
    let ret, shop

    shop = await Shop.findOne({user: _id}).lean()
    item.cat = item.cat.id
    item.shop = shop._id
    ret = await Item.create(item)
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

async function editItem(ctx) {
    const item = ctx.req.body
    let ret

    item.cat = item.cat.id
    delete item.shop
    ret = await Item.update({_id: item.id}, item)
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

async function removeItem(ctx) {
    const item = ctx.req.body
    let ret

    ret = await Item.update({_id: item.id}, {deleted: 1})
    if (!ret.ok) {
        ctx.body = {
            status: false
        }
    }
}

async function getItems(ctx) {
    const {catId, schoolId} = ctx.query
    let items, shop

    shop = await Shop.findOne({school: schoolId}).lean()
    items = await Item.find({shop: shop._id, cat: catId, deleted: 0, quantity: {$gt: 0}})
        .populate({path:'cat', options: {lean: true}})
        .lean()
    if (items) {
        ctx.body = {
            entry: items
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

async function getRecommendItems(ctx) {
    const {schoolId} = ctx.query
    let items, shop

    shop = await Shop.findOne({school: schoolId}).lean()
    items = await Item.find({shop: shop._id, deleted: 0})
        .populate({path:'cat', options: {lean: true}})
        .lean()
        .sort({'update':-1})
        .limit(10)
    if (items) {
        ctx.body = {
            entry: items
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    addItem,
    editItem,
    getItems,
    removeItem,
    getRecommendItems
}
