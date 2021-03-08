import React from "react"
import "./blogs.css"
import { StaticImage } from "gatsby-plugin-image"

const Blogs = ({}) => {
  return (
    <div className="min-h-35">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col head-title row-span-1">
            <h2 className="text-4xl font-bold">My Blogs</h2>
            <p className="text-base text-gray-600">
              Some Articles/Blogs related to what i do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage
                  className="max-w-full"
                  src="../images/placeholder.png"
                  alt="placeholder"
                />
              </div>
              <div className="blog-content relative flex items-center flex-col justify-between py-2">
                <small className="text-gray-500">9th March, 2021</small>
                <h5 className="font-bold text-lg">
                  What is imposter Syndrome? And how you can beat it
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum, leo a ornare pellentesque, massa nibh lobortis
                  ligula, eget lobortis ex mi nec justo..
                </p>
                <a
                  className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 mt-3 self-start rounded-sm"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage
                  className="max-w-full"
                  src="../images/placeholder.png"
                  alt="placeholder"
                />
              </div>
              <div className="blog-content relative flex items-center flex-col justify-between py-2">
                <small className="text-gray-500">9th March, 2021</small>
                <h5 className="font-bold text-lg">
                  What is imposter Syndrome? And how you can beat it
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum, leo a ornare pellentesque, massa nibh lobortis
                  ligula, eget lobortis ex mi nec justo..
                </p>
                <a
                  className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 mt-3 self-start rounded-sm"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage
                  className="max-w-full"
                  src="../images/placeholder.png"
                  alt="placeholder"
                />
              </div>
              <div className="blog-content relative flex items-center flex-col justify-between py-2">
                <small className="text-gray-500">9th March, 2021</small>
                <h5 className="font-bold text-lg">
                  What is imposter Syndrome? And how you can beat it
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum, leo a ornare pellentesque, massa nibh lobortis
                  ligula, eget lobortis ex mi nec justo..
                </p>
                <a
                  className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 mt-3 self-start rounded-sm"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="px-5 py-5 bg-white rounded shadow-md">
              <div className="image">
                <StaticImage
                  className="max-w-full"
                  src="../images/placeholder.png"
                  alt="placeholder"
                />
              </div>
              <div className="blog-content relative flex items-center flex-col justify-between py-2">
                <small className="text-gray-500">9th March, 2021</small>
                <h5 className="font-bold text-lg">
                  What is imposter Syndrome? And how you can beat it
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum, leo a ornare pellentesque, massa nibh lobortis
                  ligula, eget lobortis ex mi nec justo..
                </p>
                <a
                  className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 mt-3 self-start rounded-sm"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
