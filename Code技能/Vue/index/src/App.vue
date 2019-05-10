<template>
  <div class="App">
    本例子仅讲解, 请阅读源码与目录结构
    <span>hello world {{ data1 }}</span>
    <span>{{ vuexData1 }}</span>
    <p>
      <router-link to="/foo" @click="tofoo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <el-button @click="tofoo">toFoo</el-button>
      <el-button @click="toMine">toMine</el-button>
      <el-button @click="plusCount">count+1</el-button>
      <!-- 事件带括号不带均可, 带括号可以传参 -->
      <el-button @click="increaseCount">count-1</el-button>
      <el-button @click="keep">keepCount</el-button>
    </p>
    <hr>
        <h1>组件传值</h1>
        <h2>父传子</h2>
        <Child message="Jeden"/>
        <h2>子传父</h2>
        
    <hr>

    <router-view></router-view>
  </div>
</template>
<script>
import Child from './components/Child.vue'
export default {
  name: "App",

  data() {
    return {
      data1: "nice"
      // vuexData: this.$store.state.count // 初步访问vuex-store
    };
  },
  components: {
    Child
  },
  methods: {
    tofoo() {
      this.$router.push("/foo"); // 编程式导航, 利用js控制导航逻辑
    },
    toMine() {
      this.$router.push("/mine/:123456");
    },

    // 以下为 vuex
    plusCount() {
      this.$store.commit("increment"); // 提交所操作的方法, 具体方法定义在mutations里面
      console.log(this.$store.state.count);
    },
    increaseCount() {
      this.$store.commit("incerise");
      console.log(this.$store.state.count);
    },
    keep() {
      this.$store.dispatch("keep");
    }
  },
  computed: {
    vuexData1() {
      return this.$store.state.count;
    }
  },
  mounted() {
    console.log(this.$options);
    console.log(this.$router);
    console.log(this.$store);
  }
};
</script>
<style lang='stylus' scoped>
.App {
  color: #00f;
}
</style>

