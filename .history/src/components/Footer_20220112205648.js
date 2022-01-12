import React from "react"
import styled from "styled-components"
import {ButtonLink} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 5vh;
  padding-top: 5vh;
  text-align: left;
  a {
    color:var(--accent-color);
  }
  a:hover{
    color:var(--accent-color-secondary);
  }
  small{
    display:block;
    margin-top: 1.75rem;
    text-align:center;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`

export function Footer() {
  return (
    <Container>
      {/* <ButtonLink
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </ButtonLink>
      <ButtonLink
        href="https://github.com/szilarddenes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </ButtonLink> */}
      <small>
      &copy; {new Date().getFullYear()} JointAdVenture Bt. All Rights Reserved.
      </small>
    </Container>
  )
}
