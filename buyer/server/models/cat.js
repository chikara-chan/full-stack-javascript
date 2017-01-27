import mongoose, {Schema, Types} from '../lib/mongoose'

let CatSchema, Cat

CatSchema = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId, default: Types.ObjectId},
    catName: {type: String},
})
Cat = mongoose.model('Cat', CatSchema)

export default Cat
