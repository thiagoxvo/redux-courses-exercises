import todoApp from  './reducers'
import { createStore } from 'redux'

const configureStore = () => {

  const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch
    if(!console.group){
      return rawDispatch
    }
    return (action) => {
      console.group(action.type)
      console.log('%c prev state', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action)
      const returnValue = rawDispatch(action)
      console.log('%c next state', 'color: green', store.getState())
      console.group(action.type)
      return returnValue
    }
  }

  const store = createStore(
    todoApp
  )

  store.dispatch = addLoggingToDispatch(store)

  return store
}

export default configureStore
