<template>
  <div class="test-wrapper">
    <!-- auto moving boxes -->
    <div class="test box1" ref="test1">
      <span ref="test1content">test1</span>
    </div>
    <div class="test box2" ref="test2">
      <span ref="test2content">test2</span>
    </div>
    <div class="test box3" ref="test3">
      <span ref="test3content">test3</span>
    </div>
    <div class="test box4" ref="test4">
      <span ref="test4content">test4</span>
    </div>
    <div class="test box5" ref="test5">
      <span ref="test5content">test5</span>
    </div>
    <div class="test box6" ref="test6">
      <span ref="test6content">test6</span>
    </div>

    <!-- dangling boxes -->
    <div class="particle element-1">1</div>
    <div class="particle element-2">2</div>
    <div class="particle element-3">3</div>
    <div class="particle element-4">4</div>
    <div class="particle element-5">5</div>
    <div class="particle element-6">6</div>
    <div class="particle element-7">7</div>
    <div class="particle element-8">8</div>
    <div class="particle element-9">9</div>
    <div class="particle element-10">10</div>
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
        
        this.$refs.test1content.classList.add('dangling');
        this.$refs.test2content.classList.add('dangling');
        this.$refs.test3content.classList.add('dangling');
        this.$refs.test4content.classList.add('dangling');
        this.$refs.test5content.classList.add('dangling');
        this.$refs.test6content.classList.add('dangling');

        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(this.mouseStop, 1200);
      },
      loop() {
        this.mx += (this.x - this.mx) * 0.05;
        this.my += (this.y - this.my) * 0.05;
        this.$refs.test1.style.transform = "translate("+(this.mx/9)+"px,"+(this.my/9)+"px)";
        this.$refs.test2.style.transform = "translate("+(this.mx/15)+"px,"+(-this.my/16)+"px)";
        this.$refs.test3.style.transform = "translate("+(-this.mx/20)+"px,"+(this.my/20)+"px)";
        this.$refs.test4.style.transform = "translate("+(this.mx/15)+"px,"+(this.my/16)+"px)";
        this.$refs.test5.style.transform = "translate("+(-this.mx/20)+"px,"+(this.my/20)+"px)";
        this.$refs.test6.style.transform = "translate("+(this.mx/15)+"px,"+(this.my/16)+"px)";
        window.requestAnimationFrame(this.loop);
      },
      mouseStop() {
        this.$refs.test1content.classList.remove('dangling');
        this.$refs.test2content.classList.remove('dangling');
        this.$refs.test3content.classList.remove('dangling');
        this.$refs.test4content.classList.remove('dangling');
        this.$refs.test5content.classList.remove('dangling');
        this.$refs.test6content.classList.remove('dangling');
      },
    },
  }
</script>

<style lang="scss">
.test-wrapper {
  position: relative;
  width: 600px;
  height: 300px;
  border: 4px solid #f00;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 20px;
  height: 20px;
  color: #eee;
  text-align: center;
  line-height: 20px;
  background-color: green;
  border: 3px solid #eee;
  & > * {    
    transition: all 0.4s;
  }
  span {
    position: absolute;
    left:0px;
    display: block;
    width:22px;
    height: 22px;
    background-color: transparent;
    margin-right: 0px;
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
  @for $i from 0 to 10 {
    $x: 0;
    $y: 0;
    $elList: [];
     @for $j from 0 to 10 {
      $x: $i;
      $y: $j * 30;
      @if $j % 2 == 0 {
        $x: $x * 60;
      } @else {
        $x: ($x * 60) + 20;
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
          background-color: #f00;
        }
      }

      0% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      85% {
        opacity: 1;
      }
      100%{ 
        opacity: 0;
        transform: translate(nth($list, 1));
        background: #0f0;
      }
    }
  }
}

@function getList($index) {
  @return nth(generateRandomList(), $index);
}

@for $i from 1 to 11 {
  @include animation("animation"+$i, getList($i) );
}

@for $i from 1 to 11 {
  .element-#{$i} {
    animation: animation#{$i} 10s infinite;
  }
}

.test {
  position:absolute;
  left:0;
  top:100px;
  width: 100px;
  height: 100px;
  background-color: #ff000077;
  z-index: 200;
}
.box1 {
  top: 100px;
  left: 0;
}
.box2 {
  top: 0;
  left: 150px;
}
.box3 {
  top: 100px;
  left: 300px;
}
.box4 {
  top: 200px;
  left: 150px;
}
.box5 {
  top: 0px;
  left: 450px;
}
.box6 {
  top: 200px;
  left: 450px;
}
.test span {
  display: block;
  width: 50px;
  height: 50px;
  background-color: grey;
  margin: 25px auto;
  transition: all 1s;
}
.dangling {
  transition: all 1s;
  animation: 0.9s linear 0s infinite dangling;
}

@keyframes dangling {
  0% {
    transform: rotateZ(0deg);
  }
  25% {   
    transform: rotateZ(45deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-45deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>