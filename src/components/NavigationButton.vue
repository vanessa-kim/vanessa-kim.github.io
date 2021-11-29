<template>
  <div :class="['btn_more_info', {'active': !navActive }]" ref="btnMore" @click="toggleActive">
    <div class="line-wrapper">
      <div :class="['lin_t line twist init', navActive ? 'line-top':'top-reverse' ]"></div>
      <div :class="['lin_m line', navActive ? 'line-mid' : 'mid-reverse' ]" ></div>
      <div :class="['lin_b line twist', navActive ? 'line-bot' : 'bot-reverse' ]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationButton',
  data: () => ({
    navActive: false,
  }),
  methods: {
    toggleActive(e) {
      if(e.target.classList.contains('active')) {
        this.navActive = true;
      } else {
        this.navActive = false;
      }
    },
  },
}
</script>

<style lang="scss">
.btn_more_info {
  position: relative;
  display: block;
  float: right;
  width: 60px;
  height: 60px;
  background-color: #293344;
  font-size: 0;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  -webkit-transition: all 1s;
  transition: all 1s;
  cursor: pointer;
  border:1px solid #293344;
  border-radius: 30px;
  box-shadow: 10px 10px 10px #29334433;
  box-sizing: border-box;
  z-index: 100;
}
.btn_more_info:hover {
  background-color: #1f2735;
  transition: .5s; 
  border-color: #1f2735;
}
.btn_more_info.active .btn_more_info{
  border-color:#fff;
}
.btn_more_info .line-wrapper {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 14px;
  left: 11px;
  pointer-events: none;
}
// hamburger icon
.line-wrapper .line {
  position: relative;
  background-color: #ffffff;
  margin-top: 6px;
  width: 25px;
  height: 2px;
}
.line-wrapper .line.twist{
  margin-left: 6px;
}
.line-wrapper .line.line-top {
  animation: line-top .5s forwards ease-out, line-top-rotate .3s .5s forwards ease-out;
}
.line-wrapper .line.top-reverse {
    animation: line-top-rotate-reverse .3s forwards ease-out, line-top-reverse .5s .3s forwards ease-out;
}
.line-wrapper .line.line-mid {
    animation: line-mid .5s forwards ease-out;
}
.line-wrapper .line.mid-reverse {
    animation: line-mid-invisible .3s forwards ease-out, line-mid-reverse .5s .3s forwards ease-out;
}
.line-wrapper .line.line-bot {
    animation: line-bot .5s forwards ease-out, line-bot-rotate .3s .5s forwards ease-out;
}
.line-wrapper .line.bot-reverse {
    animation: line-bot-rotate-reverse .3s forwards ease-out, line-bot-reverse .5s .3s forwards ease-out;
}

@keyframes line-top {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(8px);
  }
}
@keyframes line-top-reverse {
  0% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes line-top-rotate {
  0% {
    transform: translateY(8px) rotateZ(0deg);
  }
  100% {
    transform: translateY(8px) rotateZ(45deg);
    }
}
@keyframes line-top-rotate-reverse {
  0% {
    transform: translateY(8px) rotateZ(45deg);
  }
  100% {
    transform: translateY(8px) rotateZ(0deg);
    }
}
@keyframes line-mid {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes line-mid-reverse {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes line-mid-invisible {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes line-bot {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-8px);
  }
}
@keyframes line-bot-reverse {
  0% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes line-bot-rotate {
  0% {
    transform: translateY(-8px) rotateZ(0deg);
  }
  100% {
    transform: translateY(-8px) rotateZ(135deg);
  }
}
@keyframes line-bot-rotate-reverse {
  0% {
    transform: translateY(-8px) rotateZ(135deg);
  }
  100% {
    transform: translateY(-8px) rotateZ(0deg);
  }
}
</style>