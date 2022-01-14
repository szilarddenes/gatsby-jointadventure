import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"
import ArrowBack from "assets/icons/ArrowBack.svg"

const ArrowIcon = styled.svg`
  color:#0fb;
  height: 34px;
  maxWidth: 100%;
  maxHeight: 100%;
  width: 34px;
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
