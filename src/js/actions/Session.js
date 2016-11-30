import { createAction } from 'redux-actions'
import Api from 'js/api'
export default {
    FBLogin: createAction('FBLogin', Api.Firebase.FBLogin),
    FBLogout: createAction('FBLogout', Api.Firebase.FBLogout),
    isUserLogin: createAction('isUserLogin', Api.Firebase.isUserLogin)
}
