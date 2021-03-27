import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'

function BlogTemplate({ data }) {
  const { content } = data.blog
  return (
    <Layout>
      <div className="relative ml-16 sm:ml-24">
        <section>
          <div>
            <article>
                <ReactMarkdown>{content}</ReactMarkdown>
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
      content
    }
  }
`

export default BlogTemplate
