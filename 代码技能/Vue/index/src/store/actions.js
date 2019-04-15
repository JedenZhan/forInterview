// 和mutations很类似
// 用于提交mutations
// Action 通过 store.dispatch 方法触发

const actions = {
    keep (context) { // 可以批量执行mutations
        context.commit('increment')
        context.commit('incerise')
    }
}

export default actions