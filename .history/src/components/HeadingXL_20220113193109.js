import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingXL = styled.h1`
   background: rgb(0,255,187);
background: radial-gradient(circle, rgba(0,255,187,1) 0%, rgba(0,153,102,1) 100%);
  display: block;
  font-size: 50px;
  letter-spacing: -2px;
  line-height: 1.2;
  margin: 0 auto 10vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 26px;
  }
`
