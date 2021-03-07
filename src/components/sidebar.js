import React from "react"
import "./sidebar.css"

const Sidebar = ({}) => {
  return (
    <div className="h-screen">
      <nav className="h-full">
        <ul className="min-h-35 max-h-90 flex flex-col justify-between">
          <li className="flex justify-center mt-4">
            <div className="rounded-full flex items-center justify-center items-center h-16 w-16 bg-red-600">
              <h5 className="text-white text-xl hover:text-gray-800 cursor-pointer">
                RC
              </h5>
            </div>
          </li>
          <li className="sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer">
            Home
          </li>
          <li className="sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer">
            About
          </li>
          <li className="sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer">
            Expertise
          </li>
          <li className="sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer">
            Work
          </li>
          <li className="sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer">
            Blog
          </li>
          <li className="sidebar-menu-item inline-block transform -rotate-90 origin-center text-center hover:text-red-500 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
