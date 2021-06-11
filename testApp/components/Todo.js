import React from 'react'
import PropTypes from 'prop-types'

// 一个todo项
/**
 * text 显示文本内容
 * completed todo项是否显示删除线
 * onClick当todo项被点击时调用的回调函数
 */
const Todo = ({ onClick, completed, text }) => {
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string,isRequired
}

export default Todo