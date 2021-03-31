<template>
  <div class="prev_page">
    <span></span>
    <a :href="`#${prevPage}`" title="prev page">Prev</a>
  </div>
</template>

<script>
export default {
  name: 'PrevButton',
  props: {
    prevPage: {
      type: String,
      default: 'intro',
    },
  },
}
</script>

<style scoped>
.prev_page{
  position: absolute;
  top: 0;
  left:50%;
  width:50px;
  height:50px;
  margin-left:-25px;
  text-align: center;
  z-index:20;
}
.prev_page a{
  color:#293344;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}
.prev_page span{
  position: relative;
  display: block;
  width:1px;
  height:30px;
  margin:0 auto;
  background-color:rgba(41, 51, 68, 0.3);
  overflow:hidden;
}
.prev_page span:after{
  content: "";
  position: absolute;
  top:0;
  display: block;
  margin: 0 auto;
  width: 1px;
  height: 30px;
  background: linear-gradient(to top, rgba(41, 51, 68, 0), rgba(41, 51, 68, 1));
}
@keyframes bright_line {
  0% {
    margin-top:60px;
  }
  100% {
    margin-top:-24px;
  }  
}
</style>