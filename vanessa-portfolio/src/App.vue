<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p class="test1">nanum-square light <span>color diff</span></p>
    <p class="test2">nanum-square normal <span>color diff</span></p>
    <p class="test3">nanum-square bold <span>color diff</span></p>
    <p class="test4">nanum-square expandbold <span>color diff</span></p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.test1 {
  font-weight: 300;
  color: $bgColor;
}
.test2 {
  font-weight: 400;
}
.test3 {
  font-weight: 600;
}
.test4 {
  font-weight: 800;
}
</style>