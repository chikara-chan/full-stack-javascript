import Router from 'koa-router'
import school from '../controllers/school'
import checkLogin from '../middlewares/checkLogin'

const router = new Router({prefix: '/school'})

router.use(checkLogin)
router.get('/getSchools', school.getSchools)

export default router
