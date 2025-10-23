import * as React from "react";
import * as s from "./_omers-house.module.scss";

import Layout from "../../components/layout";
import { GalleryGrid } from "../../components/galleryGrid/galleryGrid";
import { LargeBanner } from "../../components/banners/largeBanner/largeBanner";

import takeAPart from "../../assets/images/take-a-part.jpg";
import donateToOmersHouseMobile from "../../assets/images/donate-to-omer's-house-m.jpg";
import donateToOmersHouse from "../../assets/images/donate-to-omer's-house.jpg";
import { DonateHart } from "../../svg";

import gallery1 from "../../assets/images/omers-house-gallery1.jpg";
import gallery2 from "../../assets/images/omers-house-gallery2.jpg";
import gallery3 from "../../assets/images/omers-house-gallery3.jpg";
import gallery4 from "../../assets/images/omers-house-gallery4.jpg";
import gallery5 from "../../assets/images/omers-house-gallery5.jpg";
import gallery6 from "../../assets/images/omers-house-gallery6.jpg";
import gallery7 from "../../assets/images/omers-house-gallery7.jpg";
//  markup
const OmersHouse = () => {
  const images = [
    { image: gallery1, alt: "OmersGirls" },
    { image: gallery2, alt: "OmersFlowers" },
    { image: gallery3, alt: "OmersEnter" },
    { image: gallery4, alt: "OmersVolunteers" },
    { image: gallery5, alt: "OmersSales" },
    { image: gallery6, alt: "OmersSelling" },
    { image: gallery7, alt: "OmersActivity" },
  ];
  return (
    <Layout needWrapper={true}>
      <div className={s.omersHouse}>
        <h1 className="header">הבית של עומר</h1>
        <div className={s.subTitle}>בית חם לצעירות חסרות עורף משפחתי</div>
        <p className="text-grid l center">
          הבית של עומר הוקם ומנוהל על ידי עמותת "הפרפרים של עומר" (ע.ר.
          580614402). זהו בית מגורים פרטי, חם ומחבק, לצעירות חסרות עורף משפחתי,
          הזקוקות לקורת גג, לתקופה ארוכה (כשנה וחצי - שנתיים). בבית 6 צעירות
          בגילאי 19 עד 23, המסוגלות, בתמיכה וליווי, לנהל אורח חיים עצמאי. הבית
          מספק לכל צעירה קורת גג, מזון, ארוחה חמה וכן מעטפת כוללת שמאפשרת
          לצעירות בבית לבנות את עצמן כבוגרות איתנות, שיוכלו בסוף התהליך לצאת
          למסלול חיים חדש. בנות הבית מנהלות אורח חיים עצמאי, עובדות ולומדות, על
          פי תכנית ליווי אישית בתחומי השכלה, התנהלות כלכלית, תעסוקה, טיפול ועוד.
        </p>
        <GalleryGrid images={images} />
        <p className="text-grid">
          הבית שוכן במושב ירקונה הצמוד להוד השרון. הוא מוקף במרחבים ירוקים. על
          צוות הבית נמנות מקימות העמותה, אשר מנהלות את הבית בהתנדבות וכן צוות
          בשכר הכולל את עו"סית הבית ואם הבית.
          <br />
          <br />
          הצעירות הגרות בבית מגיעות אלינו מכל קצוות הארץ. הן מופנות על ידי גורמי
          הרווחה השונים, על ידי עמותות, פנימיות, גורמים המטפלים בחיילות בודדות
          ועוד. התאמתה של כל מועמדת נבחנת בתהליך קליטה קפדני. הבית שלנו הוא
          מסגרת מוכרת ומפוקחת על ידי משרד הרווחה ואגף הרווחה במועצה המקומית דרום
          השרון אשר מלווים ושותפים לדרך.
          <br />
          <br />
          <b>
            מימון הבית מתבצע כמחציתו מתקציבי משרד הרווחה. המחצית הנוספת ממומנת
            מתרומות של גורמים פרטיים המאפשרים לנו להעשיר את הבית במזון, בצוות
            מקצועי, בפעילויות תרבות, העשרה, מלגות לימודים, הכוון תעסוקתי,
            טיפולים רגשיים ועוד.
          </b>
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
        ></LargeBanner>
      </div>
    </Layout>
  );
};

export default OmersHouse;
