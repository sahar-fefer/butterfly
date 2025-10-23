import * as React from "react";
import * as s from "./_contact.module.scss";

import Layout from "../../components/layout";
import ContactUs from "../../components/contact/contactUs";
import Form from "../../components/contact/form";

//  markup
const About = () => {
  return (
    <Layout needWrapper={false}>
      <div className={`${s.contactWrapper} desktop-fill-page`}>
        {/* <div className="page-wrapper"> */}
        <ContactUs />
        <Form />
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default About;
