import React from "react"
import "./experience.css"
// import { StaticImage } from "gatsby-plugin-image"

const Experience = () => {
  return (
    <div className="min-h-35">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-5">My Experience</h3>
          <div className="p-5 mb-5 bg-white rounded shadow-md">
            <div className="border-l-2 border-red-400 experience-content relative">
              <div className="pl-10 pb-10">
                <h6 className="text-lg font-medium">
                  Front-end Engineer - Magassians India Pvt Ltd
                </h6>
                <small className="italic">2020-present</small>
                <p>
                  Involved in creating user interfaces for company's internal
                  portal. Mainly used Vue as a frontend javascript library. Also
                  tried my hand at creating restful API's using Golang as
                  backend language.
                </p>
              </div>
            </div>
            <div className="border-l-2 border-red-400 experience-content relative">
              <div className="pl-10 pb-10">
                <h6 className="text-lg font-medium">
                  Front-end Developer - Teliax India Pvt Ltd
                </h6>
                <small className="italic">2019-2020</small>
                <p>
                  Mainly worked on creating company's internal websites for
                  customers and VOIP mobile application using React and React
                  Native.
                </p>
              </div>
            </div>
            <div className="border-l-2 border-red-400 experience-content relative">
              <div className="pl-10 pb-10">
                <h6 className="text-lg font-medium">
                  Remote Enginner - Geekay Infotech Pvt Ltd
                </h6>
                <small className="italic">2018-2019</small>
                <p>
                  Worked on a biometric authentication project which was
                  implemented for all the employees of an MNC. Job invovled
                  troubleshooting identified issues and fixing them.
                </p>
              </div>
            </div>
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
