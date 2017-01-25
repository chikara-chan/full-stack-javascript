import Router from 'koa-router'
import item from '../controllers/item'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/item'})

router.use(checkLogin)
router.post('/addItem', item.addItem)

export default router
