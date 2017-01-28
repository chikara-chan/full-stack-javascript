import mongoose, {Schema, Types} from '../lib/mongoose'
import './item'
import './user'

let OrderSchema, Order

OrderSchema = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId, default: Types.ObjectId},
    amount: {type: Number},
    count: {type: Number},
    status: {type: Number}, // 100: 待接单 101: 待发货 102：待收货 103: 待评价 104: 完成  200: 已取消 201: 已拒单
    remark: {type: String},
    comment: {type: String},
    orderType: {type: Number, default: 0}, // 0: 普通订单
    payType: {type: Number, default: 0}, // 0: 货到付款 1: 在线支付
    deleted: {type: Number, default: 0}, // 0: 否 1: 是
    item: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    buyer: {type: Schema.Types.ObjectId, ref: 'User'},
    seller: {type: Schema.Types.ObjectId, ref: 'User'}
})
Order = mongoose.model('Order', OrderSchema)

export default Order
