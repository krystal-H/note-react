import React from 'react'
import FilterLink from '../containers/Filter'

// 允许用户改变可见todo过滤器的组件
const Footer = () => {
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      ALL
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
}

export default Footer
