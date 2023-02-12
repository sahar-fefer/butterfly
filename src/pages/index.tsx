import * as React from "react"
import MainBanner from "../components/index/mainBanner"
import Faq from "../components/faq"
import "../styles/index/index.scss"
import About from "../components/index/about"
import Layout from "../components/layout"

//  markup
const Index = () => {

  return (
    <Layout>
      <MainBanner />
      <About />
      <Faq />
    </Layout>
  )
}

export default Index

export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="preload" as="style" />
    </>
  );
};