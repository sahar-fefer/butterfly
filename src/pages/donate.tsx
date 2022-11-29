import * as React from "react"
import "../styles/donate/index.scss"

import Layout from "../components/layout"
import SimpleWood from "../images/simply-wood-donates.jpg"
import Riviera from "../images/riviera-donates.jpg"
import Polyron from "../images/polyron-donates.jpg"
import Avatar from "../images/avatar-donates.jpg"

//  markup
const Donate = () => {

  return (
    <Layout>
      <div className="donate-page">
        <h1 className="header">מתנדבים ותורמים</h1>
        <div className="sub-title">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </div>
        <div className="donates-gride">
          <div className="donate-cell">
            <img className="square" src={SimpleWood} alt="" />
            <div className="name">דני וגיא יאברי מסימפלי ווד</div>
            <div className="about-donate">רשת חנויות ריהוט לבית מלווים את הבית של עומר משלב הקמתו. עזרו לנו להפוך קירות לבית. ספות וכורסאות רכות ומפנקות, שולחן אוכל גדול, כסאות נוחים וצבעוניים, שולחן עבודה ובעיקר לא שמענו מהם אף פעם שאי אפשר. תמיד מוצאים את הדרך לומר כן.</div>
          </div>
          <div className="donate-cell">
            <img className="square" src={Riviera} alt="" />
            <div className="name">אורי סגרה והחברים בארונות רביירה</div>
            <div className="about-donate">מה היינו עושות בלעדיכם? הבגדים של בנות הבית (ויש לנו לא מעט...) מסודרים בארונות קיר לבנים, מרווחים שנבנו לנו ברביירה במיוחד לפי מידה. הובלתם והרכבתם לנו ארון בכי...</div>
          </div>
          <div className="donate-cell">
            <img className="square" src={Polyron} alt="" />
            <div className="name">קובי והחברים.ות מפולירון</div>
            <div className="about-donate">בזכותם כל בנות הבית ישנות טוב בלילה על מיטות ומזרנים משובחים של פולירון. גם את הבוגרות שלנו שיוצאות לחיים עצמאיים, פולירון יודעים לפנק ברוחב לב. תמיד שם. מחכים שנבקש.</div>
          </div>
          <div className="donate-cell">
            <img className="circle" src={Avatar} alt="" />
            <div className="name">גיל רמון אדריכלות נוף, תכנון והקמת גינות</div>
            <div className="about-donate">
              גיל גנן של נשמה. מתנדב סידרתי. יום אחד הופיע פתאום ולקח את הגינה שלנו תחת חסותו. בשקט ובהתמדה, בחום ובקור, דואג לנו לפרחים צבעוניים ומשמחים, לדשא בריא ומכוסח...
            </div>
          </div>
          <div className="donate-cell">
            <img className="circle" src={Avatar} alt="" />
            <div className="name">גיל רמון אדריכלות נוף, תכנון והקמת גינות</div>
            <div className="about-donate">
              גיל גנן של נשמה. מתנדב סידרתי. יום אחד הופיע פתאום ולקח את הגינה שלנו תחת חסותו. בשקט ובהתמדה, בחום ובקור, דואג לנו לפרחים צבעוניים ומשמחים, לדשא בריא ומכוסח...
            </div>
          </div>
          <div className="donate-cell">
            <img className="circle" src={Avatar} alt="" />
            <div className="name">
              אורנה דר
            </div>
            <div className="about-donate">
              למעלה מארבע שנים, כל שבוע בלי לפספס, אורנה שלנו מופיעה בכל יום שישי עם חלה לשבת, עוגה, פירות או הפתעה טעימה אחרת, מניחה במטבח, משאירה גם חיוך רחב, ויוצאת. כמו פיה טובה. וכולנו יודעות שהיא שם בשבילנו לכל צורך שיעלה פתאום. כל בית צריך אורנה.
            </div>
          </div>
          <div className="donate-cell">
            <img className="circle" src={Avatar} alt="" />
            <div className="name">
              אפרת כהן
            </div>
            <div className="about-donate">
              קראו עוד אוהבות לקרוא לה "המפקדת" 😊 אפרת אחראית, מרימה, מפיקה ומתכללת את כל ארוע המכירה השנתי "מתלבשות על הבית של עומר", מרחפת כמו פייה לפני, בארוע ואחרי, במגע של קסם וחיוך פתאום הכל קורה ומסתדר, לא מובן מאליו החיבור שלה לבית, היכולות המדהימות והנתינה הבלתי סופית. ובין מכ...
            </div>
          </div>
          <div className="donate-cell">
            <img className="circle" src={Avatar} alt="" />
            <div className="name">
              יפית סלע
            </div>
            <div className="about-donate">
              יפית יש בוטיק בגדים מהמם בהוד השרון, פעמיים בשנה היא מסמסת בשקט וצנעה ורק שואלת: כמה בנות בבית? לפי מספר הבנות, היא מכינה לכל אחת מהן שקית מפנקת של פרטי לבוש חדשים ישר מהחנות, שקית מלאה בטוב, נדיבות וחיוך ענק.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Donate