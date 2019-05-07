<template>
  <div>Mine组件, 上一个组件传过来的参数是{{$route.params.id}}</div>
</template>
<script>
export default {
  name: "Mine",
  data: () => {
    return {
      
    };
  },
  beforeRouteEnter(to, from, next) {
    // 这时不能用this访问vue实例, 因为这时组件还没被创建, 但是可以在next回调函数访问
    next(vm => {
        console.log(vm)
        return '/'
    })
  }
};
</script>
