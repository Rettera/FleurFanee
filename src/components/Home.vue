<template>
 <div class="home">
        <div style="float:right;margin:3% 7% 0 0">
       <h1>Fleurs Fanées</h1>
       <h2>Ou regarder des fleurs en s'amusant</h2>
     </div>
   <div class="container">

  <div class="fourth">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="third">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="second">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="first">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="egg">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="face">
      <div class="eyes"></div>
      <div class="smile"></div>
      <div class="cheeks"></div>
      <div class="shine"></div>
    </div>
  </div>
</div>
<div class="stars"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
</div>
 </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2{
  color: white;
}
$background: #0f111d; //#161843;
$eggBody: rgb(255, 238, 0);
$eggFace: 140px;
$yolk: #62af66;
$eyes: #000;
$eyeRadius: 15px;
$cheeks: #ff7e7e;

// Skip Shade Gradient from https://mycolors.space
$firstTrail: #46fce4;
$secondTrail: #00baee;
$thirdTrail: #0071db;
$fourthTrail: #48098b;

// egg body and light trails
@mixin layers($layerWidth, $layerHeight, $color) {
  width: $layerWidth;
  height: $layerHeight;
  border-radius: 0px 100px 100px 0px;
  background: $color;
  position: relative;
  right: 20px;
}

body {
  background-color: $background;
}
.container {
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: speed-up 3s ease-in-out infinite;
}
@keyframes speed-up {
  50% {
    left: 65%;
  }
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.egg {
  @include layers(245px, 180px, $eggBody);
  //transform-origin: top right;
  box-shadow: 0px 0px 20px $eggBody;
  .face {
    width: $eggFace;
    height: $eggFace;
    border-radius: 100%;
    background: $yolk;
    position: absolute;
    left: 35%;
    top: 11%;
    box-shadow: inset 10px 1px 0 #ffcc24;
    .eyes {
      position: relative;
      width: $eyeRadius;
      height: $eyeRadius;
      background: $eyes;
      border-radius: 100%;
      left: 35px;
      top: 58px;
      animation: eye-blink 2s infinite;
      &::after {
        content: "";
        position: absolute;
        width: $eyeRadius;
        height: $eyeRadius;
        background: $eyes;
        border-radius: 100%;
        left: 60px;
      }
    }
    .smile {
      position: relative;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      width: 10px;
      height: 6px;
      background: transparent;
      border: 5px solid #000;
      left: 63px;
      top: 55px;
      &::before {
        background: $yolk;
        width: 30px;
        height: 7px;
        content: "";
        position: absolute;
        left: -10px;
        top: -5.5px;
      }
    }
    .cheeks {
      position: relative;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background: $cheeks;
      left: 25px;
      top: 42px;
      &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: $cheeks;
        left: 83px;
      }
    }
    .shine {
      position: relative;
      width: 8px;
      height: 20px;
      border-radius: 200px;
      background: #fff;
      left: 110px;
      top: -20px;
      transform: rotate(-35deg);
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 100%;
        top: -12px;
        right: 2px;
      }
    }
  }
  li {
    position: relative;
    border-radius: 200px;
    width: 80px;
    height: 25.7px;
  }
  li:nth-child(odd) {
    background: $eggBody;
  }
  li:nth-child(even) {
    background: $background;
  }
  li:nth-child(1) {
    right: 40px;
    animation: trail1 1s ease-out infinite;
    &::after {
      content: "";
      position: absolute;
      opacity: 0;
      width: 25.7px;
      height: 25.7px;
      background: $eggBody;
      box-shadow: 0px 0px 10px $eggBody;
      border-radius: 100%;
      animation: floating 1.5s ease infinite;
    }
  }
  li:nth-child(2) {
    right: 30px;
    animation: trail2 1s ease-out infinite;
  }
  li:nth-child(3) {
    right: 70px;
    animation: trail2 2s ease-out infinite;
  }
  li:nth-child(4) {
    right: 60px;
    animation: trail1 0.9s ease-out infinite;
  }
  li:nth-child(5) {
    right: 40px;
    animation: trail1 0.9s ease-out infinite;
    &::after {
      content: "";
      position: absolute;
      opacity: 0;
      width: 25.7px;
      height: 25.7px;
      background: $eggBody;
      box-shadow: 0px 0px 10px $eggBody;
      border-radius: 100%;
      animation: floating2 1s ease infinite 2s;
    }
  }
  li:nth-child(6) {
    right: 20px;
    animation: trail2 1s ease-out infinite;
  }
  li:nth-child(7) {
    right: 10px;
    animation: trail1 1s ease-out infinite;
    &::after {
      content: "";
      position: absolute;
      opacity: 0;
      width: 25.7px;
      height: 25.7px;
      background: $eggBody;
      box-shadow: 0px 0px 10px $eggBody;
      border-radius: 100%;
      animation: floating3 1s ease infinite 0.5s;
    }
  }
}
@keyframes eye-blink {
  0% {
    transform: scaleY(1);
  }
  18% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(0);
  }
  25% {
    transform: scaleY(1);
  }
  38% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0);
  }
  45% {
    transform: scaleY(1);
  }
  80% {
    transform: scaleY(1);
  }
}
@keyframes trail1 {
  50% {
    right: 50px;
  }
}

@keyframes trail2 {
  50% {
    right: 10px;
  }
}

@keyframes trail3 {
  50% {
    right: 80px;
  }
}
@keyframes trail4 {
  50% {
    right: 50px;
  }
}

@keyframes trail5 {
  50% {
    right: 20px;
  }
}

@keyframes trail6 {
  50% {
    right: 70px;
  }
}
@keyframes floating {
  0% {
    right: 50px;
    opacity: 0;
  }
  50% {
    right: 160px;
    opacity: 1;
  }
  70% {
    right: 160px;
    opacity: 0;
  }
  100% {
    right: 50px;
    opacity: 0;
  }
}
@keyframes floating2 {
  0% {
    right: 50px;
    opacity: 0;
  }
  50% {
    right: 100px;
    opacity: 1;
  }
  70% {
    right: 100px;
    opacity: 0;
  }
  100% {
    right: 50px;
    opacity: 0;
  }
}

@keyframes floating3 {
  0% {
    right: 0px;
    opacity: 0;
  }
  50% {
    right: 150px;
    opacity: 1;
  }
  70% {
    right: 150px;
    opacity: 0;
  }
  100% {
    right: 0px;
    opacity: 0;
  }
}

// passing stars
@mixin star-template($radius, $top, $delay) {
  width: $radius;
  height: $radius;
  border-radius: 100%;
  top: $top;
  animation-delay: $delay;
}
.stars {
  width: 100%;
  height: 100%;
  background: transparent;
  .star {
    display: block;
    position: absolute;
    opacity: 0;
    z-index: -1;
    transform: all 0.5 ease infinite;
    animation: moving-star 2s ease infinite;
  }
  .star:nth-child(1) {
    @include star-template(20px, 100px, 0);
    background: linear-gradient(to left, $fourthTrail, $secondTrail);
  }
  .star:nth-child(2) {
    @include star-template(10px, 160px, 0.8s );
    background: linear-gradient(to left, $fourthTrail, $firstTrail);
  }
  .star:nth-child(3) {
    @include star-template(10px, 110px, 0.35s);
    background: linear-gradient(to left, $secondTrail 20%, transparent);
  }
  .star:nth-child(4) {
    @include star-template(5px, 450px, 1.5s);
    background: linear-gradient(to left, $secondTrail 20%, $firstTrail);
  }

  .star:nth-child(8) {
    @include star-template(1px, 350px, 0.7s);
    background: linear-gradient(to left, $thirdTrail 70%, $firstTrail);
  }
  .star:nth-child(9) {
    @include star-template(10px, 510px, 0.2s);
    background: linear-gradient(to left, $fourthTrail, $firstTrail);
  }

  .star:nth-child(12) {
    @include star-template(5px, 205px, 0.11s);
    background: linear-gradient(to left, $thirdTrail, $firstTrail);
  }
  .star:nth-child(13) {
    @include star-template(1px, 140px, 0);
    background: linear-gradient(to left, $thirdTrail, $firstTrail);
    animation: shooting-star 2s ease infinite 0.3s;
  }
  .star:nth-child(14) {
    @include star-template(0.5px, 160px, 0);
    background: $secondTrail;
    animation: shooting-star 1.5s ease infinite 0.2s;
  }
  .star:nth-child(15) {
    @include star-template(0.5px, 250px, 0);
    background: $thirdTrail;
    animation: shooting-star 1s ease infinite 0.6s;
  }
  .star:nth-child(20) {
    @include star-template(5px, 370px, 0.3s);
    background: linear-gradient(to left, $thirdTrail, $firstTrail);
    animation: shooting-star 2.5s ease infinite;
  }
}

@keyframes moving-star {
  0% {
    right: 0;
    opacity: 1;
  }
  50% {
    right: 100%;
    opacity: 1;
  }
  70% {
    right: 100%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 0;
  }
}

@keyframes shooting-star {
  0% {
    right: 0;
    opacity: 1;
  }
  50% {
    right: 100%;
    opacity: 1;
    width: 300px;
  }
  70% {
    right: 100%;
    opacity: 0;
    width: 0px;
  }
  100% {
    right: 0;
    opacity: 0;
  }
}

</style>

