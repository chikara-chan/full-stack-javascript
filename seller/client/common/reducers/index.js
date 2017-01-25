import {combineReducers} from 'redux'
import alert from './alert'
import navbar from './navbar'
import actionbar from './actionbar'
import user from './user'
import shop from './shop'
import item from './item'
import cats from './cats'
import modal from './modal'

const rootReducer = combineReducers({
    alert,
    navbar,
    actionbar,
    user,
    shop,
    item,
    cats,
    modal
})

export default rootReducer
