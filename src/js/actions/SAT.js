import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    getScoreData: createAction('getScoreData', Api.Firebase.getScoreData),
    getYearData: createAction('getYearData', Api.Firebase.getYearData),
    updateUserScore: createAction('updateUserScore', Api.Firebase.updateUserScore)
}
