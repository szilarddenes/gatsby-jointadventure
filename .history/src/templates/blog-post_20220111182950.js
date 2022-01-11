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

export default function BlogPost({data}) {
  const tags = data.markdownRemark.frontmatter.tags || [];
let tagList = 'Tags: ';
i f (tags.length > 0) {
    tagList += tags.join(', ');
}
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>
        <TextDate>{data.markdownRemark.frontmatter.date}</TextDate>
        <TextBody
          {tags.length > 0 && 
    <div>
        <strong>{taglist}</strong>
    </div>
}
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
