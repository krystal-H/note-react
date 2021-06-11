import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../actions";

let AddTodo = ({dispatch}) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) { return }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }}/>
        <button type="button">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// 使用 React Redux 库的connect生成容器组件
// 将store中的状态和方法映射成为组件的属性和方法
AddTodo = connect()(AddTodo)

export default AddTodo