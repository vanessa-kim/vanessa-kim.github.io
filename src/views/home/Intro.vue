<template>
  <div class="home-form intro">
    <h4>UI DESIGNER & FRONTEND DEVELOPER</h4>
    <h1>Vanessa Kim's<br/>playground</h1>
    <div class="home-description">
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
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home-form {
  text-align: center;
  border-top: 3px solid #293344 !important;

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
 
  .home-description {
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
      height: 50px;
      line-height: 26px;
      border: 3px solid #293344;
      background-color: #fff;
      color: #212121;
      padding: 0 24px 0 14px;
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
        right: -10px;
        bottom: -10px;
        display: block;
        width: 100%;
        height: 36px;
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
</style>