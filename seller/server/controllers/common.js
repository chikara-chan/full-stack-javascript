import fs from 'fs'
import path from 'path'
import {Types} from 'mongoose'
import mkdirp from 'mkdirp'

async function upload(ctx) {
    const {file} = ctx.req.body.files

    let ret, data, year, month, day, date, ext, dest

    if (file) {
        data = fs.readFileSync(file.path)
        date = new Date()
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()
        ext = file.name.slice(file.name.lastIndexOf('.'))
        dest = path.resolve(__dirname, `../../public/assets/${year}/${month}/${day}/${new Types.ObjectId()}${ext}`)
        mkdirp.sync(path.dirname(dest))
        fs.writeFileSync(dest, data)
        fs.unlink(file.path)
        ctx.body = {
            entry: dest.slice(dest.indexOf('/assets'))
        }
    } else {
        ctx.body = {
            status: false
        }
    }
}

export default {
    upload
}

