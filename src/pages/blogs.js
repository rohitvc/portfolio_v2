import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"

function Blog({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) {
  return (
    <Layout>
      <div className="relative ml-16 sm:ml-24">{blogs[0].title}</div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        title
        content
        description
        date(formatString: "MMMM Do ,YYYY")
        id
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Blog
