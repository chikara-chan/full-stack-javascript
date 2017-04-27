import crypto from 'crypto'
import Shop from '../models/shop'
import User from '../models/user'
import School from '../models/school'

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

async function signupShop(ctx) {
    const values = ctx.req.body
    let shop, school, user,
        md5 = crypto.createHash('md5'),
        cryptoPassword = md5.update(values.password).digest('hex')

    user = await User.create({
        username: values.username,
        password: cryptoPassword,
        level: 1
    })
    school = await School.create({
        schoolName: values.schoolName,
    })
    shop = await Shop.create({
        shopName: values.shopName,
        openTime: values.openTime,
        school: school.id,
        user: user.id,
    })

    if (shop) {
        ctx.body = {
            status: true
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

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

export default {
    getShopInfo,
    updateShopInfo,
    signupShop
}
