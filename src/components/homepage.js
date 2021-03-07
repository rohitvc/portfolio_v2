import React from "react"
import SocialIcons from "./social"
import "./homepage.css"

const Homepage = ({}) => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 md:grid-rows-none min-h-35 max-h-4/6">
      <section className="bg-gray-100 grid grid-rows-3 col-span-12 md:col-span-6">
        <SocialIcons></SocialIcons>
        <div className="hero-text flex flex-col ml-10">
          <p className="font-medium text-gray-600 text-base sm:text-2xl">
            Hello there,
          </p>
          <h2 className="text-3xl sm:text-5xl font-black mt-2">
            I am a developer
          </h2>
          <p className="font-medium text-gray-600 mt-3 text-lg sm:text-xl">
            Welcome to my portfolio website
          </p>
        </div>
      </section>
      <section className="main-hero-image col-span-12 md:col-span-6"></section>
    </div>
  )
}

export default Homepage
