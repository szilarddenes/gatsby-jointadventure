import React from "react"
import styled from "styled-components"
import JAIcon from "assets/icons/JAIconNarrow.png"
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
    background-image: url("data:image/svg+xml;data%3Aimage%2Fsvg%2Bxml%3B%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.rg%2F2000%2Fsvg%22%20width%3D%221020%22%20height%3D%221024%22%20fill%3D%22none%22%20viewBox%3D%220%200%201020%201024%22%3E%0A%20%20%3Cpath%20fill%3D%22%230FB%22%20stroke%3D%22%23000%22%20stroke-width%3D%2218%22%20d%3D%22M1010.08%20512c0%20277.84-224.143%20503-500.542%20503C233.14%201015%209%20789.84%209%20512%209%20234.16%20233.14%209%20509.538%209c276.399%200%20500.542%20225.16%20500.542%20503z%22%2F%3E%3C%2Fsvg%3E")

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
