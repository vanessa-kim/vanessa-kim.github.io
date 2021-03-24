<template>
  <div id="app">
    <h1 class="logo-home">
      <router-link to="/">
        <img src="@/assets/img/img_logo.png" alt="vanessa kim logo" />
      </router-link>
    </h1>
    <router-view></router-view>
    <global-navigation class="global-nav-position"/>
  </div>
</template>

<script>
import GlobalNavigation from '@/components/GlobalNavigation';

export default {
  name: 'App',
  components: {
    GlobalNavigation,
  },
}
</script>

<style scoped>
#app {
  position: relative;
}

.logo-home {
  position: absolute;
  left: 20px;
  top: 20px;
}
.global-nav-position {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
}
</style>