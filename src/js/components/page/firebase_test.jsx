import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {firebase, helpers} from 'redux-react-firebase'
// import FacebookLogin from 'react-facebook-login'
// import _ from 'lodash'
// const {isLoaded, isEmpty, dataToJS} = helpers

export default class extends Component {
    // static propTypes = {
    //     FBLogin: PropTypes.func.isRequired
    // };
    // static defaultProps = {
    // };
    // constructor (props) {
    //     super(props)
    //     this.FBLogin = this.FBLogin.bind(this)
    // }
    // FBLogin () {
    //     this.props.FBLogin()
    // }
    render () {
        return (
        <div>
            <br/>
            <br/>
            <h1>SAT table</h1>
            <ul>
              {/* {tableList} */}
            </ul>
            <input type="text" ref="newTodo" />
            <button onClick={this.props.FBLogin}>login</button>
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
