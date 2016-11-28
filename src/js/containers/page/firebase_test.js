import { connect } from 'react-redux'
import Component from 'js/components'
import Action from 'js/actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    FBLogout: () => dispatch(Action.Session.FBLogout()),
    FBLogin: () => dispatch(Action.Session.FBLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Component.page.firebase)
