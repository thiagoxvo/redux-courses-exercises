import { connect } from 'react-redux'
import { getVisibleTodos, toggleTodo } from '../actions'
import TodoList from './TodoList'

const mapTodoListStateToProps = (state) => {
  const { todos, visibilityFilter } = state
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
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
