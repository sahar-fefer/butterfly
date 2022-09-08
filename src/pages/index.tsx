import * as React from "react"
import { useState } from "react"
import MainBanner from "../components/index/mainBanner"
import Faq from "../components/faq"
import Nav from "../components/nav"
// import "../styles/general.scss"
import "../styles/index/index.scss"
import About from "../components/index/about"
import Footer from "../components/footer"
import Layout from "../components/layout"

//  markup
const IndexPage = () => {
  const [lang, setLang] = useState<string>('EN')

  const changeLang = (e: React.MouseEvent<HTMLElement>) => {
    if (lang === 'עב')
      setLang('EN')
    else
      setLang('עב')
    console.log(lang);
  }

  return (
    // <div>
    <div className={`main ${lang === 'EN' ? 'heb' : 'eng'}`}>
      <Layout lang={lang} changeLang={changeLang}>
        {/* <Nav lang={lang} changeLang={changeLang} /> */}
        <MainBanner />
        <About />
        <Faq />
        {/* <Footer /> */}
      </Layout>
    </div>
  )
}

export default IndexPage
