import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'
import createSagaMiddleware from 'redux-saga'
import { ConnectedRouter } from 'react-router-redux'

import {history} from './history'

import App from './components/App'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

import './components/style.css'
import configureStore from './store'
import saga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(history, sagaMiddleware)

sagaMiddleware.run(saga);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/login/" component={Login} />
                <PrivateRoute path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
