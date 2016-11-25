// import React, {Component, PropTypes} from 'react'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firebase, helpers} from 'redux-react-firebase'
import _ from 'lodash'
const {isLoaded, isEmpty, dataToJS} = helpers

@firebase()
class TableItem extends Component {
    render () {
        const {name} = this.props
        console.log(name)
        return (

            <li>
                <p>
                    chniese: {name['chniese']}
                </p>
            </li>
        )
    }
}

@firebase([
    '/table' // if list is too large you can use ['/table']
])
@connect(
    ({firebase}) => ({
        table: dataToJS(firebase, '/table')
    })
)
export default class extends Component {

    render () {
        const {firebase, table} = this.props

        const handleAdd = () => {
            const {newTodo} = this.refs
            firebase.push('/table', {text: newTodo.value, done: false})
            newTodo.value = ''
        }

        const tableList = (!isLoaded(table))
                            ? 'Loading' : (isEmpty(table))
                            ? 'Todo list is empty' : _.map(table, (name, id) => (<TableItem key={id} id={id} name={name}/>))

        return (
        <div>
            <br/>
            <br/>
            <h1>SAT table</h1>
            <ul>
              {tableList}
            </ul>
            <input type="text" ref="newTodo" />
            <button onClick={handleAdd}>Add</button>
        </div>
        )
    }
}
