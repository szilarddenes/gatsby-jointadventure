import React from "react"
import styled from "styled-components"
import JAIcon from "../assets/icons/JAIconNarrow.png"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

// const animationBackground=data.bcgImg.childImageSharp.fluid

export default function FrontAnimation() {



  

  return (
    <>
      <Animation>
                <LoaderBackground>
          </LoaderBackground >

        <div className="container">
          <div className="loader">
          <LoaderBackground>
            <span></span>
            <span></span>
            <span></span>
          </LoaderBackground >

          </div>
        </div>
      </Animation>
    </>
  )
}
