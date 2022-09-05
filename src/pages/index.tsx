import * as React from "react"
import { useState } from "react"
import MainBanner from "../components/index/mainBanner"
import Faq from "../components/faq"
import Nav from "../components/nav"
import "../styles/general.scss"
import About from "../components/index/about"

//  markup
const IndexPage = () => {
  const [lang, setLang] = useState<string>('EN')

  const changeLang = (e: React.MouseEvent<HTMLElement>) => {
    if (lang === 'עב')
      setLang('EN')
    else
      setLang('עב')
  }
  console.log(lang);

  return (
    // <div>
    <div className={`main ${lang === 'EN' ? 'heb' : 'eng'}`}>
      <Nav lang={lang} changeLang={changeLang} />
      <MainBanner />
      <About />
      <Faq />
    </div>
  )
}

export default IndexPage
