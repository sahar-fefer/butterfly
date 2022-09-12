import React from 'react'
import { Link } from "gatsby"

export default () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="title">ראשי</div>
                        <Link to='omers-house'>הבית של עומר</Link>
                        <Link to='omers-batterfly'>הפרפרים של עומר</Link>
                    </div>
                    <div className="group">
                        <div className="title">יצירת קשר</div>
                        <a href="tel:052-3338118">יעל - 052-3338118</a>
                        <a href="tel:054-4404322">איילת - 054-4404322</a>
                        <a href="mailto:omer.butterflies@gmail.com">omer.butterflies@gmail.com</a>
                    </div>
                    <div className="group">
                        <div className="title">מידע</div>
                        <Link to='about'>אודות</Link>
                        <Link to='bracelets'>צמידים</Link>
                        <Link to='events'>אירועים</Link>
                    </div>
                    <div className="group">
                        <div className="title">Social</div>
                        <a href='https://www.facebook.com/%D7%94%D7%91%D7%99%D7%AA-%D7%A9%D7%9C-%D7%A2%D7%95%D7%9E%D7%A8-152744878915859'>
                            הבית של עומר
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2697 20C16.2319 19.3926 20.0749 15.1638 20.0749 10.0375C20.0749 4.49392 15.581 0 10.0375 0C4.49392 0 0 4.49392 0 10.0375C0 15.1366 3.80225 19.3476 8.7262 19.99V13.9207H6.69141V10.9533H8.7262V9.17291C8.7262 6.72836 9.90891 5.01855 11.7784 5.01855H13.8132V7.98595H12.7958C11.7794 7.98595 11.2697 8.57943 11.2697 9.76639V10.9533H13.8132L13.3045 13.9207H11.2697V20Z" fill="white" />
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/butterfliesareforever'>
                            הפרפרים של עומר
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2697 20C16.2319 19.3926 20.0749 15.1638 20.0749 10.0375C20.0749 4.49392 15.581 0 10.0375 0C4.49392 0 0 4.49392 0 10.0375C0 15.1366 3.80225 19.3476 8.7262 19.99V13.9207H6.69141V10.9533H8.7262V9.17291C8.7262 6.72836 9.90891 5.01855 11.7784 5.01855H13.8132V7.98595H12.7958C11.7794 7.98595 11.2697 8.57943 11.2697 9.76639V10.9533H13.8132L13.3045 13.9207H11.2697V20Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="protects">
                    © 2022 - כל הזכויות שמורות לבית של עומר,<br /> אין לעשות שימוש בחומר המופיע בדף זה ללא אישור מפורש
                </div>
            </div>
        </footer>
    )
}
