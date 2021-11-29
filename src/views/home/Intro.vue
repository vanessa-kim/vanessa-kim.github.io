<template>
  <div class="home-form intro">
    <h4>UI DESIGNER & FRONTEND DEVELOPER</h4>
    <h1>Vanessa Kim's<br/>playground</h1>
    <div class="home-description">
      <p>
        Welcome to Vanessa's web space. <br/>
        No worries, No fears, Only fun. <br/>
        Let's just enjoy the floating trip in this small space with me.
      </p>
      <b-button>
        <i class="find-icon" />
        Who is <strong>Vanessa</strong>
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
  text-align: left;

  h4 {
    display: block;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.3px;
  }

  h1 {
    position: relative;
    font-family: 'Berkshire Swash';
    font-size: 80px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 90px;
    margin: 20px 0 90px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -90px;
      left: 0%;
      width: 30px;
      height: 1px;
      border-bottom: 1px solid #293344;
    }
  }
 
  .home-description {
    p {
      font-size: 15px;
      line-height: 24px;
      font-weight: 400;
      padding: 30px 0 30px;
    }

    button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      line-height: 26px;
      background-color: #293344;
      color: #fff;
      padding: 0 25px;
      border-radius: 30px;
      box-shadow: 10px 10px 10px #29334433;
      box-sizing: border-box;

      strong {
        display: inline-block;
        font-family: 'Berkshire Swash';
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.7px;
        padding: 0 10px 0 10px;
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
  border: 3px solid #fff;
  margin-right: 15px;
  margin-bottom: 5px;

  &::before{
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    left: 14px;
    width: 4px;
    height: 11px;
    background-color: #fff;
    transform: rotateZ(135deg);
    border-radius: 4px;
  }
}
</style>