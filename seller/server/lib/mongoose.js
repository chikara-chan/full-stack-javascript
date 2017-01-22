import mongoose from 'mongoose'
import config from '../config'
import utils from '../lib/utils'

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
            delete doc._id
        })
    })
    schema.post('findOne', function(doc) {
        doc.create = doc.create.getTime()
        doc.update = doc.update.getTime()
        delete doc._id
    })
})

export default mongoose

