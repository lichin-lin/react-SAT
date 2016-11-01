import React, { Component } from 'react'
import DevTools from './../containers/DevTools'
import Footer from './common/Footer'
import Nav from './common/Nav'

export default class App extends Component {

    render () {
        return (
            <div>
                <Nav />
                { this.props.children }
                <Footer />
                { process.env.NODE_ENV !== 'production' ? <DevTools/> : null }
            </div>
        )
    }
}
