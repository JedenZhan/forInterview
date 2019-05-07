// commit的方法在这里创建, 而且改变state只能通过mutations改变
const mutations = {
    increment(state) {
        state.count ++
        console.log(state.count)
    },
    incerise(state) {
        state.count --
        console.log(state.count)
    }
}

export default mutations