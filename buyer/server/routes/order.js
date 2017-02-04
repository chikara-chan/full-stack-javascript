import Router from 'koa-router'
import order from '../controllers/order'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/order'})

router.use(checkLogin)
router.post('/submitOrder', order.submitOrder)
router.post('/cancelOrder', order.cancelOrder)
router.post('/receiveOrder', order.receiveOrder)
router.get('/getOrders', order.getOrders)
router.get('/getOrder', order.getOrder)

export default router
