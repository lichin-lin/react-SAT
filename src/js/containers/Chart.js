import { connect } from 'react-redux'
import Components from 'js/components'
import Action from 'js/actions'
const mapStateToProps = (state) => ({
    currentUser: state.Session,
    userData: state.SAT
})

const mapDispatchToProps = (dispatch) => ({
    FBLogin: () => dispatch(Action.Session.FBLogin()),
    isUserLogin: () => dispatch(Action.Session.isUserLogin()),
    getYearData: (year) => dispatch(Action.SAT.getYearData(year)),
    updateUserAvg: (avg) => dispatch(Action.SAT.updateUserAvg(avg)),
    getUserTotalYearData: () => dispatch(Action.SAT.getUserTotalYearData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.Chart)
