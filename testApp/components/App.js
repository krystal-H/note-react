import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
// 根组件 渲染余下的所有内容
const App =() => {
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
}

export default App
