import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from '../components/seo'

function Blog({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) {
  return (
    <Layout>
      <SEO title="Blogs" description="List of all blogs/articles that i have written" />
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
