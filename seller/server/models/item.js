import mongoose, {Schema, Types} from '../lib/mongoose'
import './shop'
import './cat'

let ItemSchema, Item

ItemSchema = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId, default: Types.ObjectId},
    itemName: {type: String},
    brand: {type: String},
    desc: {type: String},
    itemType: {type: Number, default: 0}, // 0: 普通商品
    price: {type: Number, default: 0},
    quantity: {type: Number, default: 0},
    property: {type: String},
    unit: {type: String, default: '件'},
    pic: {type: String, default: '/assets/item-default.png'},
    deleted: {type: Number, default: 0}, // 0: 否 1: 是
    shop: {type: Schema.Types.ObjectId, ref: 'Shop'},
    cat: {type: Schema.Types.ObjectId, ref: 'Cat'}
})
Item = mongoose.model('Item', ItemSchema)

export default Item
