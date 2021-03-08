import React from "react"
import "./skills.css"
// import { StaticImage } from "gatsby-plugin-image"

const Skills = ({}) => {
  return (
    <div className="min-h-35">
      <section className="px-5 sm:px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col head-title row-span-1">
            <h2 className="text-4xl font-bold">My Expertise</h2>
            <p className="text-base text-gray-600">
              Things that i am better at in web development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 mt-10">
          <h3 className="text-xl font-bold mb-5">Dev Skills</h3>
          <div className="flex flex-wrap">
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="html"
                src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="css3"
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="javascript"
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="vue js"
                src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="react"
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="react native"
                src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="typescript"
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="gatsby"
                src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="tailwind"
                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="sass"
                src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="golang"
                src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="mongodb"
                src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="postgresql"
                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="mysql"
                src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="docker"
                src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10">
          <h3 className="text-xl font-bold mb-5">Tools used</h3>
          <div className="flex flex-wrap">
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="yarn"
                src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="npm"
                src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="vscode"
                src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
              ></img>
            </div>
            <div className="rounded h-8 mx-2 my-2">
              <img
                className="h-full"
                alt="git"
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
