import * as React from "react"
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'
import MainBanner from "../components/index/mainBanner"
import Faq from "../components/faq"
import Nav from "../components/nav"
import "../styles/general.scss"
import About from "../components/index/about"

interface Props {
  favicon: any,
  Helmet: any
}

// markup
const IndexPage = (props: Props) => {
  const { } = props

  return (
    <div>
      {/* <div dir="rtl"> */}
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Nav />
      <MainBanner />
      <About />
      <Faq />
    </div>
  )
}

export default IndexPage
