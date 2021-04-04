<template>
  <div class="home-container" @scroll="handleScrollActive" ref="wrap">
    <div class="intro-page" id="intro" ref="page1">
      <prev-button v-show="activePage !== 'intro'" :prevPage="prevPage"/>
      <div class="intro-wrap">
        <intro />
      </div>
      <vertical-move-air-bollons />
      <next-button v-if="activePage !== 'work'" :nextPage="nextPage"/>
    </div>
    <div class="who-wrap" id="who">
      <who />
    </div>
    <div class="work-wrap" id="work">
      test3
    </div>
  </div>
</template>

<script>
import VerticalMoveAirBollons from '@/components/VerticalMoveAirBollons';
import NextButton from '@/components/NextButton';
import PrevButton from '@/components/PrevButton';
import Intro from '@/views/home/Intro';
import Who from '@/views/home/Who';

export default {
  name: 'Home',
  components: {
    VerticalMoveAirBollons,
    NextButton,
    PrevButton,
    Intro,
    Who,
  },
  data: () => ({
    activePage: 'intro',
    pages: ['intro', 'who', 'work'],
    debounce: null,
    captureYPostion: null,
    move: false,
  }),
  computed: {
    prevPage() {
      const findIndex = this.pages.findIndex(page => page === this.activePage);
      if(findIndex === -1 || findIndex === 0) return this.pages[0];
      return this.pages[findIndex - 1]
    },
    nextPage() {
      const findIndex = this.pages.findIndex(page => page === this.activePage);
      if(findIndex === -1 || findIndex === 2) return this.pages[2];
      return this.pages[findIndex + 1]
    },
  },
  methods: {
    handleScrollActive() {
      const currentYOffset = this.$refs.wrap.scrollTop;
      const elHeight = this.$refs.page1.offsetHeight;
      const position = Math.round(currentYOffset / elHeight);

      switch(position) {
        case 0 :
          this.$emit('update:page-active', 'intro');
          this.activePage = 'intro';
          return;
        case 1 :
          this.$emit('update:page-active', 'who');
          this.activePage = 'who';
          return;
        default: 
          this.$emit('update:page-active', 'work');
          this.activePage = 'work'; 
          return;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
}
.intro-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-wrap {
  display: flex;
  min-width: 700px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 90px 30px 90px 90px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}

.who-wrap {
  height: 100vh;
  padding: 90px 70px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}
.work-wrap {
  height: 100vh;
  background-color: orange;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}
</style>