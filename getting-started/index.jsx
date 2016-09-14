import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'

import { fetchTodos } from './fakeDatabase'

fetchTodos('all').then(todos => console.log(todos))

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('app')
)
