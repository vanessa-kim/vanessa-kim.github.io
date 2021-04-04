<template>
  <div class="next_page">
    <a :href="`#${nextPage}`" class="btn_next_page" title="next page">NEXT</a>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'NextButton',
  props: {
    nextPage: {
      type: String,
      default: 'intro',
    },
  },
}
</script>

<style scoped>
.next_page{
  position: absolute;
  bottom: 0;
  left:50%;
  width:50px;
  height:50px;
  margin-left:-25px;
  text-align: center;
  z-index:20;
}
.next_page a{
  color:#293344;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}
.next_page span{
  position: relative;
  display: block;
  width:1px;
  height:30px;
  margin:0 auto;
  background-color:rgba(41, 51, 68, 0.3);
  overflow:hidden;
}
.next_page span:after{
  content: "";
  position: absolute;
  bottom:0;
  display: block;
  margin: 0 auto;
  width: 1px;
  height: 30px;
  background: linear-gradient(to bottom, rgba(41, 51, 68, 0), rgba(41, 51, 68, 1));
  animation: bright_line_top_to_bottom  1s 0.3s linear infinite;
}
@keyframes bright_line_top_to_bottom {
  0% {
    margin-bottom:100px;
  }
  100% {
    margin-bottom:-60px;
  }  
}
</style>