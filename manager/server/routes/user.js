import Router from 'koa-router'
import user from '../controllers/user'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/user'})

router.post('/login', user.login)
router.post('/logout', checkLogin, user.logout)
router.post('/updateUserInfo', checkLogin, user.updateUserInfo)
router.get('/getUserInfo', checkLogin, user.getUserInfo)
router.get('/getUsers', checkLogin, user.getUsers)

export default router
