import React from "react"
import styled from "styled-components"
import JAIcon from "../assets/icons/JAIconNarrow.png"
import {useStaticQuery, graphql} from "gatsby"

// const animationBackground=data.bcgImg.childImageSharp.fluid
 




export default function FrontAnimation({}) {
const data = useStaticQuery(graphql`
    query {
      bcgImg: file(extension: {eq: "png"}, name: {eq: "JAIconNarrow"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
 

  console.log('GRAPHDATA::',data)


  return (
    <>
      <Animation props={data}>
        <div className="container">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
           
          </div>
        </div>
      </Animation>
    </>
  )
}
