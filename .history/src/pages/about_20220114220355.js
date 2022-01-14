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
        <Image fluid={data.RandomPhoto.childImageSharp.fluid } style={{maxWidth:756}} />
        <TextBody>
          JointAdVenture Bt. is a creative agency who builds websites and advertises your brand. The stuff behind the company are engineers, dreamers, scientists, geologists, realists and tech geeks. We do love beer🍻, just for clarity
          <br />
          <br />
          - experience in webshops, intagram, facebook google ads marketing
          - but we can create your portfolio site or landing page
          - geoscientists, engineers who are trying to do more, and develop the web since more than 10 years
          - we are perfectionists and cheap, related to web industry
          - don't be afraid, contact us, (we are human as you do the image is only for illustration)
          
        </TextBody>
        <Button href="mailto:your&#64;email.com">Get in touch</Button>
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
