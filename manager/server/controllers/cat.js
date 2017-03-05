import Cat from '../models/cat'

async function getCatInfo(ctx) {
    let cat

    cat = await Cat.find({}).lean()
    if (cat) {
        ctx.body = {
            entry: cat
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    getCatInfo
}
