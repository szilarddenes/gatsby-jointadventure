import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"

export default function About({data}) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image
          fluid={data.RandomPhoto.childImageSharp.fluid}
          style={{maxWidth: 756}}
        />
        <TextBody dangerouslySetInnerHTML={{__html: data.AboutMarkDown.allMarkdownRemark.nodes.html}}/>
        <Button href="mailto:jadventure.budapest&#64;gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/AboutUs.png"}) {
      childImageSharp {
        fluid(maxWidth: 756) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
   }
`

export const markDown = graphql `
    
    allMarkdownRemark(
      filter: {id: {eq: "7fe72adc-0993-53be-a6da-a401cdd93685"}}
    ) {
      nodes {
        id
        html
      }
    }
`
