<template>
    <div class="App">hello world {{ data }}</div>
</template>
<script>
export default {
    name: 'App', 
    data: function () {
        return {
            data: 'nice'
        }
    },

}
</script>
<style lang='stylus' scoped>
.App {
    color red
}
</style>

