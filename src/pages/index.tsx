import * as React from "react"
import { useState } from "react"
import MainBanner from "../components/index/mainBanner"
import Faq from "../components/faq"
import "../styles/index/index.scss"
import About from "../components/index/about"
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
    <div className={`main ${lang === 'EN' ? 'heb' : 'eng'}`}>
      <Layout lang={lang} changeLang={changeLang}>
        <MainBanner />
        <About />
        <Faq />
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </>
  );
};