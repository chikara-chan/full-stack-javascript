import configureStore from './configureStore'

let store

if (typeof window !== 'undefined') {
    store = configureStore(window.REDUX_STATE)
} else {
    store = configureStore()
}

export default store
