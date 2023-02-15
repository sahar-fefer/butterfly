import * as React from "react"
import "../styles/_contact.scss"

import Layout from "../components/layout"
import ContactUs from "../components/contact/contactUs"
import Form from "../components/contact/form"

//  markup
const About = () => {

  return (
    <Layout>
      <div className="contact-wrapper desktop-fill-page">
        {/* <div className="page-wrapper"> */}
        <ContactUs />
        <Form />
      </div>
      {/* </div> */}
    </Layout>
  )
}

export default About