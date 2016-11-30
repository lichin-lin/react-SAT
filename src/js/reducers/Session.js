import { handleActions } from 'redux-actions'

const initialState = {
    AuthData: {}
}

export default handleActions({

    FBLogin: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        },
        throw (state, action) {
            return {
                AuthData: {}
            }
        }
    },

    FBLogout: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    isUserLogin: {
        next (state, action) {
            return {
                ...state,
                isLogin: action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    default: (state, action) => {
        return {
            ...state
        }
    }
}, initialState)
