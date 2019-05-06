import React, {useState} from 'react'

function TryHooks () {
    const [count, setCount] = useState(0); // useState是react的其中一个hook, 让函数组件有自己的状态
    return (
        <div>
            <div style={{borderBottom: '1px solid #000', borderTop: '1px solid #000', marginTop: '20px'}}>
                以下为hooks
            </div>
            <p>{ count }</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>addCount</button>
        </div>
    )
}

export default TryHooks