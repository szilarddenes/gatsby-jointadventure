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
  font-size: 0.75rem;
  margin-right: 0.5rem;
`
const StackStyle = styled.span`
  color: var(--accent-color);
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
            Website: <TagStyle> <a href="{data.markdownRemark.frontmatter.website}" target="__blank"> {data.markdownRemark.frontmatter.website}</a></TagStyle>
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
