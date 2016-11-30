import { connect } from 'react-redux'
import Components from 'js/components'
import Action from 'js/actions'
const mapStateToProps = (state) => ({
    currentUser: state.Session
})

const mapDispatchToProps = (dispatch) => ({
    FBLogin: () => dispatch(Action.Session.FBLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.Login)
