import Router from 'koa-router'
import common from '../controllers/common'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/common'})

router.use(checkLogin)
router.post('/upload', common.upload)

export default router
