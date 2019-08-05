import React, { Fragment, useReducer, useState } from 'react'
import { Button } from 'antd'

function reducer(count, action) {
  switch (action.type) {
    case 'up':
      return { count: count.count + 1 }
    case 'down':
      return { count: count.count - 1 }
  }
}

const UseHooks_Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 })

  return (
    <Fragment>
    	<Button onClick={() => {dispatch({ type: 'up' })}}> + 1 </Button>
      { state.count }
			<Button onClick={() => {dispatch({ type: 'down' })}}> - 1 </Button>
    </Fragment>
  )
}

export default UseHooks_Reducer