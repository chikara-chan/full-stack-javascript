import Router from 'koa-router'
import stat from '../controllers/stat'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/stat'})

router.use(checkLogin)
router.get('/getStats', stat.getStats)

export default router
