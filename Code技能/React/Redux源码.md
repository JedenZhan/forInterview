## 使用

```js
const defaultState = { // 初store
  cash: 200
}

const reducer = (state = defaultState, action) { // 声明reducer
  const { type, payload } = action
  
  switch (type) {
    case '...':
      // do...
    case '...':
      // do...
  }
}

const reducers = Redux.combineReducers({treasury: reducer})

const store = Redux.createStore(reducers)

store.subscribe(() => {
  console.log('')
})

store.dispatch({
  type: required
  payload: 300
})
// ...
```



```js
var curry = fn =>
    judge = (...args) =>
        args.length === fn.length
            ? fn(...args)
            : (arg) => judge(...args, arg)
```



