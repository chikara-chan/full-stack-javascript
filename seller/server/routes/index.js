import fs from 'fs'
import path from 'path'
import Router from 'koa-router'
import responseWrapper from '../middlewares/responseWrapper'

const router = new Router({prefix: '/api'})
let subRouter

router.use(responseWrapper)
fs.readdirSync(__dirname)
    .filter(filename =>
        filename !== path.basename(__filename)
    )
    .forEach(filename => {
        subRouter = require(`./${filename}`)
        router.use(subRouter.routes(), subRouter.allowedMethods())
    })

export default router
