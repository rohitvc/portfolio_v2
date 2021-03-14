import React, { useState, useEffect } from "react"
import "./sidebar.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { navigate } from "@reach/router"
var throttle = require("lodash.throttle")

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home")

  useEffect(() => {
    const scrollDiv = document.querySelector(".main-scroll-div")
    const throttleScroll = throttle(scroller, 300)
    scrollDiv.addEventListener("scroll", throttleScroll)
    return () => scrollDiv.removeEventListener("scroll", throttleScroll)
  }, [])

  const anchorClicked = hash => {
    setActiveLink(hash)
    navigate(`#${hash}`)
  }

  const scroller = () => {
    const scrollDiv = document.querySelector(".main-scroll-div")

    document.querySelectorAll(".scroll-target").forEach(function (node) {
      if (
        scrollDiv.scrollTop + 300 >= node.offsetTop &&
        scrollDiv.scrollTop + 300 <= node.offsetTop + node.offsetHeight
      ) {
        const id = node.getAttribute("id")
        setActiveLink(id)
      }
    })
  }

  return (
    <div className="h-screen">
      <nav className="min-h-35 max-h-90 flex flex-col justify-between">
        <div className="rounded-full flex items-center justify-center items-center mx-auto mt-2 h-10 sm:h-16 w-10 sm:w-16 bg-red-600">
          <h5 className="text-white text-base sm:text-xl hover:text-gray-800 cursor-pointer">
            RC
          </h5>
        </div>

        <AnchorLink
          className={`sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer${
            activeLink === "home" ? " active text-red-500" : ""
          }`}
          to="/#home"
          onAnchorLinkClick={() => anchorClicked("home")}
        >
          Home
        </AnchorLink>

        <AnchorLink
          className={`sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer${
            activeLink === "about" ? " active text-red-500" : ""
          }`}
          to="/#about"
          title="About"
          onAnchorLinkClick={() => anchorClicked("about")}
        ></AnchorLink>

        <AnchorLink
          className={`sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer${
            activeLink === "expertise" ? " active text-red-500" : ""
          }`}
          to="/#expertise"
          title="Expertise"
          onAnchorLinkClick={() => anchorClicked("expertise")}
        ></AnchorLink>

        <AnchorLink
          className={`sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer${
            activeLink === "work" ? " active text-red-500" : ""
          }`}
          to="/#work"
          title="Work"
          onAnchorLinkClick={() => anchorClicked("work")}
        ></AnchorLink>

        <AnchorLink
          className={`sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer${
            activeLink === "blog" ? " active text-red-500" : ""
          }`}
          to="/#blog"
          title="Blog"
          onAnchorLinkClick={() => anchorClicked("blog")}
        ></AnchorLink>

        <AnchorLink
          className={`sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer${
            activeLink === "contact" ? " active text-red-500" : ""
          }`}
          to="/#contact"
          title="Contact"
          onAnchorLinkClick={() => anchorClicked("contact")}
        ></AnchorLink>
      </nav>
    </div>
  )
}

export default Sidebar
