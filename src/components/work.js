import React from "react"
import "./work.css"
// import { StaticImage } from "gatsby-plugin-image"

const Work = ({}) => {
  return (
    <div className="min-h-35">
      <section className="px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col about-title row-span-1">
            <h2 className="text-4xl font-bold">My Work</h2>
            <p className="text-base text-gray-600">
              Some of my projects that i have written.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="border text-center rounded-full w-20 h-20 border-red-500 m-auto">
                <h2 className="font-extrabold text-3xl text-red-500 border-red-500 h-full flex justify-center items-center">
                  01
                </h2>
              </div>
              <div className="content">
                <h5 className="text-xl font-bold text-center mt-4">
                  Responsive
                </h5>
                <p className="text-base font-light text-center mt-3">
                  Creating websites that would look nice on different devices of
                  varying screen sizes
                </p>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="border text-center rounded-full w-20 h-20 border-red-500 m-auto">
                <h2 className="font-extrabold text-3xl text-red-500 border-red-500 h-full flex justify-center items-center">
                  02
                </h2>
              </div>
              <div className="content">
                <h5 className="text-xl font-bold text-center mt-4">Dynamic</h5>
                <p className="text-base font-light text-center mt-3">
                  Creating websites which has lot of moving parts,
                  micro-interactions, data-fetching and displaying it to the
                  user in meaningful manner.
                </p>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="border text-center rounded-full w-20 h-20 border-red-500 m-auto">
                <h2 className="font-extrabold text-3xl text-red-500 border-red-500 h-full flex justify-center items-center">
                  03
                </h2>
              </div>
              <div className="content">
                <h5 className="text-xl font-bold text-center mt-4">
                  Intuitive
                </h5>
                <p className="text-base font-light text-center mt-3">
                  I like to create User interfaces that are easy to use.
                  Intuitive UI/UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
