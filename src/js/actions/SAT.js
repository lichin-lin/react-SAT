import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    getScoreData: createAction('getScoreData', Api.Firebase.getScoreData),
    getYearData: createAction('getYearData', Api.Firebase.getYearData),
    getUserTotalYearData: createAction('getUserTotalYearData', Api.Firebase.getUserTotalYearData),
    updateUserScore: createAction('updateUserScore', Api.Firebase.updateUserScore)
}
