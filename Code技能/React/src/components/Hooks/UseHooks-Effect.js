import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'antd'

const UseHooks_Effect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You Click ${count} times`
    return () => {
      document.title = 'app';
    }
  }, [count])

  return (
    <Fragment>
      <Button onClick={() => setCount(count + 1)}> + 1 </Button>
      { count }
      <Button onClick={() => setCount(count - 1)}> - 1 </Button>
    </Fragment>
  )
}

export default UseHooks_Effect