import React from "react"
import {graphql} from "gatsby"
import {BREAKPOINT} from "../utils/constants"
import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import styled from "styled-components"
import OpenLink from 'assets/Icons/OpenLink.svg'

const PostMeta = styled.div`
  margin: 0 5% 5vh 5%;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 0 5vh 0;
  }
`

const TagStyle = styled.span`
  color: var(--dark-color);
  background-color: var(--accent-color);
  display: inline-block;
  white-space: nowrap;
  vertical-align: middle;
  padding-inline-start: 0.25rem;
  padding-inline-end: 0.25rem;
  text-transform: uppercase;
  border-radius: 0.125rem;
  font-weight: 700;
  font-size: 0.7rem;
  margin-right: 0.5rem;
  a:hover {
    color: var(--dark-color);
  }
`
const StackStyle = styled.span`
  color: var(--accent-color);
  font-size: 0.9rem;

`

export default function BlogPost({data}) {
  const Tags = data.markdownRemark.frontmatter.tags
  const Key = data.markdownRemark.frontmatter.id

  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>

        <PostMeta>
          <StackStyle>
            {" "}
            Website:{" "}
            <TagStyle>
              {" "}
              <a href={data.markdownRemark.frontmatter.website} target="_blank">
                {" "}
                {data.markdownRemark.frontmatter.website} <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-2y6psj"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></g></svg>
              </a>
            </TagStyle>
          </StackStyle>
          <br />

          <StackStyle>
            {" "}
            Created: <TagStyle>{data.markdownRemark.frontmatter.date}</TagStyle>
          </StackStyle>
          <br />

          <StackStyle>
            Stack:{" "}
            {Tags.map((tag, Key) => (
              <TagStyle key={Key}>{tag} </TagStyle>
            ))}
          </StackStyle>
          <br />
        </PostMeta>

        <TextBody
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />
      </Layout>
    </>
  )
}

export const data = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        id
        website
      }
    }
  }
`
