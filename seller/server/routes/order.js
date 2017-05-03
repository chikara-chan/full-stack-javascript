import Router from 'koa-router'
import order from '../controllers/order'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/order'})

router.use(checkLogin)
router.post('/sendOrder', order.sendOrder)
router.post('/rejectOrder', order.rejectOrder)
router.post('/receiveOrder', order.receiveOrder)
router.post('/confirmOrderRefund', order.confirmOrderRefund)
router.post('/rejectOrderRefund', order.rejectOrderRefund)
router.get('/getOrders', order.getOrders)
router.get('/getOrder', order.getOrder)

export default router
