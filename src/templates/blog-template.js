import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

function BlogTemplate({ data }) {
  const {
    mdx: {
      frontmatter: { title },
      body,
      excerpt
    },
  } = data
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <div className="relative ml-16 sm:ml-24">
        <section>
          <div className="flex justify-center py-6">
            <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
              <MDXRenderer>{body}</MDXRenderer>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      excerpt
    }
  }
`

export default BlogTemplate
