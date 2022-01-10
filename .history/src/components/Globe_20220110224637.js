import React from "react"
import styled from "styled-components"

const Animation = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: #eaeef0;
}

.loader {
    position: relative;
    display: flex;
}

.loader span {
    position: relative;
    width: 50px;
    height: 50px;
    background: #eaeef0;
    margin: 0 10px;
    border: 5px solid #eaeef0;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
                8px 8px 15px rgba(0, 0, 0, 0.2),
                inset 3px 3px 5px rgba(0, 0, 0, 0.1),
                inset -1px -1px 5px rgba(255, 255, 255, 1);
}

.loader span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5c89ff;
    border-radius: 50%;
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
                inset -1px -1px 5px rgba(255, 255, 255, 1);
    transform: scale(0);
    animation: animateDots 3.5s linear infinite, animateColor 5s linear infinite;
    animation-delay: calc(var(--i) * 0.2s);
}

@keyframes animateDots {
    0%, 9.99%, 70.001%
    {
        transform: scale(0);
    }
    10%, 70%
    {
        transform: scale(1);
    }
}

@keyframes animateColor {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}
`

export default function Globe() {
  return (
    <>
      {/* <Animation> */}
        <div class="container">
          <div class="loader">
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
          </div>
        </div>
      </Animation>
    </>
  )
}
