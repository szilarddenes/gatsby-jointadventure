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


const TagStyle= styled.span`
background-color:var(--accent-color-secondary);
color:var(--accent-color);
display: inline-block;
white-space: nowrap;
vertical-align: middle;
padding-inline-start: 0.25rem;
padding-inline-end: 0.25rem;
text-transform: uppercase;
border-radius: 0.125rem;
font-weight: 700;
margin-right: 0.5rem;
`
const StackStyle= styled.span`

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
        <TextDate>{data.markdownRemark.frontmatter.date}</TextDate>
        <StackStyle>
        Stack:{" "} 
        {Tags.map((tag, Key) => (
          <TagStyle key={Key}>{tag} </TagStyle>
        ))}
        </StackStyle>


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
        id
      }
    }
  }
`
