import crypto from 'crypto'
import Shop from '../models/shop'
import School from '../models/school'

async function getShopInfo(ctx) {
    const {id} = ctx.session.user
    let shop

    shop = await Shop.findOne({user: id}).lean()
    shop.school = await School.findOne({id: shop.school}).lean()
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

    delete shopInfo.school
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
