import React from "react"
import styled from "styled-components"
import JAIcon from "assets/icons/JAIconNarrow.svg"
import Img from "gatsby-image"

const Svg=()=>{
  return(
  `data:image/svg+xml;,<svg xmlns="http://www.w3.org/2000/svg" width="1020" height="1024" fill="none" viewBox="0 0 1020 1024">
  <path fill="#0FB" stroke="#000" stroke-width="18" d="M1010.08 512c0 277.84-224.143 503-500.542 503C233.14 1015 9 789.84 9 512 9 234.16 233.14 9 509.538 9c276.399 0 500.542 225.16 500.542 503z"/></svg>`
  )
}

const Animation = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 250px;
    margin: -3rem 0rem 3rem 0rem;
  }

  .container .loader {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 150px;
    background-image:url("data:image/svg+xml;,<svg fill="none" viewBox="0 0 1020 1024" xmlns="http://www.w3.org/2000/svg">
<path d="m1010.1 512c0 277.84-224.14 503-500.54 503-276.4 0-500.54-225.16-500.54-503s224.14-503 500.54-503c276.4 0 500.54 225.16 500.54 503z" fill="#0FB" stroke="#000" stroke-width="18"/></svg>");

    // background: url("${JAIcon}") no-repeat 55%/60%;
  }

  .container .loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid var(--accent-color-secondary);
    pointer-events: none;
    animation: animateThreads 7s linear infinite;
  }

  .container .loader span:nth-child(1) {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
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
    font-weight: 500;
    font-size: 8rem;
  }
`

export default function FrontAnimation() {
  return (
    <>
      <Animation>
        <div className="container">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Animation>
    </>
  )
}
