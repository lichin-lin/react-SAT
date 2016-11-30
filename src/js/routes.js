import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)

// import Components from 'js/components'
import Containers from 'js/containers'

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={Containers.App}>
                    <IndexRoute component={Containers.Base} />
                    {/* <Route path="setting" component={Components.Setting} /> */}
                    <Route path="SAT" component={Containers.SAT} />
                    <Route path="chart" component={Containers.Chart} />
                    {/* <Route path="firebase" component={Containers.FirebaseTest} /> */}
                </Route>
            </Router>

        )
    }
}
