import * as React from "react";
import "../styles/_about.scss";

import Layout from "../components/layout";
import AyeletAbdOmer from "../images/ayelet-and-omer.jpg";
import OmerTattoo from "../images/butterflies-are-forever-omer's-tattoo.jpg";
import AyeletFooter from "../images/about-ayelet-shemesh.jpg";
import YaelFooter from "../images/about-yael-sarig.jpg";

//  markup
const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <section className="our-story">
          <h1 className="header">הסיפור שלנו</h1>
          <div className="sub-title">
            עומר , כמעט בת 21, נסעה אחרי הצבא לטיול הגדול, עם תרמיל על הגב, עם
            הרבה חלומות ותמימות שהכל אפשרי. לפני כשנתיים, בדרך לטרק בנפאל,
            האוטובוס בה נסעה התגלגל לתהום ועומר נהרגה במקום. אנחנו, המשפחה של
            עומר והחברים הקמנו להנצחתה את עמותת "הפרפרים של עומר.
          </div>
          <div className="images-wrapper">
            <img loading="lazy" src={AyeletAbdOmer} alt="" />
            <img loading="lazy" src={OmerTattoo} alt="" />
          </div>
          <p className="text-grid">
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר
            סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט
            ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
            מורגם בורק? לתיג ישבעס.
            <br />
            <br />
            נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו
            בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף ושבעגט ליבם סולגק.
            בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה -
            לתכי מורגם בורק? לתיג ישבעס. לורם איפסום דולור סיט אמט, קונסקטורר
            אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ,
            ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד
            לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס. מגמש. תרבנך וסתעד לכנו
            סתשם השמה לתכי מורגם בורק? לתיג ישבעס.פיאן - פוסיליס קוויס, אקווזמן
            קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק -
            וענוף ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך
            וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
          </p>
        </section>
        <section className="founders">
          <div className="m-to-d-l">
            <div className="images-wrapper">
              <img
                loading="lazy"
                className="person"
                src={AyeletFooter}
                alt=""
              />
              <img loading="lazy" className="person" src={YaelFooter} alt="" />
            </div>
            <div className="title">איילת שמש ויעל שריג</div>
            <div className="info">
              איילת היא אמא של עומר וגשעומר נהרגה בנפאל היה לה מאוד חשוב להנציח
              את זכרה.
              <br />
              <br />
              יעל ואיילת הכירו ב?????? ומאז הן חברות טובות ואי אפשר להפריד
              בינהן. כשאיילת החליטה שהיא מקימה עמותות לעומר ליעל זה היה ברור
              שהיא תהייה חלק מהתהליך.
            </div>
          </div>
          <div className="d-l-grid">
            <div className="box">
              <img className="person" src={AyeletFooter} alt="" />
              <div className="about-person">
                <div className="title">איילת שמש</div>
                <div className="info">
                  איילת היא אמא של עומר וכשעומר נהרגה בנפאל היה לה מאוד חשוב
                  להנציח את זכרה.
                </div>
              </div>
            </div>
            <div className="box">
              <img className="person" src={YaelFooter} alt="" />
              <div className="about-person">
                <div className="title">יעל שריג</div>
                <div className="info">
                  יעל ואיילת הכירו ב?????? ומאז הן חברות טובות ואי אפשר להפריד
                  בינהן. כשאיילת החליטה שהיא מקימה עמותות לעומר ליעל זה היה ברור
                  שהיא תהייה חלק מהתהליך.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
