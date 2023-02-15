import React, { useEffect, useState } from "react"
import "../styles/_donate.scss"
// import "../styles/donate.scss"

import Layout from "../components/layout"
import SimpleWood from "../images/simply-wood-donates.jpg"
import Riviera from "../images/riviera-donates.jpg"
import Polyron from "../images/polyron-donates.jpg"
import Avatar from "../images/avatar-donates.jpg"

//  markup
const Donate = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    function handleWindowResize() {
      setIsDesktop(window.innerWidth >= 1280);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const donatedList = [
    {
      imgName: SimpleWood,
      imgShape: 'square',
      imgAlt: 'סימפלי ווד- רשת חנויות ריהוט לבית',
      name: 'דני וגיא יאברי מסימפלי ווד',
      about: 'רשת חנויות ריהוט לבית מלווים את הבית של עומר משלב הקמתו. עזרו לנו להפוך קירות לבית. ספות וכורסאות רכות ומפנקות, שולחן אוכל גדול, כסאות נוחים וצבעוניים, שולחן עבודה ובעיקר לא שמענו מהם אף פעם שאי אפשר. תמיד מוצאים את הדרך לומר כן.'
    },
    {
      imgName: Riviera,
      imgShape: 'square',
      imgAlt: 'אורי סגרה וכל החברים בארונות רביירה',
      name: 'אורי סגרה וכל החברים בארונות רביירה',
      about: 'מה היינו עושות בלעדיכם? הבגדים של בנות הבית (ויש לנו לא מעט...) מסודרים בארונות קיר לבנים, מרווחים שנבנו לנו ברביירה במיוחד לפי מידה. הובלתם והרכבתם לנו ארון בכ',
      about2: 'ל חדר וחדר כשהקמנו את הבית וגם כשעברנו לבית חדש, תמיד בחיוך ובשמחה',
      short: true
    },
    {
      imgName: Polyron,
      imgShape: 'square',
      imgAlt: 'קובי והחברים.ות מפולירון',
      name: 'קובי והחברים.ות מפולירון',
      about: 'בזכותם כל בנות הבית ישנות טוב בלילה על מיטות ומזרנים משובחים של פולירון. גם את הבוגרות שלנו שיוצאות לחיים עצמאיים, פולירון יודעים לפנק ברוחב לב. תמיד שם. מחכים שנבקש.'
    },
    {
      imgName: Avatar,
      imgShape: 'circle',
      imgAlt: 'גיל רמון אדריכלות נוף, תכנון והקמת גינות',
      name: 'גיל רמון אדריכלות נוף, תכנון והקמת גינות',
      about: 'גיל גנן של נשמה. מתנדב סידרתי. יום אחד הופיע פתאום ולקח את הגינה שלנו תחת חסותו. בשקט ובהתמדה, בחום ובקור, דואג לנו לפרחים צבעוניים ומשמחים, לדשא בריא ומכוסח',
      about2: ' היטב, לצמחי תבלין, שותל, מטפח, מרחיק עשבים ועושה את הגינה ואותנו שמחות.',
      short: true
    },
    {
      imgName: Avatar,
      imgShape: 'circle',
      imgAlt: 'אורנה דר',
      name: 'אורנה דר',
      about: 'למעלה מארבע שנים, כל שבוע בלי לפספס, אורנה שלנו מופיעה בכל יום שישי עם חלה לשבת, עוגה, פירות או הפתעה טעימה אחרת, מניחה במטבח, משאירה גם חיוך רחב, ויוצאת. כמו פיה טובה. וכולנו יודעות שהיא שם בשבילנו לכל צורך שיעלה פתאום. כל בית צריך אורנה.'
    },
    {
      imgName: Avatar,
      imgShape: 'circle',
      imgAlt: 'אפרת כהן',
      name: 'אפרת כהן',
      about: 'אנחנו אוהבות לקרוא לה "המפקדת" 😊 אפרת אחראית, מרימה, מפיקה ומתכללת את כל ארוע המכירה השנתי "מתלבשות על הבית של עומר", מרחפת כמו פייה לפני, בארוע ואחרי, במגע של קסם וחיוך פתאום הכל קורה ומסתדר, לא מובן מאליו החיבור שלה לבית, היכולות המדהימות והנתינה הבלתי סופית. ובין מכ',
      about2: 'ירה למכירה היא תמיד איתנו לכל מה שנדרש. מלווה צעירות אשר מסיימות את שהותן בבית, דואגת שהמעבר יעבור בקלות ולכל מה שזקוקות בבית החדש, מנטורית לחיים עבורן, וגם עבורינו.',
      short: true
    },
    {
      imgName: Avatar,
      imgShape: 'circle',
      imgAlt: 'יפית סלע',
      name: 'יפית סלע',
      about: 'ליפית יש בוטיק בגדים מהמם בהוד השרון, פעמיים בשנה היא מסמסת בשקט וצנעה ורק שואלת: כמה בנות בבית? לפי מספר הבנות, היא מכינה לכל אחת מהן שקית מפנקת של פרטי לבוש חדשים ישר מהחנות, שקית מלאה בטוב, נדיבות וחיוך ענק.'
    }
  ]

  const onReadMore = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const parent: HTMLElement | null = e.currentTarget.closest('.about-donate')
    parent && parent.classList.add('read-more-open')
  }

  return (
    <Layout>
      <div className="donate-page">
        <h1 className="header">מתנדבים ותורמים</h1>
        <div className="sub-title">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </div>
        <div className="donates-gride">
          {
            donatedList.map((details, i) => {
              return (
                <div className="donate-cell" key={i}>
                  <img loading='lazy' className={details.imgShape} src={details.imgName} alt={details.imgAlt} />
                  <div className="info">
                    <div className="name">
                      {details.name}
                    </div>
                    <div className={`about-donate`}>
                      {details.about}
                      {details.about2 && isDesktop
                        ?
                        <span>
                          <span className="dots">...</span>
                          <span className="about2">{details.about2}</span>
                          <span className="read-more" onClick={(event) => onReadMore(event)}>
                            <button>להמשך קריאה</button>
                          </span>
                        </span>
                        :
                        <span>{details.about2}</span>
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="donate-banner">
          <h3>רוצים לקחת חלק?</h3>
          <div className="sub-header">
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.
          </div>
          <div className="red-button">להתנדבות</div>
        </div>
      </div>
    </Layout>
  )
}

export default Donate