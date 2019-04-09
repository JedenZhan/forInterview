<template>
    <div>hello world {{ data }}</div>
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
<style>
div {
    color: red;
}
</style>

