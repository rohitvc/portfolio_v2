import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

function BlogTemplate({ data }) {
  const { title, childStrapiBlogContent } = data.blog
  const {
    childMdx: { body, excerpt, timeToRead },
  } = childStrapiBlogContent
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
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      childStrapiBlogContent {
        childMdx {
          body
          excerpt
          timeToRead
        }
      }
    }
  }
`

export default BlogTemplate
