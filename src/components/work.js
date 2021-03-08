import React from "react"
import "./work.css"
import { StaticImage } from "gatsby-plugin-image"

const Work = ({}) => {
  return (
    <div className="min-h-35">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col head-title row-span-1">
            <h2 className="text-4xl font-bold">My Work</h2>
            <p className="text-base text-gray-600">
              Some of the projects that i have worked on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage className="max-w-full" src="../images/placeholder.png" alt="placeholder" />
              </div>
              <div className="details flex items-center justify-between py-2">
                <p className="font-normal text-lg">Coming soon</p>
                <a className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-sm" href="#">Link</a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage className="max-w-full" src="../images/placeholder.png" alt="placeholder" />
              </div>
              <div className="details flex items-center justify-between py-2">
                <p className="font-normal text-lg">Coming soon</p>
                <a className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-sm" href="#">Link</a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage className="max-w-full" src="../images/placeholder.png" alt="placeholder" />
              </div>
              <div className="details flex items-center justify-between py-2">
                <p className="font-normal text-lg">Coming soon</p>
                <a className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-sm" href="#">Link</a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage className="max-w-full" src="../images/placeholder.png" alt="placeholder" />
              </div>
              <div className="details flex items-center justify-between py-2">
                <p className="font-normal text-lg">Coming soon</p>
                <a className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-sm" href="#">Link</a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage className="max-w-full" src="../images/placeholder.png" alt="placeholder" />
              </div>
              <div className="details flex items-center justify-between py-2">
                <p className="font-normal text-lg">Coming soon</p>
                <a className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-sm" href="#">Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
