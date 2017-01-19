import request from 'superagent'
import {browserHistory} from 'react-router'
import store from '../common/store/store'
import alert from '../common/actions/alert'

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
    const defaults = {
        url: null,
        type: 'post',
        data: {},
        'Content-Type': 'application/json'
    }
    let promise

    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url).withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key])
        }
    })

    return new Promise(resolve => {
        promise.send(options.data).then(res => {
            if (res.body.responseCode === -1) {
                browserHistory.push('/login')
            } else if (!res.body.status) {
                store.dispatch(alert.showAlert(false, res.body.message))
            } else if (!res.body.entry) {
                store.dispatch(alert.showAlert(true, res.body.message, () => {
                    resolve(res.body)
                }))
            } else {
                resolve(res.body)
            }
        }).catch(err => {
            store.dispatch(alert.showAlert(res.body.status, res.body.message))
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
