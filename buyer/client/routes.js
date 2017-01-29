// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/containers/App'))
                }, 'home')
            }
        },
        childRoutes: [{
            path: 'order',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./order/containers/App'))
                }, 'order')
            }
        }, {
            path: 'orderDetail',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./orderDetail/containers/App'))
                }, 'orderDetail')
            }
        }, {
            path: 'item',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./item/containers/App'))
                }, 'item')
            }
        }, {
            path: 'addItem',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./addItem/containers/App'))
                }, 'addItem')
            }
        }, {
            path: 'editItem',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./editItem/containers/App'))
                }, 'editItem')
            }
        }, {
            path: 'me',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./me/containers/App'))
                }, 'me')
            }
        }, {
            path: 'login',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./login/containers/App'))
                }, 'login')
            }
        }, {
            path: 'signup',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./signup/containers/App'))
                }, 'signup')
            }
        }, {
            path: 'selectSchool',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./selectSchool/containers/App'))
                }, 'selectSchool')
            }
        }, {
            path: 'cart',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./cart/containers/App'))
                }, 'cart')
            }
        }]
    }]
}

export default routes
