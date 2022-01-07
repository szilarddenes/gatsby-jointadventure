import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;
  color:var(--accent-color)

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 32px;
  }
`

export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <Logo>JA</Logo>
      <Link to="/about">
        <p>About</p>
      </Link>
    </HeaderWrapper>
  )
}
