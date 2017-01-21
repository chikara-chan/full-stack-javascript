import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({prefix: '/user'})

router.post('/login', user.login)
router.post('/updateUserInfo', user.updateUserInfo)
router.get('/getUserInfo', user.getUserInfo)

export default router
