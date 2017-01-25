import Shop from '../models/shop'

async function getShopInfo(ctx) {
    const {_id} = ctx.session.user
    let shop

    shop = await Shop.findOne({user: _id}).populate({path:'school', options: {lean: true}}).lean()
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
    const {_id} = ctx.session.user,
        shopInfo = ctx.req.body
    let ret

    delete shopInfo.school
    ret = await Shop.update({user: _id}, shopInfo)
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
