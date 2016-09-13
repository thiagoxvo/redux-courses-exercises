import { v4 } from 'node-uuid'

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})


export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
})
