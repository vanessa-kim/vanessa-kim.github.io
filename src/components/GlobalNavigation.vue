<template>
  <div class="global-nav">
    <navigation-button class="nav-btn" />

    <div class="main-pagination">
      <span>{{ pageNumber }}/4</span>
      <a href="#intro" :class="['pagination-btn', { 'active' : isActive('intro') }]" title="Intro">◆</a>
      <a href="#who" :class="['pagination-btn', { 'active' : isActive('who') }]" title="Vanessa">◆</a>
      <a href="#work" :class="['pagination-btn', { 'active' : isActive('work') }]" title="Work">◆</a>
      <a href="#contact" :class="['pagination-btn', { 'active' : isActive('contact') }]" title="Contact">◆</a>
    </div>

    <div class="sns_util">
      <a href="#" class="linked_in" :style="snsImage" title="Profile in LinkedIn">Profile in LinkedIn</a>
      <a href="#" class="insta" :style="snsImage" title="DailyLife in Instagram">DailyLife in Instagram</a>
      <a href="#" class="email_to" :style="snsImage" title="E-mail to Yeran">E-mail to Vanessa</a>
    </div>
  </div>
</template>

<script>
import NavigationButton from '@/components/NavigationButton';

export default {
  name: 'GlobalNavigation',
  components: {
    NavigationButton,
  },
  props: {
    activePage: {
      type: String,
      default: 'intro'
    },
  },
  data: () => ({

  }),
  computed: {
    snsImage() {
      return { backgroundImage: `url(${require('@/assets/img/ico_sns.png')})` };
    },
    pageNumber() {
      switch(this.activePage) {
        case 'intro':
          return 1;
        case 'who':
          return 2;
        case 'work':
          return 3;
        default:
          return 4;
      }
    },
  },
  methods: {
    isActive(page) {
      return this.activePage === page;
    },
  },
}
</script>

<style lang="scss">
.global-nav {
  display: flex;
  width: 110px;
  flex-direction: column;
  justify-content: space-between;
  
  .nav-btn {
    margin: 20px 30px 20px 20px;
  }
}

// main-pagination
.main-pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-size: 12px;
    line-height: 30px;
  }

  a {
    display: block;
    width: 22px;
    height: 22px;
    font-size: 12px;
    color: #29334422;
    text-align: center;

    &:hover {
      text-decoration: none;
      color: #293344;
    }
    &.active {
      font-size: 18px;
      color: #293344;
    }
  }
}

// sns-utils
.sns_util {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 30px;
  margin-right: 20px;
}
.sns_util a{
  display: block;
  width: 40px;
  height: 40px;
  background-size: 26px;
  background-repeat: no-repeat;
  border-radius: 30px;
  margin: 10px 0;
  transition: 0.15s;
  font-size: 0;
}
.sns_util a:hover{
  background-color: #29334422;
  transition: 0.15s;
  font-size: 0;
}
.sns_util a.linked_in{
  background-position: center 6px;
}
.sns_util a.insta{
  background-position: center -46px;
  font-size: 0;
}
.sns_util a.email_to{
  background-position: center -101px;
  font-size: 0;
}
</style>