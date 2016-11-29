import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions({

    FBLogin: {
        next (state, action) {
            return {
                // ...state,
                ...action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    FBLogout: {
        next (state, action) {
            return {
                ...action.payload
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
