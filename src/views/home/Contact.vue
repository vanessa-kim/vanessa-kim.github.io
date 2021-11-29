<template>
  <div class="contact_content" >
    <div class="contact_left">
      <h4>웹디자이너 바네사에게 당신의 프로젝트에 대해 말해주세요! </h4>
      <h1>Contact</h1>
      <div>
        <p>
          E-mail
          <span>yeran1225@gmail.com</span>
        </p>
        <p>
          Korea
          <span>010-8902-0330</span>
        </p>
        <p>
          Iternational
          <span>+82 10-8902-0330</span>
        </p>
        <p>
          Address
          <span>서울특별시 구로구, 대한민국</span>
        </p>
      </div>
      <p class="copylight">
        Copyright ⓒ 2015-2019 Yeran Kim All rights reserved.
      </p>
    </div>
    <div class="contact_right">
      <div class="contact_photo" :style="{backgroundImage:`url(${img})`}" />
      <div class="contact_photo_back" :style="{backgroundImage:`url(${imgbg})`}" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data: () => ({
  }),
  computed: {
    img() {
      return require(`@/assets/img/profile_head_bg.png`);
    },
    imgbg() {
      return require(`@/assets/img/profile_content_bg.jpg`);
    },
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
.contact_content {
  display: flex;
  justify-content: space-between;
  padding: 150px !important;
  background: #ebeff2;

  h1 {
    font-family: 'Berkshire Swash';
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 80px;
  }

  h4 {
    font-size: 18px;
    line-height: 36px;
    letter-spacing: -0.3px;
  }

  .contact_left {
    p {
      display: flex;
      justify-content: space-between;
      width: 428px;
      color: #293344;
      line-height: 24px;
      font-size: 15px;

      span {
        color: #293344;
      }
    }
  }

  .copylight {
    font-size: 12px;
    margin-top: 90px;
  }

  .contact_right {
    position: relative;
    .contact_photo {
      position: absolute;
      z-index: 1;
      width: 400px;
      height: 400px;
      border-radius: 200px;
      right: 300px;
      background-position: -258px 472px;
      background-size: 200%;
      box-shadow: 10px 10px 10px #29334433;
    }
    .contact_photo_back {
      position: absolute;
      right: -10px;
      top: 0;
      z-index: 0;
      width: 400px;
      height: 400px;
      border-radius: 200px;
      background: #fff;
      box-shadow: 0px 0px 30px #29334411;
      background-size: 200%;
      background-position: -293px -41px;
      opacity: 0.6;
    }
  }
}
</style>