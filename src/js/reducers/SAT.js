import { handleActions } from 'redux-actions'

const initialState = {
    MeasureScore: {},
    StudentScore: {}
}

export default handleActions({

    getScoreData: {
        next (state, action) {
            console.log(action.payload)
            return {
                ...state,
                StudentScore: action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    getYearData: {
        next (state, action) {
            console.log(action.payload)
            return {
                ...state,
                MeasureScore: action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    updateUserScore: {
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
