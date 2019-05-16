<template>
  <div>
    <el-button @click="sendMessageToFather">向父组件反馈</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendMessageToFather () {
        this.$emit('listenChildEvent', '来自子组件的反馈') // 父组件监听的事件名字, 第二个参数是要传递的数据
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>