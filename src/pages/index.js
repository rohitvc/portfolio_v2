import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Homepage from "../components/homepage"
import About from "../components/about"
import Experience from '../components/experience'
import Skills from '../components/skills'
import Work from '../components/work'

const IndexPage = () => (
  <Layout>
    <div className="relative">
      <div className="h-screen overflow-y-auto">
        <Homepage></Homepage>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Work></Work>
      </div>
    </div>
  </Layout>
)

export default IndexPage
