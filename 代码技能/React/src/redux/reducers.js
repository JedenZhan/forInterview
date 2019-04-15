// 用于保存修改store内容的方法
import { combineReducers } from 'redux' // 合并reducers


function xxx(state=0, action) {
    return state
}

function yyy(state=0, action) {
    return state
}

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
    xxx,
    yyy,
    counter
})