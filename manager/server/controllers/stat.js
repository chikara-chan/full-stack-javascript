import Order from '../models/order'
import Shop from '../models/shop'
import utils from '../lib/utils'

async function getStats(ctx) {
    let orders, stat = {orderStat: [], itemStat: [], tradeStat: []}

    orders = orders = await Order
        .find({create: {$gt: new Date() - 1000 * 60 * 60 * 24 * 30}})
        .populate({
            path:'item',
            options: { lean: true }
        })
        .sort({create: 1})
        .lean()

    for (let i = 29; i >= 0; i--) {
        stat.orderStat.push({
            '日期': utils.formatDate(new Date().getTime() - 1000 * 60 * 60 * 24 * i, 'MM.DD'),
            '订单量': 0
        })
        stat.itemStat.push({
            '日期': utils.formatDate(new Date().getTime() - 1000 * 60 * 60 * 24 * i, 'MM.DD'),
            '商品销量': 0
        })
        stat.tradeStat.push({
            '日期': utils.formatDate(new Date().getTime() - 1000 * 60 * 60 * 24 * i, 'MM.DD'),
            '交易额': 0
        })
    }

    orders.forEach(order => {
        for (let i = 0; i < 30; i++) {
            if (stat.orderStat[i]['日期'] == utils.formatDate(order.create, 'MM.DD')) {
                stat.orderStat[i]['订单量'] += 1
                break;
            }
        }
        for (let i = 0; i < 30; i++) {
            if (stat.itemStat[i]['日期'] == utils.formatDate(order.create, 'MM.DD')) {
                stat.itemStat[i]['商品销量'] += order.count
                break;
            }
        }
        for (let i = 0; i < 30; i++) {
            if (stat.tradeStat[i]['日期'] == utils.formatDate(order.create, 'MM.DD')) {
                stat.tradeStat[i]['交易额'] += order.amount
                break;
            }
        }
    })

    if (stat) {
        ctx.body = {
            entry: stat
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    getStats,
}
