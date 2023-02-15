import * as React from "react"
// import "../styles/_about.scss"
import "../styles/_bracelets.scss"

import Layout from "../components/layout"
import braceletsImg1 from '../images/bracelets1.jpg'
import braceletsImg2 from "../images/bracelets2.jpg"

//  markup
const Bracelets = () => {

  return (
    <Layout>
      <div className="bracelets">
        <div className="page-content">
          <h1 className='header'>צמידים</h1>
          <div className='sub-title'>
            <b>לכול אחד יש מה לתת ואין אחד שלא צריך משהו לפעמים</b> אם תרצו לקחת חלק במיזם החברתי הזה, להיות חלק מקהילה, צרו אתנו קשר, תקבלו צמיד ותוכלו על ידי מעשה טוב לאחר ולהעביר לו את הצמיד שקיבלתם..
            הצמיד יעבור הלאה בדיוק כמו אפקט הפרפר ותדעו שהתחלתם שרשרת אנושית של מעשים טובים.
            אחרי שתעבירו את הצמיד תוכלו תמיד לקבל חדש ולהמשיך...
          </div>
          <div className="images-wrapper">
            <img loading='lazy' src={braceletsImg1} alt="" />
            <img loading='lazy' src={braceletsImg2} alt="" />
          </div>
          <p className='text-grid'>
            אנחנו מזמינים כל מי שעוסק בחינוך ורואה כייעוד להנחיל ערכים של נתינה, חברות ועשיית טוב, לקחת חלק במיזם "הפרפרים של עומר" ולהשתמש בו כפלטפורמה ליישום ערכים אלו.
            <br />
            <br />
            <b>מה עושים עם הצמידים?</b>
            נשמח לשתף אתכם בשלל רעיונות שקיבלנו מהשטח במהלך החודש האחרון. תוכלו לעשות בהם שימוש ככל שיתאימו לכם ולבית ספרכם. כל רעיון אחר או נוסף הוא מבורך. ודאי יהיו לכם רעיונות חדשים ונפלאים, שנשמח לשמוע ולהעביר הלאה.
            <br />
            <br />
            <b>שלב א</b> - העברת הצמידים ביננו
            מחלקים צמידים, על פי הגרלה, לכ 20% מילדי הכתה.
            הצמיד בשלב זה יעבור רק בתוך הכתה במעשה טוב מאחד לשני.
            היעד הוא שכל אחד יקבל את הצמיד לפחות פעם אחת.
            הצמיד יעבור על כל יד בכתה.
            <br />
            <br />
            <b>
              מה אני יכול לתת? מה אני רוצה לתת? למי? מה מצפים ממני לתת? מהם הכוחות שלי?
              מה הייתי רוצה לקבל? מה אני צריך? מתי? ממי? האם אני יודע לבקש? האם רואים אותי?
            </b>
            <br />
            <br />
            <b>שלב ב</b> – מעבירים את זה הלאה
            חלוקה חגיגית של צמידים לכל אחד (שרוצה כמובן), ויציאה אל מחוץ לכתה, אל קהל שיוגדר או שנגדיר יחד (בית הספר, המשפחות, הקהילה, אוכלוסיות עם צרכים מיוחדים שאותן נאמץ וכד').
            הכל בהתאם לתכניות בית הספר, לקשר עם הקהילה, לפרויקטים של מעורבות אישית ועוד.
            <br />
            <br />
            שתפו אותנו, ספרו, שילחו תמונות, סיפורים סרטונים ורעיונות לדף הפייסבוק שלנו.
            זה מרגש, מעודד ונותן לנו ולאחרים כוח, להעביר את זה הלאה.
            <br />
            <br />
            <b>
              אנחנו לא לבד- אנחנו חלק ממשהו טוב שנותן לנו כוח.
            </b>
          </p>
        </div>
        <div className="page-footer">
          <h1 className="header">איזורי חלוקה</h1>
          <div className="cities">
            <div className="box">
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FFE7E8" />
                <path d="M30.8 29.6C31.5733 29.6 32.2333 29.3267 32.78 28.78C33.3267 28.2333 33.6 27.5733 33.6 26.8C33.6 26.0267 33.3267 25.3667 32.78 24.82C32.2333 24.2733 31.5733 24 30.8 24C30.0267 24 29.3667 24.2733 28.82 24.82C28.2733 25.3667 28 26.0267 28 26.8C28 27.5733 28.2733 28.2333 28.82 28.78C29.3667 29.3267 30.0267 29.6 30.8 29.6ZM30.8 42.84C34.3467 39.6133 36.9667 36.6867 38.66 34.06C40.3533 31.4333 41.2 29.12 41.2 27.12C41.2 23.9733 40.1933 21.4 38.18 19.4C36.1667 17.4 33.7067 16.4 30.8 16.4C27.8933 16.4 25.4333 17.4 23.42 19.4C21.4067 21.4 20.4 23.9733 20.4 27.12C20.4 29.12 21.2667 31.4333 23 34.06C24.7333 36.6867 27.3333 39.6133 30.8 42.84ZM30.8 46C26.5067 42.3467 23.3 38.9533 21.18 35.82C19.06 32.6867 18 29.7867 18 27.12C18 23.12 19.2867 19.9333 21.86 17.56C24.4333 15.1867 27.4133 14 30.8 14C34.1867 14 37.1667 15.1867 39.74 17.56C42.3133 19.9333 43.6 23.12 43.6 27.12C43.6 29.7867 42.54 32.6867 40.42 35.82C38.3 38.9533 35.0933 42.3467 30.8 46Z" fill="#FF121C" />
              </svg>
              באר - שבע
            </div>
            <div className="box">
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FFE7E8" />
                <path d="M30.8 29.6C31.5733 29.6 32.2333 29.3267 32.78 28.78C33.3267 28.2333 33.6 27.5733 33.6 26.8C33.6 26.0267 33.3267 25.3667 32.78 24.82C32.2333 24.2733 31.5733 24 30.8 24C30.0267 24 29.3667 24.2733 28.82 24.82C28.2733 25.3667 28 26.0267 28 26.8C28 27.5733 28.2733 28.2333 28.82 28.78C29.3667 29.3267 30.0267 29.6 30.8 29.6ZM30.8 42.84C34.3467 39.6133 36.9667 36.6867 38.66 34.06C40.3533 31.4333 41.2 29.12 41.2 27.12C41.2 23.9733 40.1933 21.4 38.18 19.4C36.1667 17.4 33.7067 16.4 30.8 16.4C27.8933 16.4 25.4333 17.4 23.42 19.4C21.4067 21.4 20.4 23.9733 20.4 27.12C20.4 29.12 21.2667 31.4333 23 34.06C24.7333 36.6867 27.3333 39.6133 30.8 42.84ZM30.8 46C26.5067 42.3467 23.3 38.9533 21.18 35.82C19.06 32.6867 18 29.7867 18 27.12C18 23.12 19.2867 19.9333 21.86 17.56C24.4333 15.1867 27.4133 14 30.8 14C34.1867 14 37.1667 15.1867 39.74 17.56C42.3133 19.9333 43.6 23.12 43.6 27.12C43.6 29.7867 42.54 32.6867 40.42 35.82C38.3 38.9533 35.0933 42.3467 30.8 46Z" fill="#FF121C" />
              </svg>
              רחובות
            </div>
            <div className="box">
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FFE7E8" />
                <path d="M30.8 29.6C31.5733 29.6 32.2333 29.3267 32.78 28.78C33.3267 28.2333 33.6 27.5733 33.6 26.8C33.6 26.0267 33.3267 25.3667 32.78 24.82C32.2333 24.2733 31.5733 24 30.8 24C30.0267 24 29.3667 24.2733 28.82 24.82C28.2733 25.3667 28 26.0267 28 26.8C28 27.5733 28.2733 28.2333 28.82 28.78C29.3667 29.3267 30.0267 29.6 30.8 29.6ZM30.8 42.84C34.3467 39.6133 36.9667 36.6867 38.66 34.06C40.3533 31.4333 41.2 29.12 41.2 27.12C41.2 23.9733 40.1933 21.4 38.18 19.4C36.1667 17.4 33.7067 16.4 30.8 16.4C27.8933 16.4 25.4333 17.4 23.42 19.4C21.4067 21.4 20.4 23.9733 20.4 27.12C20.4 29.12 21.2667 31.4333 23 34.06C24.7333 36.6867 27.3333 39.6133 30.8 42.84ZM30.8 46C26.5067 42.3467 23.3 38.9533 21.18 35.82C19.06 32.6867 18 29.7867 18 27.12C18 23.12 19.2867 19.9333 21.86 17.56C24.4333 15.1867 27.4133 14 30.8 14C34.1867 14 37.1667 15.1867 39.74 17.56C42.3133 19.9333 43.6 23.12 43.6 27.12C43.6 29.7867 42.54 32.6867 40.42 35.82C38.3 38.9533 35.0933 42.3467 30.8 46Z" fill="#FF121C" />
              </svg>
              הוד השרון
            </div>
          </div>
          <p className="contact">
            אם אתם רוצים לאסוף צמידים ולהיות חלק מהפרויקט<br /> שלנו או להצטרף כאזור חלוקה, צרו קשר
            <br />
          </p>
          <p className="contact-num">
            איילת -
            <a className="red" href="tel:054-4404322"> 054-4404322</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Bracelets