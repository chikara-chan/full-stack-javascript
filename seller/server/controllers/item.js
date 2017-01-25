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

export default {
    addItem
}
