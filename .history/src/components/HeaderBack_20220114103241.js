import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"
import ArrowBack from "assets/icons/ArrowBack.svg"

const ArrowIcon = styled.svg`
  height: 32px;
  maxWidth: 100%;
  maxHeight: 100%;
  width: 32px;
  marginTop:10px;
  background: url("${ArrowBack}")
`

export function HeaderBack() {
  return (
    <FixedBar>
      <Link to="/">
        <ArrowIcon >
        </ArrowIcon>
      </Link>
    </FixedBar>
  )
}

{/* <ArrowBack style={{marginTop:"10px"}}/> */}