<template>
    <div>
        <span>{{fooNum}}</span>
        <span>{{first}}</span>
        <span>{{first}}</span>
        <!-- <span>{{second}}</span>
        <span>{{second}}</span> -->
        <el-button @click="count">+ 1</el-button>
    </div>
</template>
<script>
export default {
    name: 'Foo',
    data () { // 函数是为了数据私有化
        return {
            fooNum: 1
        }
    },
    computed: {
        first () {
            console.log('computedChanged')
            return 1 + this.fooNum // 当数据变化时执行
            
        }
    },
    watch: {
        fooNum () {
            console.log('changed')
        }
    },
    methods: {
        count () {
            this.fooNum ++
            this.fooNum --
        }
    },

    
}
</script>
<style lang="stylus" scoped>

</style>