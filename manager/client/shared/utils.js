import request from 'superagent'
import {browserHistory} from 'react-router'
import store from '../common/store/store'
import alert from '../common/actions/alert'
import { message } from 'antd'

message.config({
  top: 63
})

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
    const defaults = {
        url: null,
        type: 'post',
        data: {}
    }
    let promise, action

    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url).withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key])
        }
    })
    action = options.type === 'get' ? 'query' : 'send'

    return new Promise((resolve,reject) => {
        promise[action](options.data).then(res => {
            if (res.body.responseCode === -1) {
                browserHistory.push('/login')
            } else if (!res.body.status) {
                message.error(res.body.message)
                reject(new Error(res.body.message))
            } else if (!res.body.entry) {
                message.success(res.body.message)
                resolve(res.body)
            } else {
                resolve(res.body)
            }
        }).catch(err => {
          message.error('网络异常，操作失败')
          reject(err)
        })
    })
}

/**
 * @return {Object} Return url params
 */
function getURLParams() {
    const search = location.search.slice(1),
        rParam = /([^&]*)=([^&]*)/g
    let ret = {},
        param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

export default {
    ajax,
    getURLParams
}
