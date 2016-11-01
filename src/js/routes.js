import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import Base from './containers/Base'
import NotFound from './components/NotFound'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Base} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        )
    }
}
