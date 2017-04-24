import School from '../models/school'

async function getSchools(ctx) {
    const {_id} = ctx.session.user
    let schools

    schools = await School.find({}).lean()
    if (schools) {
        ctx.body = {
            entry: schools
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}


export default {
    getSchools,
}
