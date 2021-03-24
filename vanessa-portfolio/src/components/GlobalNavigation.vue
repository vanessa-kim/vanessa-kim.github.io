<template>
  <div class="global-nav">
    <navigation-button class="nav-btn" />
    
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
  data: () => ({

  }),
  computed: {
    snsImage() {
      return { backgroundImage: `url(${require('@/assets/img/ico_sns.png')})` };
    },
  },
  methods: {

  },
}
</script>

<style lang="scss">
.global-nav {
  display: flex;
  width: 100px;
  flex-direction: column;
  
  .nav-btn {
    margin: 20px;
  }
}

// main-pagination
.main-pagination {
  display: block;

  a {
    font-size: 12px;
    color: #29334422;

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
  height: calc(100vh - 80px);
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