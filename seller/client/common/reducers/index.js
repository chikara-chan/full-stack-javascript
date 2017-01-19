import {combineReducers} from 'redux'
import userInfo from './userInfo'
import alert from './alert'

const rootReducer = combineReducers({
    userInfo,
    alert
})

export default rootReducer
