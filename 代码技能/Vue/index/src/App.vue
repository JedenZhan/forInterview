<template>
    <div class="App">
        <span>hello world {{ data }}</span>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App',

    data: () => {
        return {
            data: 'nice'
        }
    }
}
</script>
<style lang='stylus' scoped>
.App {
    color #00f
}
</style>

