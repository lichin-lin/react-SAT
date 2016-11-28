import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    getUserData: createAction('getUserData', Api.Firebase.getUserData)
}
