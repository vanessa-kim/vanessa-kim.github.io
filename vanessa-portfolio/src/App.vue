<template>
  <div id="app">
    <vertical-random-box />
    <p class="test1">nanum-square light <span>color diff</span></p>
    <p class="test2">nanum-square normal <span>color diff</span></p>
    <p class="test3">nanum-square bold <span>color diff</span></p>
    <p class="test4">nanum-square expandbold <span>color diff</span></p>
  </div>
</template>

<script>
import VerticalRandomBox from './components/VerticalRandomBox.vue'

export default {
  name: 'App',
  components: {
    VerticalRandomBox,
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