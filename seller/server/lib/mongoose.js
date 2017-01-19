import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.db}`)
mongoose.Promise = Promise

export default mongoose

