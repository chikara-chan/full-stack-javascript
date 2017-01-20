import crypto from 'crypto'
import Shop from '../models/shop'

async function getShopInfo(ctx) {
    const {id} = ctx.session.user
    let shop

    shop = await Shop.findOne({user: id}, '-_id')
    if (shop) {
        ctx.body = {
            entry: shop
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

async function updateShopInfo(ctx) {
    const {id} = ctx.session.user,
        shopInfo = ctx.req.body
    let ret

    ret = await Shop.update({user: id}, shopInfo)
    if (ret.ok) {
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
    getShopInfo,
    updateShopInfo
}
