import Router from 'koa-router'
import user from '../controllers/user'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/user'})

router.post('/login', user.login)
router.post('/signup', user.signup)
router.post('/logout', checkLogin, user.logout)
router.post('/updateUserInfo', checkLogin, user.updateUserInfo)
router.get('/getUserInfo', checkLogin, user.getUserInfo)

export default router
