import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions({

    getUserData: {
        next (state, action) {
            console.log(action.payload)
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
