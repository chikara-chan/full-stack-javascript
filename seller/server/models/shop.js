import mongoose, {Schema, Types} from '../lib/mongoose'

let ShopSchema, Shop

ShopSchema = new mongoose.Schema({
    id: {type: Schema.Types.ObjectId, default: Types.ObjectId},
    shopName: {type: String},
    shopType: {type: Number, default: 0}, // 0: 普通店铺
    schoolId: {type: Schema.Types.ObjectId},
    user: {type: Schema.Types.ObjectId}
})
Shop = mongoose.model('Shop', ShopSchema)

export default Shop
