import request from 'superagent'
import {browserHistory} from 'react-router'
import store from '../common/store/store'
import alert from '../common/actions/alert'

let timer

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
                clearTimeout(timer)
                store.dispatch(alert.updateAlert({
                    show: true,
                    status: false,
                    message: res.body.message
                }))
                timer = setTimeout(() => {
                    store.dispatch(alert.updateAlert({
                        show: false,
                    }))
                }, 1000)
            } else if (!res.body.entry) {
                clearTimeout(timer)
                store.dispatch(alert.updateAlert({
                    show: true,
                    status: true,
                    message: res.body.message
                }))
                timer = setTimeout(() => {
                    store.dispatch(alert.updateAlert({
                        show: false,
                    }))
                    resolve(res.body)
                }, 1000)
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
