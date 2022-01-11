import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"
import ArrowBack from "assets/icons/ArrowBack.svg"

const Icon = {
  color:'#0fb',
  height: '34px',
  maxWidth: '100%',
  maxHeight: '100%',
  width: '34px',
  marginTop:"10px",

  // @media (maxWidth: ${BREAKPOINT}px) {
  //   height: '28px',
  //   width: '28px',
  // }
  
}

export function HeaderBack() {
  return (
    <FixedBar>
      <Link to="/">
        <ArrowBack style={{marginTop:"10px",color:"#0fb!important"}}/>
      </Link>
    </FixedBar>
  )
}
