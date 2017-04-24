import Router from 'koa-router'
import shop from '../controllers/shop'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/shop'})

router.use(checkLogin)
router.post('/updateShopInfo', shop.updateShopInfo)
router.get('/getShopInfo', shop.getShopInfo)
router.post('/signupShop', shop.signupShop)

export default router
