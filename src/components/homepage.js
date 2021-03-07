import React from "react"
import SocialIcons from './social'
import "./homepage.css"

const Homepage = ({}) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-12 h-4/6 max-h-vh60">
        <section className="bg-gray-100 grid grid-cols-none grid-rows-4 col-span-12 md:col-span-6">
          <SocialIcons></SocialIcons>
          <div className="hero-text flex flex-col ml-10 row-span-3">
            <p className="font-medium text-gray-600 text-2xl">Hello there,</p>
            <h2 className="text-5xl font-black mt-2">I am a Web developer</h2>
            <p className="font-medium text-gray-600 mt-3 text-xl">Welcome to my portfolio website</p>
          </div>
        </section>
        <section className="h-screen main-hero-image col-span-12 md:col-span-6"></section>
      </div>
      <div className="grid grid-cols-12 h-4/6 max-h-vh60">
      About me section
      </div>
    </div>
  )
}

export default Homepage
