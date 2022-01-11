import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "components"
import {BREAKPOINT} from "../utils/constants"

import Img from "gatsby-image"
import FrontAnimation from "../components/FrontAnimation.js"



const Hero = styled.div`
  margin-bottom: 20vh;
  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`
const TextHome = styled.p`
  color: var(--light-color);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;
    Img{
      border: outset 3px var(--accent-color-secondary);
    }
    Img:hover{
      border: solid 4px var(--accent-color);
    }



  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

export default function Home({data}) {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
            <FrontAnimation></FrontAnimation>
          <TextHome>
            A creative web agency, who solves your problem, and promotes your
            brand.
          </TextHome>
          <HeadingXL>JointAdVenture Bt.</HeadingXL>
        </Hero>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                style={{maxWidth: 756, margin: "0 5% 5% 5%"}}
              />
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  )
}
export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___id], order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 756) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
