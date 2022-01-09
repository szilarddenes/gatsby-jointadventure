import styled from "styled-components"
import JAIcon from "../assets/icons/JAIcon.png"

export const Animation = styled.div`
.bb::before, .bb::after, .bb {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bb {
  width: 200px;
  height: 200px;
  margin: auto;
  background: url('${JAIcon}') no-repeat 50%/70% #000;
  color: #00ffbb;
  box-shadow: inset 0 0 0 1px rgba(0, 255, 187, 0.5);
  border-radius: 50%;
}
.bb::before, .bb::after {
  content: "";
  z-index: -1;
  margin: -5%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
}
.bb::before {
  animation-delay: -4s;
}
.bb:hover::after, .bb:hover::before {
  background-color: rgba(0, 255, 187, 0.3);
}

@keyframes clipMe {
  0%, 100% {
    clip: rect(0px, 220px, 2px, 0px);
  }
  25% {
    clip: rect(0px, 2px, 220px, 0px);
  }
  50% {
    clip: rect(218px, 220px, 220px, 0px);
  }
  75% {
    clip: rect(0px, 220px, 220px, 218px);
  }
}

`