<template>
  <div>
    <div class="illust-wrapper">
      <div class="sky-wrapper">
        <div class="sky-outset-box">
          <div class="sky-inset-box">
            <!-- background star and clouds -->
            <img src="@/assets/img/bg_cloud_1.png" alt="moving cloud" class="bg-sky-cloud cloud-1" />
            <img src="@/assets/img/bg_cloud_2.png" alt="moving cloud" class="bg-sky-cloud cloud-2" />
            <div class="stars-group" :style="startsBg">
              <img src="@/assets/img/img_cancer.png" alt="Cancer" class="cancer" />
              <img src="@/assets/img/img_capricorn.png" alt="Capricorn" class="capricorn" />
              <img src="@/assets/img/img_moon.png" alt="Moon" class="moon" />

              <!-- auto moving boxes -->
              <div class="red-ballon-wrapper">
                <div class="red-bollon element-1" :style="redBallon">1</div>
                <div class="red-bollon element-2" :style="redBallon">2</div>
                <div class="red-bollon element-3" :style="redBallon">3</div>
                <div class="red-bollon element-4" :style="redBallon">4</div>
                <div class="red-bollon element-5" :style="redBallon">5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- floating clouds -->
      <img src="@/assets/img/img_floating_cloud.png" alt="floating cloud" class="floating-cloud cloud-1" />
      <img src="@/assets/img/img_floating_cloud.png" alt="floating cloud" class="floating-cloud cloud-2" />
      <img src="@/assets/img/img_floating_cloud.png" alt="floating cloud" class="floating-cloud cloud-3" />
      <img src="@/assets/img/img_floating_cloud.png" alt="floating cloud" class="floating-cloud cloud-4" />
      <img src="@/assets/img/img_floating_cloud.png" alt="floating cloud" class="floating-cloud cloud-5" />
      
      <!-- dangling air-ballons -->
      <div class="air-ballon-warpper">
        <div class="air-bollon ballon1" ref="airballon1">
          1
          <img ref="air1content" src="@/assets/img/img_air_ballon_1.png" alt="air ballon" class="floating-alir-bollon ballon-1" />
        </div>
        <div class="air-bollon ballon2" ref="airballon2">
          2
          <img ref="air2content" src="@/assets/img/img_air_ballon_2.png" alt="air ballon" class="floating-alir-bollon ballon-2" />
        </div>
        <div class="air-bollon ballon3" ref="airballon3">
          3
          <img ref="air3content" src="@/assets/img/img_air_ballon_3.png" alt="air ballon" class="floating-alir-bollon ballon-3" />
        </div>
        <div class="air-bollon ballon4" ref="airballon4">
          4
          <img ref="air4content" src="@/assets/img/img_air_ballon_4.png" alt="air ballon" class="floating-alir-bollon ballon-4" />
        </div>
        <div class="air-bollon ballon5" ref="airballon5">
          5
          <img ref="air5content" src="@/assets/img/img_air_ballon_5.png" alt="air ballon" class="floating-alir-bollon ballon-5" />
        </div>
        <div class="air-bollon ballon6" ref="airballon6">
          6
          <img ref="air6content" src="@/assets/img/img_air_ballon_6.png" alt="air ballon" class="floating-alir-bollon ballon-6" />
        </div>
        <div class="air-bollon ballon7" ref="airballon7">
          7
          <img ref="air7content" src="@/assets/img/img_air_ballon_4.png" alt="air ballon" class="floating-alir-bollon ballon-7" />
        </div>
        <div class="air-bollon ballon8" ref="airballon8">
          8
          <img ref="air8content" src="@/assets/img/img_air_ballon_3.png" alt="air ballon" class="floating-alir-bollon ballon-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VerticalRandomBox',
    data: ()=>({
      x: 0,
      y: 0,
      mx: 0,
      my: 0,
      timeout: null,
    }),
    computed: {
      startsBg() {
        return { backgroundImage: `url(${require('@/assets/img/bg_stars.png')})` };
      },
      redBallon() {
        return { backgroundImage: `url(${require('@/assets/img/img_ballon.png')})` };
      },
    },
    created() {
      window.addEventListener('mousemove', this.move, false);
    },
    destroyed() {
      window.removeEventListener('mousemove', this.move, false);
    },
    methods: {
      move($e) {
        this.x = ($e.clientX - window.innerWidth / 2);
        this.y = ($e.clientY - window.innerHeight / 2);
        this.loop();
        
        this.$refs.air1content.classList.add('dangling');
        this.$refs.air2content.classList.add('dangling');
        this.$refs.air3content.classList.add('dangling');
        this.$refs.air4content.classList.add('dangling');
        this.$refs.air5content.classList.add('dangling');
        this.$refs.air6content.classList.add('dangling');
        this.$refs.air7content.classList.add('dangling');
        this.$refs.air8content.classList.add('dangling');

        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(this.mouseStop, 1200);
      },
      loop() {
        this.mx += (this.x - this.mx) * 0.05;
        this.my += (this.y - this.my) * 0.05;
        this.$refs.airballon1.style.transform = "translate("+(this.mx/20)+"px,"+(this.my/20)+"px) scale(0.8)";
        this.$refs.airballon2.style.transform = "translate("+(this.mx/20)+"px,"+(-this.my/20)+"px) scale(0.8)";
        this.$refs.airballon3.style.transform = "translate("+(-this.mx/20)+"px,"+(this.my/20)+"px) scale(0.8)";
        this.$refs.airballon4.style.transform = "translate("+(this.mx/20)+"px,"+(this.my/20)+"px) scale(0.8)";
        this.$refs.airballon5.style.transform = "translate("+(-this.mx/20)+"px,"+(-this.my/20)+"px) scale(0.8)";
        this.$refs.airballon6.style.transform = "translate("+(this.mx/20)+"px,"+(this.my/20)+"px) scale(0.8)";
        this.$refs.airballon7.style.transform = "translate("+(-this.mx/20)+"px,"+(-this.my/20)+"px) scale(0.8)";
        this.$refs.airballon8.style.transform = "translate("+(this.mx/20)+"px,"+(this.my/20)+"px) scale(0.8)";
        window.requestAnimationFrame(this.loop);
      },
      mouseStop() {
        this.$refs.air1content.classList.remove('dangling');
        this.$refs.air2content.classList.remove('dangling');
        this.$refs.air3content.classList.remove('dangling');
        this.$refs.air4content.classList.remove('dangling');
        this.$refs.air5content.classList.remove('dangling');
        this.$refs.air6content.classList.remove('dangling');
        this.$refs.air7content.classList.remove('dangling');
        this.$refs.air8content.classList.remove('dangling');
      },
    },
  }
</script>

<style lang="scss">
// sky style
.sky-wrapper {
  position: relative;
  width: 700px;
  height: calc(100vh - 80px);
  min-height: 700px;
  background: linear-gradient(0deg, #f4f6f6 25%, #8092b6);
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 400px;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
  
  .sky-outset-box {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #f4f6f6 30%, #93a5c8);
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3), 2px 0px 5px rgba(0, 0, 0, 0.05);
    border-radius: 400px;
    padding: 40px;
    box-sizing: border-box;
  }

  .sky-inset-box {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #f4f6f6 40%,  #a2b2d1);
    box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6), 2px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 400px;
    box-sizing: border-box;

    .bg-sky-cloud {
      position: absolute;

      &.cloud-1 {
        z-index: 1;
        left: -120px;
        bottom: -60px;
        transform: scale(0.9);
      }

      &.cloud-2 {
        z-index: 2;
        left: -100px;
        bottom: -40px;
        transform: scale(0.8);
      }
    }
  }
}

// illust group style
.illust-wrapper {
  position: relative;
  width: 1100px;
  height: 100vh;
  background-color: #eee;
  padding: 40px 200px;
  box-sizing: border-box;
  
  .floating-cloud {
    position: absolute;
    z-index: 10;

    &.cloud-1 {
      top: 43%;
      left: 80px;

    }
    &.cloud-2 {
      top: 40%;
      left: 160px;
      transform: scale(0.6);
      z-index: 9;
    }
    &.cloud-3 {
      top: 33%;
      right: 75px;
      transform: scale(0.45);
    }
    &.cloud-4 {
      top: 42%;
      right: 75px;
      transform: scale(0.6);
    }
    &.cloud-5 {
      top: 50%;
      right: 180px;
      transform: scale(0.6);
    }
  }
}

// background sky style
.stars-group {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: repeat-y;
  border-radius: 400px;

  img {
    position: absolute;
  }

  .cancer {
    left: 56%;
    top: 220px;
  }
  .capricorn {
    left: 26%;
    top: 60px;
  }
  .moon {
    left: 60%;
    top: 140px;
    transform: scale(0.8);
  }
}

// auto moving red ballon style
.red-ballon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 300px;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  z-index:1;

  .red-bollon {
    position: absolute;
    top: 30px;
    width: 60px;
    height: 100px;
    font-size: 0;
  }
}

// $generateRandomList: [
//   [(0px, 10px), (10px, 20px), (0px, 30px)],
//   [(50px, 10px), (60px, 20px), (50px, 30px)], ...
// ];
@function generateRandomList() {
  $x: 0;
  $y: 0;
  $wrapList: [];
  @for $i from 0 to 6 {
    $x: 0;
    $y: 0;
    $elList: [];
     @for $j from 0 to 6 {
      $x: $i;
      $y: $j * 90;
      @if $j % 2 == 0 {
        $x: $x * 100;
      } @else {
        $x: ($x * 100) + 40;
      }
      $elList: append($elList, (#{$x}px, #{$y}px) );
    }
    $wrapList: append($wrapList, $elList);
  }
  @return $wrapList;
}

@mixin animation($name, $list) {
  @keyframes #{$name} {
    $steps: length($list);
    @if $steps > 1 {
      @for $i from 0 to $steps {
        $percentage: round($i * (100/$steps));
        #{$percentage}% {
          transform: translate(nth($list, random($steps)));
        }
      }

      0% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      95% {
        opacity: 1;
      }
      100%{ 
        opacity: 0;
        transform: translate(nth($list, 1));
      }
    }
  }
}

@function getList($index) {
  @return nth(generateRandomList(), $index);
}

@for $i from 1 to 6 {
  @include animation("animation"+$i, getList($i) );
}

@for $i from 1 to 6 {
  .element-#{$i} {
    animation: animation#{$i} 15s infinite;
  }
}

// air-ballon style
.air-ballon-warpper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.air-bollon {
  position:absolute;
  left:0;
  top:100px;
  width: 260px;
  z-index: 20;
  transform: rotateZ(0deg) scale(0.8);
  transition: all 0.3s;
  font-size: 0;
  &.ballon1 {
    top: -20px;
    left: 200px;
  }
  &.ballon2 {
    top: 10px;
    left: 480px;
  }
  &.ballon3 {
    top: 60px;
    left: 840px;
  }
  &.ballon4 {
    top: 160px;
    left: 20px;
    z-index: 9;
  }
  &.ballon5 {
    top: 380px;
    left: 350px;
  }
  &.ballon6 {
    top: 240px;
    left: 660px;
    z-index: 9;
  }
  &.ballon7 {
    top: 580px;
    left: 720px;
  }
  &.ballon8 {
    top: 550px;
    left: 80px;
  }
}

// air-ballon dangling style
.dangling {
  transition: all 0.3s;
  animation: dangling 0.6s ease-in-out 0s infinite;
}
@keyframes dangling {
  25% {   
    transform: rotateZ(10deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-10deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>