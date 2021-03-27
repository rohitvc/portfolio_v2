import React from "react"
import "./work.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        deploy_url
        description
        featured
        github_url
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const Work = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <div id="work" className="min-h-35 scroll-target">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col head-title row-span-1">
            <h2 className="text-4xl font-bold">My Work</h2>
            <p className="text-base text-gray-600">
              Some of the projects that i have worked on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map(project => (
              <div
                key={project.id}
                className="px-5 py-5 bg-white rounded shadow-md flex justify-between flex-col"
              >
                <div className="image">
                  <GatsbyImage
                    className="max-w-full"
                    image={project.image.childImageSharp.gatsbyImageData}
                    alt={project.title}
                  />
                </div>
                <div className="details flex flex-col mt-4 text-red-500">
                  <p className="font-bold pb-2 text-lg">{project.title}</p>
                  <div className="flex justify-between">
                    <Link
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded-sm"
                      to="/#"
                    >
                      Github
                    </Link>
                    <Link
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded-sm"
                      to="/#"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
