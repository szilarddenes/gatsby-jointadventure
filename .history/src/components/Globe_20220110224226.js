import React from "react"

const Animation = styled.div`
  #marsloc {
    cursor: grab;
  }
  #marsinfo {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 2rem;
  }
  #marsinfo h1 {
    font-size: 8vw;
    margin-top: 0;
    font-weight: 100;
    line-height: 1;
    position: absolute;
  }
  #marsinfo div {
    width: 40%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    right: 0;
    padding: 1.3rem;
    line-height: 1.6;
    font-size: 1.2rem;
    pointer-events: none;
    @media all and (max-width: 540px) {
      width: 100%;
      left: 0;
      top: 40vw;
    }
  }
`

export default function Globe() {
 

  return (
    <>
      <div class="container">
  <div class="loader">
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
  </div>
</div>
    </>
  )
}
