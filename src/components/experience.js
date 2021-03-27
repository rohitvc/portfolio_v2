import React from "react"
import "./experience.css"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allStrapiJobs {
      nodes {
        company
        date
        position
        strapiId
        desc {
          id
          name
        }
      }
    }
  }
`

const Experience = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  return (
    <div className="min-h-35">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-5">My Experience</h3>
          <div className="p-5 mb-5 bg-white rounded shadow-md">
            {jobs.map(job => (
              <div key={job.strapiId} className="border-l-2 border-red-400 experience-content relative">
                <div className="pl-10 pb-10">
                  <h6 className="text-lg font-medium">
                    {job.position} - {job.company}
                  </h6>
                  <small className="italic">{job.date}</small>
                  {job.desc.map(description => (
                    <p key={description.id}>
                      {description.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-5">My Education</h3>
          <div className="p-5 mb-5 bg-white rounded shadow-md">
            <div className="border-l-2 border-red-400 education-content relative">
              <div className="pl-10 pb-10">
                <h6 className="text-lg font-medium">
                  Bachelor of Science in Information Technology - Mumbai
                  University
                </h6>
                <small className="italic">2014-2017</small>
                <p>
                  I have completed my Bachelor Degree in I.T from Pragati
                  College of Science & Commerce (University of Mumbai)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
