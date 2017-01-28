import Router from 'koa-router'
import order from '../controllers/order'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/order'})

router.use(checkLogin)
router.post('/submitOrder', order.submitOrder)

export default router
