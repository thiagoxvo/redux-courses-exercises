import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'
import TodoList from './TodoList'

const mapTodoListStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
})

const VisibleTodoList = withRouter(connect(
  mapTodoListStateToProps,
  { onClickTodo: toggleTodo }
)(TodoList))

export default VisibleTodoList
