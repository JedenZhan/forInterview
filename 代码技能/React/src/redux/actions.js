// action文件
// 包含异步action, 同步action

// 如果使用了redux-thunk, actions可以是函数
// redux-thunk就是对dispatch方法做一个升级, 如果传入的是一个函数, 先执行函数然后传给store, 如果是一个对象, 直接传给store

import {
    ADD_TODO,
    REMOVE_TODO
} from './actionTypes.js'

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: REMOVE_TODO,
        index
    }
}