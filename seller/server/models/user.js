import mongoose from '../lib/mongoose'

let UserSchema, User

UserSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
})
User = mongoose.model('User', UserSchema)

export default User
