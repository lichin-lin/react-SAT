import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import cookie from 'react-cookie'

export default class Base extends Component {
    static propTypes = {
        FBLogin: PropTypes.func.isRequired,
        currentUser: PropTypes.object.isRequired
    };
    constructor (props) {
        super(props)
        this.FBLogin = this.FBLogin.bind(this)
        this.state = {
            fakeNum: 50,
            userId: ''
        }
    }
    FBLogin () {
        this.props.FBLogin().then((state) => {
            cookie.save('user', state.payload)
            browserHistory.push('/SAT')
        })
    }
    componentWillMount () {
        let user = cookie.load('user')
        console.log(user)
        if (user === undefined) {
            // not login yet.
        } else {
            this.props.CookieLogin(user).then(() => {
                browserHistory.push('/SAT')
            })
        }
    }
    render () {
        return (
            <div className="not_login">
                <div className="not_login_title">
                    <h1 className="not_login_logo">SAT.me</h1>
                    <p>歷屆試題級分計算機</p>
                </div>
                <div className="not_login_section">
                    <p>已有 {this.state.fakeNum} 位考生使用</p>
                    <p>一起加入奮鬥的行列吧！</p>
                    <button className="sat_btn fb_btn" onClick={this.FBLogin}>以 facebook 登入</button>
                </div>
            </div>
        )
    }
}
