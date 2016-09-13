import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import TodoList from './TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
  }
}

const mapTodoListStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all')
})

const VisibleTodoList = withRouter(connect(
  mapTodoListStateToProps,
  { onClickTodo: toggleTodo }
)(TodoList))

export default VisibleTodoList
