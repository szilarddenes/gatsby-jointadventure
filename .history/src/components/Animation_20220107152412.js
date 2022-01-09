import styled from "styled-components"



$anime-time: 8s;

$box-size: 200px;
$clip-distance: .05;
$clip-size: $box-size * (1 + $clip-distance * 2);
$path-width: 2px;

$main-color: #00ffbb;

$codepen-logo-path: url('//blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png');

%full-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bb {
  @extend %full-fill;
  width: $box-size;
  height: $box-size;
  margin: auto;
  background: $codepen-logo-path no-repeat 50% / 70% #000;
  color: $main-color;
  box-shadow: inset 0 0 0 1px rgba($main-color, .5);
  border-radius: 50%;

  &::before,
  &::after {
    @extend %full-fill;
    content: '';
    z-index: -1;
    margin: -1 * $clip-distance * 100%;
    box-shadow: inset 0 0 0 $path-width; 
    animation: clipMe $anime-time linear infinite;
  }

  &::before {
    animation-delay: $anime-time * -.5;
  }

  // for debug
  &:hover {
    &::after,
    &::before {
      background-color: rgba(#0fb, .3);
    }
  }

}

@keyframes clipMe {
  0%, 100% {clip: rect(0px, $clip-size, $path-width, 0px); }
  25% {clip: rect(0px, $path-width, $clip-size, 0px); }
  50% {clip: rect($clip-size - $path-width, $clip-size, $clip-size, 0px); }
  75% {clip: rect(0px, $clip-size, $clip-size, $clip-size - $path-width); }
}

/////

html,
body {
  height: 100%;
}

body {
  position: relative;
  background-color: hsl(0, 0%, 15%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}