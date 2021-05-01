import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "./blogs.css"
import { Link } from "gatsby"

function BlogCard({blog: { id, excerpt, frontmatter }}) {
  const { title, image, slug, date } = frontmatter
  return (
    <div key={id} className="px-5 py-5 bg-white rounded shadow-md flex flex-col">
      <div className="image flex-grow">
        <GatsbyImage
          className="max-w-full"
          image={image.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </div>
      <div className="blog-content relative flex-shrink-0 flex items-center flex-col justify-between py-2">
        <small className="text-gray-600 font-bold">{date}</small>
        <h5 className="font-bold sm:text-sm text-lg text-red-500 mt-2">
          {title}
        </h5>
        <p className="md:text-xs lg:text-base">{excerpt}</p>
        <Link
          className="bg-red-500 hover:bg-red-700 md:text-sm lg:text-base text-white px-6 py-3 mt-3 self-start rounded-sm"
          to={`/blogs/${slug}`}
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
