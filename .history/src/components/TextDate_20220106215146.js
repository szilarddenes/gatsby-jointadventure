import styled from "styled-components"
import {TextBody} from "../components"
import {BREAKPOINT} from "../utils/constants"

export const TextDate = styled(TextBody)`
  color: var(--light-color);
  font-size: 16px;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`
