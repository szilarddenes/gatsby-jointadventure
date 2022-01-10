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
  Globe,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import JAIcon from "../assets/icons/JAIconNarrow.png"
import Img from "gatsby-image"

export const Animation = styled.div`
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
          <Animation>
            <Globe></
          </Animation>
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
