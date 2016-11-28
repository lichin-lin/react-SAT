import { connect } from 'react-redux'
import Components from 'js/components'
import Action from 'js/actions'
const mapStateToProps = (state) => ({
    currentUser: state.User
})

const mapDispatchToProps = (dispatch) => ({
    FBLogout: () => dispatch(Action.Session.FBLogout()),
    FBLogin: () => dispatch(Action.Session.FBLogin()),
    getUserData: () => dispatch(Action.User.getUserData()),
    getYearData: (year) => dispatch(Action.User.getYearData(year))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.FirebaseTest)
