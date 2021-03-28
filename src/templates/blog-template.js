import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'
import SEO from '../components/seo'

function BlogTemplate({ data }) {
  const { content, title, description } = data.blog
  return (
    <Layout>
      <SEO title={title} description={description} />
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
      title
      description
    }
  }
`

export default BlogTemplate
