import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.db}`)
mongoose.Promise = Promise
mongoose.plugin(schema => {
    schema.add({
        create: {type: Date, default: Date.now},
        update: {type: Date},
    })
    schema.set('versionKey', false)
    schema.pre('save', function(next) {
        this.update = new Date()
        next()
    })
    schema.pre('update', function(next) {
        this.update({update: new Date()})
        next()
    })
})

export default mongoose

