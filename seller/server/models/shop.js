import mongoose, {Schema, Types} from '../lib/mongoose'
import './school'
import './user'

let ShopSchema, Shop

ShopSchema = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId, default: Types.ObjectId},
    shopName: {type: String},
    openTime: {type: String, default: '00:00 - 23:59'},
    shopType: {type: Number, default: 0}, // 0: 普通超市
    school: {type: Schema.Types.ObjectId, ref: 'School'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})
Shop = mongoose.model('Shop', ShopSchema)

export default Shop
