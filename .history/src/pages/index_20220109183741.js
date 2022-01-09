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
} from "../components"
import {BREAKPOINT} from "../utils/constants"

import JAIcon from "../assets/icons/JAIcon.png"

export const Animation = styled.div`
  .bb::before,
  .bb::after,
  .bb {
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
    background: url("${JAIcon}") no-repeat 50%/70% #000;
    color: #00ffbb;
    box-shadow: inset 0 0 0 1px rgba(0, 255, 187, 0.5);
    border-radius: 50%;
  }
  .bb::before,
  .bb::after {
    content: "";
    z-index: -1;
    margin: -5%;
    box-shadow: inset 0 0 0 2px;
    animation: clipMe 8s linear infinite;
  }
  .bb::before {
    animation-delay: -4s;
  }
  .bb:hover::after,
  .bb:hover::before {
    background-color: rgba(0, 255, 187, 0.3);
  }

  @keyframes clipMe {
    0%,
    100% {
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
          <div style={{position: "relative"}}>
            <Animation>
              <div className="bb"></div>
            </Animation>
          </div>
        <Hero>
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