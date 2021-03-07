import React from "react"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"

const About = ({}) => {
  return (
    <div className="min-h-35">
      <section className="px-10 lg:px-40 grid grid-cols-1 grid-rows-4">
        <div className="my-10 flex flex-wrap flex-col about-title row-span-1">
          <h2 className="text-4xl font-bold">About me</h2>
          <p className="text-base text-gray-600">
            Get to know more about me and what i do
          </p>
        </div>
        <div className="row mb-10 row-span-3">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7">
              <StaticImage src="../images/github.png" alt="A dinosaur" />
            </div>
            <div className="col-span-12 md:col-span-5">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="pb-5 text-lg font-bold">Hello, I'm Rohit Chavan</h2>
                    <p className="pb-5 text-lg font-light">A Web developer based in Mumbai, India. I specialise in creating interactive experiences and functional interfaces on the web. I Spend most of my time learning new skills to improve and explore new technologies that keeps coming now and then.</p>
                    <a className="p-2 w-max inline-flex bg-red-500 hover:bg-red-700 text-white rounded" href="#download">Download My CV</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
