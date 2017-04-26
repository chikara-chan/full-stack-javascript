import Router from 'koa-router'
import item from '../controllers/item'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/item'})

router.use(checkLogin)
router.post('/addItem', item.addItem)
router.get('/getItems', item.getItems)
router.get('/getRecommendItems', item.getRecommendItems)
router.post('/editItem', item.editItem)
router.post('/removeItem', item.removeItem)

export default router
