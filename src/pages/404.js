import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <main className="error-page">
      <div className="relative ml-16 sm:ml-24 h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col z-10 text-white lg:text-black p-2 top-1/3 absolute lg:relative">
          <h1 className="text-6xl font-light">Oops!! I think you have lost your way.</h1>
          <div className="mt-6 p-2">
            <Link
              to="/"
              className="bg-red-500 hover:bg-red-700 text-white px-10 py-5 text-lg inline rounded"
            >
              Take me home
            </Link>
          </div>
        </div>
        <div className="h-full">
          <StaticImage className="h-full bg-center bg-no-repeat bg-cover" src="../images/404.png" alt="page not found" />
        </div>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
