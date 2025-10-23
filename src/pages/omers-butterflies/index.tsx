import * as React from "react";
import * as s from "./_omers-butterflies.module.scss";

import Layout from "../../components/layout";
import { GalleryGrid } from "../../components/galleryGrid/galleryGrid";
import { LargeBanner } from "../../components/banners/largeBanner/largeBanner";

import donateToOmersHouse from "../../assets/images/donate-to-omer's-house.jpg";
import takeAPart from "../../assets/images/take-a-part.jpg";
import donateToOmersHouseMobile from "../../assets/images/donate-to-omer's-house-m.jpg";
import { DonateHart } from "../../svg";
import BraceletsAreasBanner from "../../components/banners/braceletsAreasBanner/BraceletsAreasBanner";

import gallery1 from "../../assets/images/omers-butterflies-gallery1.jpg";
import gallery2 from "../../assets/images/omers-butterflies-gallery2.jpg";
import gallery3 from "../../assets/images/omers-butterflies-gallery3.jpg";
import gallery4 from "../../assets/images/omers-butterflies-gallery4.jpg";
import gallery5 from "../../assets/images/omers-butterflies-gallery5.jpg";
import gallery6 from "../../assets/images/omers-butterflies-gallery6.jpg";
import gallery7 from "../../assets/images/omers-butterflies-gallery7.jpg";
//  markup
const OmersHouse = () => {
  const images = [
    { image: gallery1, alt: "הצמידים של עומר - העבר את זה הלאה" },
    { image: gallery2, alt: "פעילויות חינוכיות של הפרפרים של עומר" },
    { image: gallery3, alt: "הצמידים של עומר מתחת למים" },
    { image: gallery4, alt: "פעילות חינוכית לילדי יסודי" },
    { image: gallery5, alt: "גרפיתי חינוכי עם נוער - העבר את זה הלאה" },
    { image: gallery6, alt: "תרומה לקהילה עם עמותת הפרפרים של עומר" },
    { image: gallery7, alt: "הצמידי של עומר מסביב לעולם" },
  ];
  return (
    <Layout needWrapper={true}>
      <div className={s.omersButterflies}>
        <h1 className="header">הפרפרים של עומר</h1>
        {/* <div className="sub-title">בית חם לצעירות חסרות עורף משפחתי</div> */}
        <p className="text-grid l center">
          <b>לכול אחד יש מה לתת ואין אחד שלא צריך משהו לפעמים.</b> אם תרצו לקחת
          חלק במיזם החברתי הזה, להיות חלק מקהילה, צרו אתנו קשר, תקבלו צמיד
          ותוכלו על ידי מעשה טוב לאחר ולהעביר לו את הצמיד שקיבלתם.. הצמיד יעבור
          הלאה בדיוק כמו אפקט הפרפר ותדעו שהתחלתם שרשרת אנושית של מעשים טובים.
          אחרי שתעבירו את הצמיד תוכלו תמיד לקבל חדש ולהמשיך...
        </p>
        <GalleryGrid images={images} />
        <p className="text-grid">
          עומר , כמעט בת 21, נסעה אחרי הצבא לטיול הגדול, עם תרמיל על הגב, עם
          הרבה חלומות ותמימות שהכל אפשרי. לפני כשנתיים, בדרך לטרק בנפאל,
          האוטובוס בה נסעה התגלגל לתהום ועומר נהרגה במקום.{" "}
          <b>
            אנחנו, המשפחה של עומר והחברים הקמנו להנצחתה את עמותת הפרפרים של
            עומר. 
          </b>
          <br />
          <br />
          <b>מטרת הפרויקט</b>
          <br />
          לעודד עשיית מעשים טובים באמצעות צמיד הפרפרים של עומר (הצמיד האדום)
          שעובר מאדם לאדם במעשה טוב, ויוצר שרשרת אנושית של מעשים טובים. לעודד כל
          אחד להניע את הכנפיים הקטנות שלו, כדי שיחד ניצור פה משב גדול של רוח
          טובה ועולם טוב יותר. 
          <br />
          <br />
          <b>איך זה עובד? </b>
          <br />
          כל מי שרוצה להיות חלק מהמיזם מזמין צמיד דרך טופס יצירת הקשר או באמצעות
          הטלפון שמפורסם למטה. את הצמיד מקבלים בדואר ללא כל תשלום ועונדים על
          היד. אח"כ מחפשים הזדמנות לעשות משהו טוב למען מישהו אחר, להעביר אליו את
          הצמיד ולומר לו "עכשיו תורך". הצמיד יעבור הלאה כמו אפקט הפרפר ונדע
          שהתחלנו שרשרת אנושית של מעשים טובים.
          <br />
          <br />
          <b>הצמיד הוא תזכורת</b>
          <br />
          תזכורת להרים את הראש, לפקוח עיניים, ולפתוח את הלב. תזכורת שגם אם אתמול
          נזקקנו לקבל, מחר תמיד יהיה לנו כוח לתת. תזכורת שאנחנו לא לבד. שאנחנו
          חלק מקהילה גדולה ומחבקת.
          <br />
          <br />
          <b>היקפי הפרויקט</b>
          <br />
          המיזם החברתי שלנו הצליח בפשטות שלו לגעת באנשים וגרר עשרות אלפי פניות
          של אנשים טובים שמבקשים לקחת בו חלק, הרבה מעבר לציפיות:
          <br />
          <br />
          <ul>
            <li>5000 הצמידים הראשונים שהזמנו כפיילוט אזלו בתוך יומיים.</li>
            <li>
              למעלה מ- 200,000 אנשים, נוער וילדים כבר עונדים את הצמיד שלנו.
            </li>
            <li>
              אנו מקבלים 100 פניות בממוצע בכל יום מבתי ספר, תנועות נוער, חיילים,
              עמותות, סטודנטים ואנשים פרטיים המבקשים צמיד.
            </li>
            <li>למעלה מ- 200 בתי ספר בארץ מטמיעים את הפרויקט. </li>
          </ul>
          <br />
          <br />
          <b>מה למדנו?</b>
          <br />
          יש ביקוש למעשים טובים. לא צריך לשווק אותם. זה מדבק וזה ויראלי. אנשים
          רוצים לתת. אנשים רוצים להרגיש שייכים ולהיות חלק ממשהו טוב. אנחנו רק
          שולחים להם תזכורת קטנה בצורת צמיד אדום.
        </p>
        <LargeBanner
          bgImage={donateToOmersHouse}
          bgImageAlt={"תעזרו לבית של עומר להמשיך בעשייה ותרמו לנו"}
          title={"התרומה שלכם עוזרת לנו להמשיך לעזור לעוד צעירות"}
          text={
            "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש."
          }
          link={"donatde"}
          linkText={"לתרומה"}
        />
        <h2 className="header">צמידים</h2>
        <p className="text-grid l center">
          לכול אחד יש מה לתת ואין אחד שלא צריך משהו לפעמים אם תרצו לקחת חלק
          במיזם החברתי הזה, להיות חלק מקהילה, צרו אתנו קשר, תקבלו צמיד ותוכלו על
          ידי מעשה טוב לאחר ולהעביר לו את הצמיד שקיבלתם.. הצמיד יעבור הלאה בדיוק
          כמו אפקט הפרפר ותדעו שהתחלתם שרשרת אנושית של מעשים טובים. אחרי שתעבירו
          את הצמיד תוכלו תמיד לקבל חדש ולהמשיך...
        </p>
        <button className={`${s.readMore} red-clickable`}>להמשך קריאה</button>
        <BraceletsAreasBanner />
      </div>
    </Layout>
  );
};

export default OmersHouse;
