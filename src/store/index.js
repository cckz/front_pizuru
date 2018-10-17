import storage from 'redux-persist/es/storage'
import { applyMiddleware, createStore } from 'redux'
import { createFilter } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
//import apiMiddleware from '../middlewares/apiMidleware';

export default (history, sagaMiddleware) => {
    const persistedFilter = createFilter(
        'auth', ['access', 'refresh']);

    const reducer = persistReducer({
            key: 'polls',
            storage: storage,
            whitelist: ['auth'],
            transforms: [persistedFilter]
        },
        rootReducer)

    const store = createStore(
        reducer, {},
        applyMiddleware(
            sagaMiddleware,
            //apiMiddleware,
            routerMiddleware(history))
    )
    persistStore(store)
    window.store = store
    return store
}
