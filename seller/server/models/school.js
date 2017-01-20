import mongoose, {Schema, Types} from '../lib/mongoose'

let SchoolSchema, School

SchoolSchema = new mongoose.Schema({
    schoolName: {type: String}

})
School = mongoose.model('School', SchoolSchema)

export default School
