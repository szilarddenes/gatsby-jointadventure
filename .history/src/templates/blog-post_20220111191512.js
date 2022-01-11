import React from "react"
import {graphql} from "gatsby"
import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import styled from "styled-components"


const TagStyle= styled.p`

`

export default function BlogPost({data}) {
const Tags = data.markdownRemark.frontmatter.tags
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>
        <TextDate>{data.markdownRemark.frontmatter.date}</TextDate>
        {Tags.map(tag => (
          <TagStyle>{tag}></TagStyle>
        ))}
        <TextBody
        
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />

        
      </Layout>
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
