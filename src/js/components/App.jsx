import React, { Component } from 'react'
import DevTools from './../containers/DevTools'
import Footer from './common/Footer'
import Nav from './common/Nav'

export default class App extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                <Nav />
                { this.props.children }
                <Footer />
                <button onClick={this.props.FBLogin}>login</button>
                <button onClick={this.props.FBLogout}>logout</button>
                <button onClick={this.props.getUserData}>get user data</button>
                {/* <div>
                    { window.mapObject(this.props.scoreList, (score) => (
                        <ul key={score.id}>
                            <li>
                                {score}
                            </li>
                        </ul>
                    ))}
                </div> */}
                { process.env.NODE_ENV !== 'production' ? <DevTools/> : null }
            </div>
        )
    }
}
