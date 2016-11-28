import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {firebase, helpers} from 'redux-react-firebase'
// import FacebookLogin from 'react-facebook-login'
// import _ from 'lodash'
// const {isLoaded, isEmpty, dataToJS} = helpers

export default class extends Component {
    constructor (props) {
        super(props)
        this.state = {
            message: ''
        }
        console.log(this.state)
        this.FBLogin = this.FBLogin.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit (event) {
        event.preventDefault()
        console.log(this.props.currentUser)
    }
    FBLogin () {
        this.props.FBLogin()
    }
    render () {
        return (
        <div>
            <br/>
            <br/>
            <h1>SAT table</h1>
            <input type="text" ref="newlogin" />
            <button onClick={this.props.FBLogin}>login</button>

            <div className="col-md-6">
                <form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
                    <h2>Get User Profile</h2>
                    <p>{this.state.message}</p>
                    <p>{this.props.currentUser}</p>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
        )
    }
}

// @firebase()
// class TableItem extends Component {
//     render () {
//         const {name} = this.props
//         // console.log(name)
//         return (
//
//             <li>
//                 <p>
//                     chniese: {name['chniese'][1]}
//                     <br/>
//                     english: {name['english'][1]}
//                 </p>
//             </li>
//         )
//     }
// }
//
// @firebase([
//     '/table' // if list is too large you can use ['/table']
// ])
// @connect(
//     ({firebase}) => ({
//         table: dataToJS(firebase, '/table')
//     })
// )
// ------------ in render -------------
// const {firebase, table} = this.props

// const handleAdd = () => {
//     const {newTodo} = this.refs
//     firebase.push('/table', {text: newTodo.value, done: false})
//     newTodo.value = ''
// }
// const tableList = (!isLoaded(table))
//                     ? 'Loading' : (isEmpty(table))
//                     ? 'Todo list is empty' : _.map(table, (name, id) => (<TableItem key={id} id={id} name={name}/>))

// const responseFacebook = (response) => {
//     console.log(response)
// }

// const fbLogin = () => {
//     console.log('fb login...', firebase)
//     firebase.login('facebook', function (error) {
//         if (error) {
//             console.log('Authentication Failed', error)
//         } else {
//             console.log('Authenticated successfully with payload:')
//         }
//     })
// }
