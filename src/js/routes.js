import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import Base from './containers/Base'
import NotFound from './components/NotFound'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)

import Components from './components'

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Base} />
                    <Route path="setting" component={Components.page.setting} />
                    <Route path="score" component={Components.page.score} />
                    <Route path="chart" component={Components.page.chart} />
                    <Route path="firebase" component={Components.page.firebase} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>

        )
    }
}

/* <Route path="score" component={Components.page.AdminLeftList} />
<Route path="chart" component={Components.page.AdminLeftList} /> */
