import React, { useEffect } from 'react'
import { Link } from "gatsby"

export default () => {
    const resetNav = () => {
        localStorage.setItem('isNavOpen', JSON.stringify(false));
    }
    return (
        <footer>
            <div className="wrapper">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="title">ראשי</div>
                        <Link to='/omers-house' onClick={resetNav}>הבית של עומר</Link>
                        <Link to='/omers-butterflies' onClick={resetNav}>הפרפרים של עומר</Link>
                        <Link to='/bracelets' onClick={resetNav}>צמידים</Link>
                    </div>
                    <div className="group">
                        <div className="title">יצירת קשר</div>
                        <a href="tel:052-3338118">יעל - 052-3338118</a>
                        <a href="tel:054-4404322">איילת - 054-4404322</a>
                        <a href="mailto:omer.butterflies@gmail.com">omer.butterflies@gmail.com</a>
                    </div>
                    <div className="group">
                        <div className="title">מידע</div>
                        <Link to='/about' onClick={resetNav}>אודות</Link>
                        <Link to='/events' onClick={resetNav}>אירועים</Link>
                        <a href="https://www.websiteplanet.com/he/blog/%D7%94%D7%AA%D7%90%D7%99%D7%9E%D7%95-%D7%90%D7%AA-%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%94%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA-%D7%A9%D7%9C%D7%9B%D7%9D-%D7%9C-gdpr/" target="_blank">
                            מדיניות פרטיות
                        </a>
                        {/* <Link to='/privacy'>מדיניות פרטיות</Link> */}
                    </div>
                    <div className="group">
                        <div className="title">Social</div>
                        <a href='https://www.facebook.com/%D7%94%D7%91%D7%99%D7%AA-%D7%A9%D7%9C-%D7%A2%D7%95%D7%9E%D7%A8-152744878915859' target="_blank">
                            הבית של עומר
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2697 20C16.2319 19.3926 20.0749 15.1638 20.0749 10.0375C20.0749 4.49392 15.581 0 10.0375 0C4.49392 0 0 4.49392 0 10.0375C0 15.1366 3.80225 19.3476 8.7262 19.99V13.9207H6.69141V10.9533H8.7262V9.17291C8.7262 6.72836 9.90891 5.01855 11.7784 5.01855H13.8132V7.98595H12.7958C11.7794 7.98595 11.2697 8.57943 11.2697 9.76639V10.9533H13.8132L13.3045 13.9207H11.2697V20Z" fill="white" />
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/butterfliesareforever' target="_blank">
                            הפרפרים של עומר
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2697 20C16.2319 19.3926 20.0749 15.1638 20.0749 10.0375C20.0749 4.49392 15.581 0 10.0375 0C4.49392 0 0 4.49392 0 10.0375C0 15.1366 3.80225 19.3476 8.7262 19.99V13.9207H6.69141V10.9533H8.7262V9.17291C8.7262 6.72836 9.90891 5.01855 11.7784 5.01855H13.8132V7.98595H12.7958C11.7794 7.98595 11.2697 8.57943 11.2697 9.76639V10.9533H13.8132L13.3045 13.9207H11.2697V20Z" fill="white" />
                            </svg>
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=972544404322&data=AWDSJ3-3Mwj5cd5zk7J3wFNtdCd0wocfne9KgkWrNHWH_XUpGJgxpCofG_v1J1rXRZe8Wpc3EN7Vy3vAMsOaRr0ReLJYZJwdTAIrtJLUAZnlEylPxpBUX5wwnrkFO-ymev_QKmyC6fiyiJ-VLZ73DjwAhUcI3p1Fib4_F9tFlBFDETFHKXs7zOePU5K3qTyOdCZNCPlSp0nMa7-_rUnaRVQwgEep9MoTWF86jEo2Sq-T_xNx4WiEGJHV0CFGwMBSUxNfAyuWMjVC0FU1tQU&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0x-TdaPUcIBvMMIhUG_8wcnJh1jZfUC1Al6OSBwr3oIspRBj54LhA32NE' target="_blank">
                            WhatsApp
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.425557 20C0.313252 20 0.204 19.9556 0.122976 19.8737C0.0161643 19.7656 -0.0250343 19.6088 0.0150962 19.4621L1.3153 14.7142C0.505818 13.2504 0.0790304 11.5945 0.0796408 9.91364C0.0819296 4.44717 4.53047 0 9.99646 0C12.6477 0.00106812 15.1388 1.03378 17.0112 2.90756C18.8833 4.78149 19.9139 7.27249 19.9131 9.92157C19.9107 15.3882 15.4622 19.8357 9.99646 19.8357C9.99646 19.8357 9.99234 19.8357 9.99219 19.8357C8.39567 19.8351 6.81288 19.446 5.40358 18.709L0.533436 19.9861C0.497731 19.9954 0.461415 20 0.425557 20Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.62441 5.94709C7.4468 5.55219 7.25973 5.54425 7.09066 5.53739C6.95242 5.53144 6.79419 5.53174 6.63626 5.53174C6.47818 5.53174 6.22122 5.59125 6.00393 5.82853C5.7865 6.0658 5.17371 6.63953 5.17371 7.80638C5.17371 8.97338 6.02362 10.1009 6.14218 10.2592C6.26074 10.4175 7.7828 12.8885 10.1932 13.8391C12.1965 14.6292 12.6041 14.4721 13.039 14.4325C13.4739 14.393 14.442 13.8588 14.6396 13.3051C14.8374 12.7513 14.8374 12.2768 14.778 12.1774C14.7187 12.0787 14.5606 12.0194 14.3235 11.9008C14.0863 11.7822 12.9204 11.2083 12.703 11.1293C12.4855 11.0501 12.3275 11.0107 12.1694 11.2482C12.0112 11.4853 11.5571 12.0194 11.4187 12.1774C11.2803 12.336 11.1419 12.3558 10.9047 12.2371C10.6676 12.1182 9.90377 11.868 8.9977 11.06C8.29275 10.4315 7.81667 9.65514 7.67828 9.41772C7.54003 9.18059 7.67599 9.06341 7.7825 8.93386C7.9743 8.70055 8.2961 8.28108 8.37514 8.123C8.45419 7.96461 8.41466 7.82622 8.35546 7.7075C8.2961 7.58894 7.83514 6.41614 7.62441 5.94709Z" fill="#0D1F2D" stroke="#0D1F2D" strokeWidth="0.8" />
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
