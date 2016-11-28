import App from './../components/App'
import { connect } from 'react-redux'
import Action from 'js/actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    FBLogout: (data) => dispatch(Action.Session.FBLogout(data)),
    FBLogin: (data) => dispatch(Action.Session.FBLogin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
