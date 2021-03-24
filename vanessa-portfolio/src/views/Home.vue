<template>
  <div class="home-container">
    <div class="first-page">
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
            </b-button>
          </div>
        </div>
      </div>
      <vertical-move-air-bollons />
    </div>
  </div>
</template>

<script>
import VerticalMoveAirBollons from '@/components/VerticalMoveAirBollons.vue';
export default {
  name: 'Home',
  components: {
    VerticalMoveAirBollons,
  },
}
</script>

<style lang="scss" scoped>
.first-page {
  display: flex;
}

.intro-wrap {
  display: flex;
  min-width: 700px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 90px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      line-height: 26px;
      border: 3px solid #293344;
      background-color: transparent;
      color: #212121;
      padding: 0 20px;
      border-radius: 0;
      box-sizing: border-box;
      margin: 0 20px 20px auto;

      strong {
        display: inline-block;
        font-weight: 800;
        margin-left: 6px;
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
  margin-left: 30px;
  margin-bottom: 4px;

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
</style>