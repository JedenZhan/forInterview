import { combineReducers } from 'redux'

const defaultStore = {
  todo: '',
  todoList: []
}

const counter = (state = 0, action) => {
  let newState = state
  switch(action.type) {
    case 'INCREMENT':
      newState = state ++
      break
    case 'DECREMENT':
      newState = state --
      break
  }
  return newState
}

const rootReducer = combineReducers({counter})


export default rootReducer