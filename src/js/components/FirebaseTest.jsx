import React, {Component, PropTypes} from 'react'
import {
    Grid
} from 'react-bootstrap'
// import {connect} from 'react-redux'
// import {firebase, helpers} from 'redux-react-firebase'
// import FacebookLogin from 'react-facebook-login'
// import _ from 'lodash'
// const {isLoaded, isEmpty, dataToJS} = helpers

export default class extends Component {
    static propTypes = {
        FBLogin: PropTypes.func.isRequired,
        getUserData: PropTypes.func.isRequired
    };
    static defaultProps = {
    };
    constructor (props) {
        super(props)
        this.state = {
            message: ''
        }
        console.log(this.state)
        this.FBLogin = this.FBLogin.bind(this)
        this.getUserData = this.getUserData.bind(this)
        this.getYearData = this.getYearData.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit (event) {
        event.preventDefault()
    }
    FBLogin () {
        console.log(this.props)
        this.props.FBLogin()
    }
    getUserData () {
        console.log('get user data...')
        this.props.getUserData()
    }
    getYearData () {
        console.log('get Year data...')
        this.props.getYearData(97)
    }
    componentDidMount () {
        console.log('====here====')
        console.log(this.props)
    }
    render () {
        return (
        <div>
            <br/>
            <br/>
            <div>
                <Grid>
                    <br/>
                    <br/>
                    <div>
                        <button className="btn btn-primary" onClick={this.FBLogin}>FBlogin</button>
                        <button className="btn btn-primary" onClick={this.getUserData}>getUserData</button>
                        <button className="btn btn-primary" onClick={this.getYearData}>getYearData</button>
                        {/* <form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
                            <h2>get User Profile</h2>
                            <p>{this.state.message}</p>
                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="text" defaultValue={this.props.currentUser}
                                 className="form-control" id="email" placeholder="Email" name="email"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form> */}
                    </div>
                </Grid>
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
