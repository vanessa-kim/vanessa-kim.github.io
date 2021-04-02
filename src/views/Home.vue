<template>
  <div class="home-container" ref="wrap">
    <div class="intro-page" id="intro" ref="page1">
      <prev-button v-show="activePage !== 'intro'" :prevPage="prevPage"/>
      <div class="intro-wrap">
        <div class="home-intro">
          <h4>UI DESIGNER & FRONTEND DEVELOPER</h4>
          <h1>Vanessa Kim's<br/>playground</h1>

          <div class="intro-description">
            <h6>INTRO</h6>
            <p>
              Welcome to Vanessa's web space. <br/>
              No worries, No fears, Only fun. <br/>
              Let's just enjoy the floating trip in this small space with me.
            </p>
            <b-button>
              WHO IS <strong>VANESSA?</strong>
              <i class="find-icon" />
              <i class="custom-edge">
                <span><span></span></span>
              </i>
            </b-button>
          </div>
        </div>
      </div>
      <vertical-move-air-bollons />
      <next-button v-if="activePage !== 'work'" :nextPage="nextPage"/>
    </div>
    <div class="who-wrap" id="who">
      test2
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
export default {
  name: 'Home',
  components: {
    VerticalMoveAirBollons,
    NextButton,
    PrevButton,
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
  mounted() {
    this.$refs.wrap.addEventListener('scroll', this.throttle(this.smoothScroll), 100, { passive: false });
  },
  beforeDestroy() {
    this.$refs.wrap.removeEventListener('scroll', this.smoothScroll, { passive: false });

  },
  methods: {
    throttle(callback, limit = 100) {
      let waiting = false;
      return function() {
        if(!waiting) {
          callback.apply(this, arguments);
          waiting = true;
          setTimeout(()=>{
            waiting = false;
          }, limit);
        }
      }
    },

    smoothScroll() {
      this.handleScrollActive();

      if(this.debounce) {
        clearTimeout(this.debounce);
      }
      
      const currentYOffset = this.$refs.wrap.scrollTop;
      const elHeight = this.$refs.page1.offsetHeight;
      const position = parseInt(currentYOffset / elHeight);
      const scrollDirection = Math.sign(this.captureYPostion - currentYOffset); 

      this.debounce = setTimeout(()=> {
        this.captureYPostion = this.$refs.wrap.scrollTop;

        this.$refs.wrap.scrollTo({
          left: 0,
          top: scrollDirection === -1 ? elHeight * (position + 1) : elHeight * position,
          duration: 50
        });
      }, 100);

    },

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
  // scroll-snap-type: y mandatory;
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
  // scroll-snap-align: start;
  // scroll-snap-stop: normal;
}

.home-intro {
  text-align: center;
  border-top: 3px solid #293344;

  h4 {
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 70px;
    height: 70px;
    margin-top: 3px;
    margin-bottom: 30px;
    padding: 20px 0;
    font-weight: 600;
    letter-spacing: -0.6px;
    border-top: 3px solid #293344;

    &:before {
      content: '◆◆◆';
      display: block;
      position: absolute;
      top: 10px;
      left: 50%;
      margin-left: -80px;
      width: 160px;
      height: 20px;
      border-bottom: 1px solid #293344;
      line-height: 40px;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -80px;
      width: 160px;
      height: 1px;
      border-bottom: 1px solid #293344;
    }
  }

  h1 {
    font-size: 80px;
    font-weight: 800;
    letter-spacing: -4px;
    line-height: 80px;
    margin-bottom: 50px;
  }
  .intro-description {
    h6 {
      height: 38px;
      line-height: 34px;
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 5px;
      border-top: 3px solid #293344;
      border-bottom: 1px solid #293344;
    }
    p {
      font-size: 16px;
      text-align: left;
      line-height: 22px;
      padding: 20px 0;
    }

    button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      line-height: 26px;
      border: 3px solid #293344;
      background-color: #fff;
      color: #212121;
      padding: 0 30px 0 20px;
      border-radius: 0;
      box-sizing: border-box;
      margin: 0 20px 20px auto;

      strong {
        display: inline-block;
        font-weight: 800;
        margin-left: 6px;
      }

      &:after {
        content: '';
        position: absolute;
        right: -16px;
        bottom: -16px;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #e9edf4;
        z-index: -1;
      }
    }
  }
}

.find-icon {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 30px;
  border: 3px solid #293344;
  margin-left: 11px;
  margin-bottom: 7px;

  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 12px;
    left: 15px;
    width: 3px;
    height: 8px;
    background-color: #293344;
    transform: rotateZ(135deg);
  }
}

.custom-edge {
  position: absolute;
  top: -3px;
  right: -3px;
  background-color: #ffffff;
  width: 23px;
  height: 23px;
  overflow: hidden;

  & > span{
    position: absolute;
    top: 6px;
    right: 6px;
    border-top: 17px solid #2e2e19;
    border-bottom: 17px solid transparent;
    border-right: 17px solid transparent;
    border-left: 17px solid transparent;
    transform: rotate(45deg);

    & > span {
      position: absolute;
      top: -14px;
      left: -10px;
      display: block;
      width: 0px;
      height: 0px;
      border-top: 10px solid #bcc5d8;
      border-bottom: 10px solid transparent;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
  }
}

.who-wrap {
  height: 100vh;
  background-color: green;
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