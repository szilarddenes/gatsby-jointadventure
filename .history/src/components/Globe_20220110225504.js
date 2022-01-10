import React from "react"
import styled from "styled-components"

const Animation = styled.div`
 .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 2;
    background: #111;

}

.container .loader {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
}

.container .loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    pointer-events: none;
    animation: animateThreads 5s linear infinite;
}

.container .loader span:nth-child(1) {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% ;
}

.container .loader span:nth-child(2) {
    animation-direction: reverse;
    border-radius: 67% 33% 70% 30% / 75% 65% 35% 25%;
}

.container .loader span:nth-child(3) {
    animation-duration: 3s;
    border-radius: 52% 48% 70% 30% / 41% 65% 35% 59%;
}

@keyframes animateThreads {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.container .loader h2 {
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 500;
}
`

export default function Globe() {
  return (
    <>
      <Animation>
       <div className="container">
  <div className="loader">
    <span></span>
    <span></span>
    <span></span>
    <h2>Loading...</h2>
  </div>
</div>
      </Animation>
    </>
  )
}
