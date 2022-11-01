import React from 'react'

function contactUs() {

    return (
        <section className='contact-us'>
            <h1>צור קשר</h1>
            <div className='title sub'>שלחו פנייה ונשמח לעמוד לרשותכם בכל נושא</div>
            <div className='title m'>יש לכם שאלה דחופה?</div>
            <div className='text s-title'>אנחנו זמינות עבורכם גם בטלפון:</div>
            <div className='text'>
                יעל - <a className="num" href="tel:+972523338118">052-3338118</a>
            </div>
            <div className='text'>
                איילת - <a className="num" href="tel:+97254-4404322">054-4404322</a>
            </div>
            <div className='title m'>מייל</div>
            <a className="email" href="mailto: omer.butterflies@gmail.com">omer.butterflies@gmail.com</a>
        </section>
    )
}

export default contactUs