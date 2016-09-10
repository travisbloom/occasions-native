import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import rootReducer from './reducers'

const logger = createLogger({
    diff: true,
    collapsed: true,
})

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger),
    )

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers/index').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
