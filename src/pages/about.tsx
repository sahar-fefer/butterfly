import * as React from "react"
import "../styles/about/index.scss"

import Layout from "../components/layout"
import OurStory from "../components/about/ourStory"
import AboutFooter from "../components/about/aboutFooter"

//  markup
const About = () => {

  return (
    <Layout>
      <OurStory />
      <AboutFooter />
    </Layout>
  )
}

export default About