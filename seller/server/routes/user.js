import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({prefix: '/user'})

router.post('/login', user.login)

export default router
