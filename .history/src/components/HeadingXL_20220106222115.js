import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingXL = styled.h1`
   background: rgb(0,255,187);
background: linear-gradient(90deg, rgba(0,255,187,1) 0%, rgba(0,153,102,1) 50%); 
  display: block;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 10vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 35px;
  }
`
