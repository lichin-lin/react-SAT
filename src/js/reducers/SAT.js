import { handleActions } from 'redux-actions'

const initialState = {
    MeasureScore: {},
    StudentScore: {},
    TotalScore: {}
}

export default handleActions({

    getScoreData: {
        next (state, action) {
            console.log('get score', action.payload)
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
            console.log('get year', action.payload)
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

    getUserTotalYearData: {
        next (state, action) {
            console.log(action.payload)
            return {
                ...state,
                TotalScore: action.payload
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
                ...state,
                ...action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },

    updateUserAvg: {
        next (state, action) {
            return {
                ...state,
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
