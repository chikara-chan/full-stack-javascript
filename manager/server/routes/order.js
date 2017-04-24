import Router from 'koa-router'
import order from '../controllers/order'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/order'})

router.use(checkLogin)
router.post('/sendOrder', order.sendOrder)
router.post('/setOrder', order.setOrder)
router.post('/rejectOrder', order.rejectOrder)
router.post('/receiveOrder', order.receiveOrder)
router.get('/getOrders', order.getOrders)
router.get('/getOrder', order.getOrder)

export default router
