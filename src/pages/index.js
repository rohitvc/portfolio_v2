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
import Blogs from '../components/blogs'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <div className="relative">
      <div className="h-screen overflow-y-auto">
        <Homepage></Homepage>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Work></Work>
        <Blogs></Blogs>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  </Layout>
)

export default IndexPage
