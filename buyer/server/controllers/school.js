import School from '../models/school'

async function getSchoolInfo(ctx) {
    let school

    school = await School.find({}).lean()
    if (school) {
        ctx.body = {
            entry: school
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    getSchoolInfo
}
