import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogCard from "./blogCard"

const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date }) {
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

const Blogs = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { nodes: blogs },
  } = data

  return (
    <div id="blog" className="min-h-35 scroll-target">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col head-title row-span-1">
            <h2 className="text-4xl font-bold">My Blogs</h2>
            <p className="text-base text-gray-600">
              Some Articles/Blogs related to what i do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
