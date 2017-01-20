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
            path: 'item',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./item/containers/App'))
                }, 'item')
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
        }]
    }]
}

export default routes
