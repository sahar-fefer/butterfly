import React from 'react'
import * as s from "../../pages/contact/_contact.module.scss";

function contactUs() {

    return (
        <section className={s.contactUs}>
            <h1>צור קשר</h1>
            <div className={`${s.title} ${s.sub}`}>שלחו פנייה ונשמח לעמוד לרשותכם בכל נושא</div>
            <div className={`${s.title} ${s.m}`}>יש לכם שאלה דחופה?</div>
            <div className={`${s.text} ${s.sTitle}`}>אנחנו זמינות עבורכם גם בטלפון:</div>
            <div className={s.text}>
                יעל - <a className={s.num} href="tel:+972523338118">052-3338118</a>
            </div>
            <div className={s.text}>
                איילת - <a className={s.num} href="tel:+97254-4404322">054-4404322</a>
            </div>
            <div className={`${s.title} ${s.m}`}>מייל</div>
            <a className={s.email} href="mailto: omer.butterflies@gmail.com">omer.butterflies@gmail.com</a>
        </section>
    )
}

export default contactUs