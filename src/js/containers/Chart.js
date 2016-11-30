import { connect } from 'react-redux'
import Components from 'js/components'
import Action from 'js/actions'
const mapStateToProps = (state) => ({
    userData: state.SAT
})

const mapDispatchToProps = (dispatch) => ({
    getYearData: (year) => dispatch(Action.SAT.getYearData(year)),
    getUserTotalYearData: () => dispatch(Action.SAT.getUserTotalYearData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.Chart)
