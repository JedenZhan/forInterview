import React, {Fragment } from 'react';
import PropTypes  from 'prop-types'

const Todo = ({onClick, Completed, Text}) => {
  return (
    <Fragment>
      <li
        onClick={onClick}
        style={{
          textDecoration: Completed ? 'line-through' : 'none'
        }}
      >
        {Text}
      </li>
    </Fragment>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}


export default Todo;