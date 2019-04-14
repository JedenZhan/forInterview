<template>
    <div class="App">
        <span>hello world {{ data1 }}</span>
        <span>{{ vuexData1 }}</span>
        <p>
            <router-link to="/foo" @click="tofoo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <button @click="tofoo()">toFoo</button>
            <button @click="toMine()">toMine</button>
            <button @click="plusCount()">count+1</button>
            <button @click="increaseCount()">count-1</button>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App',

    data () {
        return {
            data1: 'nice',
            // vuexData: this.$store.state.count // 初步访问vuex-store
        }
    },
    methods: {
        tofoo() {
            this.$router.push('/foo') // 编程式导航, 利用js控制导航逻辑
        },
        toMine() {
            this.$router.push('/mine/:123456')
        },
        plusCount () {
            
        }

    },
    computed: {
        vuexData1 () {
            return this.$store.state.count;
        }
    },
    mounted() {
        console.log(this.$options)
        console.log(this.$router)
        console.log(this.$store)
    },
}
</script>
<style lang='stylus' scoped>
.App {
    color #00f
}
</style>

