import mongoose, {Schema, Types} from '../lib/mongoose'

let UserSchema, User

UserSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, default: Types.ObjectId},
    username: {type: String, unique: true},
    password: {type: String},
    nickname: {type: String, default: () => `用户${Types.ObjectId().toString().slice(-8)}`},
    address: {type: String},
    mobile: {type: Number},
    email: {type: String},
    identity: {type: Number},
    avatar: {type: String, default: '/assets/user-default.png'},
    level: {type: Number, default: 0}, // 0: 买家 1: 卖家 2: 管理员
})
User = mongoose.model('User', UserSchema)

export default User
