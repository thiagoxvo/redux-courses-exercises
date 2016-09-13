import { connect } from 'react-redux'
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

const mapTodoListStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      ownProps.filter
    )
  }
}

const mapTodoListDispatchToProps = (dispatch) => {
  return {
    onClickTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapTodoListStateToProps,
  mapTodoListDispatchToProps
)(TodoList)

export default VisibleTodoList
