<template>
  <div class="home-container" @scroll="handleScrollActive" ref="wrap">
    <div class="intro-page" id="intro" ref="page1">
      <prev-button v-show="activePage !== 'intro'" :prevPage="prevPage"/>
      <div class="intro-wrap">
        <intro />
      </div>
      <vertical-move-air-bollons />
      <next-button v-if="activePage !== 'contact'" :nextPage="nextPage"/>
    </div>
    <div class="who-wrap" id="who">
      <who />
    </div>
    <div class="work-wrap" id="work">
      test3
    </div>
    <div class="contact-wrap" id="contact">
      <contact />
    </div>
  </div>
</template>

<script>
import VerticalMoveAirBollons from '@/components/VerticalMoveAirBollons';
import NextButton from '@/components/NextButton';
import PrevButton from '@/components/PrevButton';
import Intro from '@/views/home/Intro';
import Who from '@/views/home/Who';
import Contact from '@/views/home/Contact';

export default {
  name: 'Home',
  components: {
    VerticalMoveAirBollons,
    NextButton,
    PrevButton,
    Intro,
    Who,
    Contact,
  },
  data: () => ({
    activePage: 'intro',
    pages: ['intro', 'who', 'work', 'contact'],
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
      if(findIndex === -1 || findIndex === 3) return this.pages[3];
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
        case 2 : 
          this.$emit('update:page-active', 'work');
          this.activePage = 'work'; 
          return;
        default: 
          this.$emit('update:page-active', 'contact');
          this.activePage = 'contact'; 
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

.contact-wrap {
  height: 100vh;
  background-color: orange;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}
</style>