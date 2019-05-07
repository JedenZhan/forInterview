// 用于保存修改store内容的方法
import { combineReducers } from 'redux' // 合并reducers



// reducer可以接收state, 但是决不能修改state
function counter(state=0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        
        default:
            return state + 1
    }
}

export default combineReducers({
    counter
})