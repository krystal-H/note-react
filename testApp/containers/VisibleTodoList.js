import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// 根据当前显示的状态来对todo列表进行过滤，并渲染TodoList
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
// 把当前redux store state映射到展示组件的props中
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
// 分发action  
// 接受dispatch()方法并返回期望注入到展示组件TodoList的props中的回调函数
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
// 使用connect生成容器组件
// VisibleTodoList需要计算传到TodoList中的props
// 将todos和onTodoClick注入到TodoList组件中
// 像组件TodoList注入 todos的props 和叫 onTodoClick的props
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
