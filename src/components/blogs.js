import React from "react"
import "./blogs.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
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

const Blogs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiBlogs: { nodes: blogs },
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
              <div key={blog.id} className="px-5 py-5 bg-white rounded shadow-md">
                <div className="image">
                  <GatsbyImage
                    className="max-w-full"
                    image={blog.image.childImageSharp.gatsbyImageData}
                    alt={blog.title}
                  />
                </div>
                <div className="blog-content relative flex items-center flex-col justify-between py-2">
                  <small className="text-gray-600 font-bold">{blog.date}</small>
                  <h5 className="font-bold text-lg text-red-500 mt-2">
                    {blog.title}
                  </h5>
                  <p className="text-base">
                    {blog.description}
                  </p>
                  <Link
                    className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 mt-3 self-start rounded-sm"
                    to={`/blogs/${blog.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
