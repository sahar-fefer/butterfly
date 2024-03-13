import * as React from "react";
import Faq from "../components/faq/faq";
import "../styles/_index.scss";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { DonateHart } from "../svg";

import MobileBannerImg from "../images/main-banner-m.jpg";
import FullBannerImg from "../images/main-banner-d.jpg";
import AboutButterfly from "../images/about-butterfly.jpg";
import AboutHouse from "../images/about-house.jpg";
import Button from "../components/button/button";

//  markup
const Index = () => {
  return (
    <Layout needWrapper={false}>
      <section className="main-banner">
        <picture>
          <source media="(min-width: 768px)" srcSet={FullBannerImg} />
          <img loading="lazy" className="banner" src={MobileBannerImg} alt="" />
        </picture>
        {/* <img className='banner' src={BannerImg} alt="" /> */}
        <div className="inner-text">
          <h1>
            עומר השארת לנו מתנה,
            <br />
            אנחנו מעבירות אותה הלאה
          </h1>
          <div className="main-sub-title">
            עזרת לנו לראות, אנחנו נמשיך להפיץ את אורך, <br />
            טוב ליבך ושמחת החיים שלך.
          </div>
          <div className="ctas">
            <Button
              text={"לתרומה"}
              link={"donate"}
              hart={true}
              color="white"
              hartColor="black"
            />
            <Button text={"להתנדבות"} link={"donate"} color="ghost" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="small-title">על העמותות</div>
        <h2>הסיפור של עומר</h2>
        <div className="sub-title">
          עומר נסעה לטיול הגדול, עם המון חלומות ותמימות שהכול אפשרי - עומר נהרגה
          בנפאל. ב-21 שנות חייה
          <br /> הצליחה בדרכה האמיתית והמיוחדת לגעת בליבם של הרבה אנשים, היא
          ידעה לתת מקום לכול אדם, וכשהיא
          <br /> הביטה בך, ידעת שהיא איתך. כדי להנציח את זכרה של עומר הקמנו שתי
          עמותות.
        </div>
        <div className="ctas">
          <Link to="/" className="cta butterfly">
            <img
              loading="lazy"
              className="cta-img"
              src={AboutButterfly}
              alt=""
            />
            <div className="text">
              <div className="title">הפרפרים של עומר</div>
              <div className="more-info">לפרטים</div>
            </div>
          </Link>
          <Link to="/" className="cta house">
            <img loading="lazy" className="cta-img" src={AboutHouse} alt="" />
            <div className="text">
              <div className="title">הבית של עומר</div>
              <div className="more-info">לפרטים</div>
            </div>
          </Link>
        </div>
      </section>
      <Faq />
    </Layout>
  );
};

export default Index;
