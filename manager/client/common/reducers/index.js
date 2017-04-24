import {combineReducers} from 'redux'
import alert from './alert'
import navbar from './navbar'
import actionbar from './actionbar'
import user from './user'
import users from './users'
import shop from './shop'
import item from './item'
import items from './items'
import cats from './cats'
import modal from './modal'
import order from './order'
import orders from './orders'
import schools from './schools'

const rootReducer = combineReducers({
    alert,
    navbar,
    actionbar,
    user,
    users,
    shop,
    item,
    items,
    cats,
    order,
    orders,
    schools,
    modal
})

export default rootReducer
