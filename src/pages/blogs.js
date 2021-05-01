import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blogCard"

function Blog({ data }) {
  const {
    allMdx: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO
        title="Blogs"
        description="List of all blogs/articles that i have written"
      />
      <div className="relative ml-16 sm:ml-24 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map(blog => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          date(formatString: "MMMM Do, YYYY")
          slug
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default Blog
