<template>
  <div class="test-wrapper">
    <div class="particle element-1 animation-delay-1" />
    <div class="particle element-2 animation-delay-2" />
    <div class="particle element-3 animation-delay-3" />
    <div class="particle element-4 animation-delay-4" />
    <div class="particle element-5 animation-delay-5" />
    <div class="particle element-6 animation-delay-6" />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
.test-wrapper {
  width: 100vw;
  height: 100vh;
}

.particle {
  position: absolute;
  opacity: 0;
  overflow: visible;
  background-size: contain;
}

// round number function
@function number-round ($number, $digits: 0 ) {
  $n: 1;

  @if type-of($number) != number {
    @warn '#{ $number } is not a number';
    @return $number;
  }

  @if type-of($digits) != number {
    @warn '#{ $digits } is not a number';
    @return $number;
  }

  @for $i from 1 through $digits {
    $n: $n + 10;
  }

  @return round($number * $n) / $n;
}


// find x, y in nth list
@function v($x, $y) {
  $start-x: -200px;
  $end-x: 500px;
  $steps-x: 50;
  $steps-x-value: (($start-x - $end-x) / $steps-x) * -1;

  $start-y: -150px;
  $end-y: 1200px;
  $steps-y: 50;
  $steps-y-value: (($start-y - $end-y) / $steps-y) * -1;

  $x-list: ();
  $y-list: ();

  $nextval: $start-x;
  @while $nextval < $end-x {
    $x-list: append($x-list, $nextval);
    $nextval: $nextval + $steps-x-value;
  }

  $nextval: $start-y;
  @while $nextval < $end-y {
    $y-list: append($y-list, $nextval);
    $nextval: $nextval + $steps-y-value;
  }

  @return nth($x-list, $x), nth($y-list, $y);
}

// generate random position list
@function randomVList() {
  $x-maxsteps: 50;
  $y-maxsteps: 50;
  $x: random($x-maxsteps - 10); // start val
  $y: random($y-maxsteps - 10); 
  $list: ();
  $list: append($list, $x $y);
  $random-x-steps: random($x-maxsteps - 5) + 5;
  @while $x < $random-x-steps {
    $x: $x - 1;
    
    @if $y == $y-maxsteps {
      $y: $y + (random(2) - 2) // y + [ -1 | 0 ]
    }
    @else if $y == 1 {
      $y: $y + (random(2) - 1) // y + [0 | 1]
    }
    @else {
      $y: $y + (random(3) - 2); // y + [-1 | 0 | 1]
    }
    $list: append($list, $x $y);
  }
  @return $list;
}

@mixin animation($name, $tupleList) {
  @keyframes #{$name} {
    $steps: length($tupleList);
    @if $steps > 1 {
      @for $i from 0 to $steps {
				// <start> to <end> -> not include <end>
				$percentage: number-round( $i*(100/($steps - 1)), 2);

				#{$percentage}% {
					$tuple: nth($tupleList, $i+1);
					transform: translate( v(nth($tuple, 2),nth($tuple, 1))); //move
        }
			}
			0% 	{ opacity: 0 }
			15% { opacity: 1 }
			85% { opacity: 1 }
			100%{ opacity: 0 }
    }
  }
}

@for $i from 1 to 20 {
  $randomlist: randomVList();
  @while length($randomlist) < 3 {
    $randomlist: randomVList();
  }
  @include animation("animation" + $i, $randomlist);
}

@for $i from 1 to 20 {
	.element-#{$i} {
		$position: v(random(10), random(10));
		left: nth($position, 1);
		top: nth($position, 2);
		//$duration: 12+ random(7);
		//for demo:
		$duration: 15 + random(5);
		animation: animation#{$i} linear #{$duration}s infinite;
		$size: 12px + random(20);
		height: $size;
		width: $size; 
		$imglist: url(https://via.placeholder.com/50x50/0000FF/808080?text=x),
            url(https://via.placeholder.com/50x50/00FF00/808080?text=x),
            url(https://via.placeholder.com/50x50/0FFFF0/808080?text=x),
            url(https://via.placeholder.com/50x50/F0FF0F/808080?text=x),
            url(https://via.placeholder.com/50x50/FF0000/808080?text=x);
		background-image: nth($imglist, ($i % 5) + 1);
	}
}

@for $i from 1 through 20 {
	.animation-delay-#{$i}{
		$animationdelay: random(5);
		animation-delay: #{$animationdelay}s;
	}
}
</style>