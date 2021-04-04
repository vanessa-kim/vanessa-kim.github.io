<template>
  <div id="app">
    <h1 class="logo-home">
      <a v-if="isHome" href="#intro"  title="Home">
        <img src="@/assets/img/img_logo.png" alt="vanessa kim logo" />
      </a>
      <router-link to="/" v-else>
        <img src="@/assets/img/img_logo.png" alt="vanessa kim logo" />
      </router-link>
    </h1>
    <router-view
      @update:page-active="handleMainActivePage"
    ></router-view>
    <global-navigation class="global-nav-position" :activePage="activePage"/>
  </div>
</template>

<script>
import GlobalNavigation from '@/components/GlobalNavigation';

export default {
  name: 'App',
  components: {
    GlobalNavigation,
  },
  data: () => ({
    activePage: 'intro',
  }),
  computed: {
    isHome() {
      return this.$route.name === 'home';
    }
  },
  methods: {
    handleMainActivePage(page) {
      this.activePage = page;
    },
    test() {
      console.log('test');
    },
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
  z-index: 100;
}

.global-nav-position {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
}
</style>