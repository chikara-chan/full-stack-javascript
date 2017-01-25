import Router from 'koa-router'
import cat from '../controllers/cat'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/cat'})

router.use(checkLogin)
router.get('/getCatInfo', cat.getCatInfo)

export default router
