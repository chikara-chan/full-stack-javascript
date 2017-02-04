import mongoose from 'mongoose'
import mongooseLong from 'mongoose-long'
import config from '../config'

mongooseLong(mongoose)
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
    schema.post('find', function(docs) {
        docs.forEach(doc => {
            doc.create = doc.create.getTime()
            doc.update = doc.update.getTime()
        })
    })
    schema.post('findOne', function(doc){
        if (doc) {
            doc.create = doc.create.getTime()
            doc.update = doc.update.getTime()
        }
    })
})

export default mongoose

