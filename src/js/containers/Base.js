import { connect } from 'react-redux'
import Base from './../components/Base'

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Base)
