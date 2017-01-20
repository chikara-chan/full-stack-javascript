import {combineReducers} from 'redux'
import alert from './alert'
import navbar from './navbar'
import actionbar from './actionbar'
import user from './user'
import shop from './shop'

const rootReducer = combineReducers({
    alert,
    navbar,
    actionbar,
    user,
    shop
})

export default rootReducer
