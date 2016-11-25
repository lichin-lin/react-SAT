import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { firebaseStateReducer } from 'redux-react-firebase'
import base from './Base'

export default combineReducers({
    base,
    firebase: firebaseStateReducer,
    routing
})
