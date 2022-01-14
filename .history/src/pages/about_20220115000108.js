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
export default function About({query}) {
console.log(query.two.nodes[0].html)

  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image
          fluid={query.one.childImageSharp.fluid}
          style={{maxWidth: 756}}
        />
        <TextBody dangerouslySetInnerHTML={{__html: data.two.nodes[0].html}}/>
        <Button href="mailto:jadventure.budapest&#64;gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AboutPage{
    one: file(relativePath: {eq: "assets/images/AboutUs.png"}) {
      childImageSharp {
        fluid(maxWidth: 756) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    two: allMarkdownRemark(
      filter: {id: {eq: "7fe72adc-0993-53be-a6da-a401cdd93685"}}
    ) {
      nodes {
        id
        html
      }
    }
    

   }
`


