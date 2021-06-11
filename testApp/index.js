import React from 'react'
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from './reducers'
import App from './components/App'

// createStore创建store 存放应用所有的state
let store = createStore(todoApp)

// 所有的容器都可以访问store
render(
  <Provider store={store}>
    <App/>
  </Provider>,document.getElementById('root')
)