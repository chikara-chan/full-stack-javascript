import {combineReducers} from 'redux'
import alert from './alert'
import navbar from './navbar'
import actionbar from './actionbar'
import user from './user'
import shop from './shop'
import item from './item'
import items from './items'
import cats from './cats'
import cart from './cart'
import schools from './schools'
import modal from './modal'
import order from './order'
import orders from './orders'

const rootReducer = combineReducers({
    alert,
    navbar,
    actionbar,
    user,
    shop,
    item,
    items,
    cats,
    cart,
    schools,
    modal,
    order,
    orders
})

export default rootReducer
