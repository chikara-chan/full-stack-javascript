import Router from 'koa-router'
import shop from '../controllers/shop'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/shop'})

router.use(checkLogin)
router.get('/getShopInfo', shop.getShopInfo)
router.post('/updateShopInfo', shop.updateShopInfo)

export default router
