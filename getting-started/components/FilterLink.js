import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from './Link'

const mapLinkStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapLinkDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapLinkStateToProps,
  mapLinkDispatchToProps
)(Link)

export default FilterLink
