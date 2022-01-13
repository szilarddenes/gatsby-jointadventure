import React from "react"
import styled from "styled-components"
import JAIcon from "../assets/icons/JAIconNarrow.png"
import } from "gatsby"

const animationBackground=data.bcgImg.childImageSharp

const Animation = styled.div(data)`
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
       background: url("${animationBackground}") no-repeat 55%/60%;
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
    font-weight: 500;
    font-size:8rem;
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
    <h2></h2>
  </div>
</div>
      </Animation>
    </>
  )
}

export const data = graphql`
query {
  bcgImg: file(extension: {eq: "png"}, name: {eq: "JAIconNarrow"}) {
    childImageSharp {
      fluid {
        src
        srcSet
        sizes
        srcSetWebp
      }
    }
  }
}
`