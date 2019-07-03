// 用于保存修改store内容的方法
import { combineReducers } from 'redux' // 合并reducers



// reducer可以接收state, 但是决不能修改state
const counter = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        
        default:
            return state + 1
    }
}

// todo
const getVisibileTodos = (todos, filter) => {
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

const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
  }

export default combineReducers({
    counter,
    getVisibileTodos
})