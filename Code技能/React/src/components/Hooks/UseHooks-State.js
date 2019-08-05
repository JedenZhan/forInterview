import React, { useState, Fragment } from 'react'
import { Button } from 'antd'

const UseHooks_State = () => {
  const [count, setCount] = useState(0)
  return (
    <Fragment>
      <Button onClick={() => {setCount(count + 1)}}>+ 1</Button>
      { count }
      <Button onClick={() => {setCount(count - 1)}}>- 1</Button>
    </Fragment>
  )
}


export default UseHooks_State